# Passthrough 模式使用指南

本文介绍如何以 passthrough 模式运行 lark-mcp。该模式面向 CSGClaw Connector 或类似网关服务：Connector 负责获取并刷新飞书/Lark 的访问凭证，lark-mcp 只负责把 MCP `tools/call` 转发到飞书 OpenAPI。

[返回中文 README](../../../README_ZH.md)

## 适用场景

passthrough 模式适合以下场景：

- 需要部署一个共享的远端 MCP Server。
- 不希望 MCP Server 保存 App ID、App Secret、refresh token 或用户 token。
- UAT/TAT 已经由上游 Connector 管理。
- 每次 MCP `tools/call` 都可以由上游 Connector 注入请求级 Header。

不适合以下场景：

- 直接给普通 MCP 客户端使用，但客户端无法为每次工具调用动态设置 Header。
- 希望 lark-mcp 自己完成 OAuth 登录、token 刷新或本地 token 存储。
- 希望在同一个请求里由工具参数切换用户身份或应用身份。

## 职责边界

passthrough 模式只消费现成的飞书/Lark access token，不负责生成或验证 token。

| 能力 | 负责方 |
|---|---|
| 用户 OAuth、refresh token 管理、UAT 刷新 | Connector |
| App 凭证管理、TAT 获取和刷新 | Connector |
| MCP 协议解析、工具列表、工具参数校验 | lark-mcp |
| 将 UAT/TAT 显式传给飞书 OpenAPI | lark-mcp |
| token 真伪、有效期、scope、资源权限校验 | 飞书/Lark OpenAPI |

lark-mcp 在 passthrough 模式下不会保存 token，不会读取 App Secret，不会启动 OAuth callback，也不会调用飞书凭证签发接口。

## 启动服务

### 本地源码启动

在仓库根目录执行：

```bash
yarn install --frozen-lockfile
yarn build

env -u APP_ID -u APP_SECRET -u USER_ACCESS_TOKEN -u LARK_TOKEN_MODE \
  node dist/cli.js mcp \
  --credential-mode passthrough \
  --mode streamable \
  --host 0.0.0.0 \
  --port 3000 \
  --domain https://open.feishu.cn \
  --tools preset.default \
  --language zh
```

如果使用国际版 Lark，将 `--domain` 改为：

```bash
--domain https://open.larksuite.com
```

### Docker 启动

先构建当前仓库镜像：

```bash
docker build -t lark-mcp:passthrough .
```

再启动服务：

```bash
docker run --rm \
  -p 3000:3000 \
  lark-mcp:passthrough \
  mcp \
  --credential-mode passthrough \
  --mode streamable \
  --host 0.0.0.0 \
  --port 3000 \
  --domain https://open.feishu.cn \
  --tools preset.default \
  --language zh
```

passthrough 容器不需要挂载 token 数据卷，也不需要传入 `APP_ID`、`APP_SECRET` 或 `USER_ACCESS_TOKEN`。

## 健康检查

服务启动后可以检查：

```bash
curl http://127.0.0.1:3000/healthz
```

期望返回：

```json
{"status":"ok"}
```

检查就绪状态：

```bash
curl http://127.0.0.1:3000/readyz
```

返回示例：

```json
{
  "status": "ready",
  "version": "0.5.1",
  "mode": "passthrough",
  "transport": "streamable",
  "toolCount": 19,
  "tokenStorage": false,
  "oauth": false
}
```

## 请求 Header 契约

`initialize` 和 `tools/list` 可以不带飞书 token。`tools/call` 必须带以下 Header：

| Header | 是否必填 | 说明 |
|---|---|---|
| `Authorization: Bearer <token>` | 是 | 直接承载飞书/Lark UAT 或 TAT |
| `X-Lark-Token-Type` | 是 | 只能是 `user_access_token` 或 `tenant_access_token` |
| `Content-Type: application/json` | 是 | MCP JSON-RPC 请求体 |
| `Accept: application/json, text/event-stream` | 建议 | 兼容 Streamable HTTP 返回 |
| `X-Request-Id` | 可选 | 调用链追踪 ID；不传时服务端生成 |

注意：

- `Authorization` 不是 lark-mcp 自身的登录凭证，而是下游飞书 OpenAPI 的访问凭证。
- lark-mcp 不从 token 字符串猜测类型，必须由 `X-Lark-Token-Type` 指明。
- 请求 query 不允许覆盖 `tools`、`domain`、`language`、`toolNameCase`、`tokenMode` 等服务端配置。
- 工具参数里的 `useUAT` 只作为兼容字段。如果它和 `X-Lark-Token-Type` 冲突，请求会被拒绝。

## 调用示例

### initialize

```bash
curl -sS -X POST http://127.0.0.1:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  --data '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize",
    "params": {
      "protocolVersion": "2024-11-05",
      "capabilities": {},
      "clientInfo": {
        "name": "connector",
        "version": "0.0.1"
      }
    }
  }'
```

### 使用 UAT 调用工具

以下示例使用用户身份调用文档搜索工具。`<USER_ACCESS_TOKEN>` 应由 Connector 通过用户 OAuth 会话获取并刷新。

```bash
curl -sS -X POST http://127.0.0.1:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H 'Authorization: Bearer <USER_ACCESS_TOKEN>' \
  -H 'X-Lark-Token-Type: user_access_token' \
  --data '{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "tools/call",
    "params": {
      "name": "docx_builtin_search",
      "arguments": {
        "data": {
          "search_key": "项目文档",
          "count": 5
        }
      }
    }
  }'
```

### 使用 TAT 调用工具

以下示例使用应用身份调用通讯录工具。`<TENANT_ACCESS_TOKEN>` 应由 Connector 使用对应 App 凭证获取并刷新。

```bash
curl -sS -X POST http://127.0.0.1:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H 'Authorization: Bearer <TENANT_ACCESS_TOKEN>' \
  -H 'X-Lark-Token-Type: tenant_access_token' \
  --data '{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "tools/call",
    "params": {
      "name": "contact_v3_user_batchGetId",
      "arguments": {
        "data": {
          "emails": ["user@example.com"]
        }
      }
    }
  }'
```

工具是否支持 UAT/TAT 由工具自身的 `accessTokens` 元数据决定。如果当前 token 类型不被工具支持，lark-mcp 会直接返回 `token_type_not_supported`，不会请求飞书 OpenAPI。

## 常见错误

| 错误码 | 含义 | 处理建议 |
|---|---|---|
| `missing_lark_credential` | `tools/call` 未携带 `Authorization` | Connector 补充 Bearer token |
| `missing_token_type` | 缺少 `X-Lark-Token-Type` | Connector 补充 token 类型 |
| `invalid_token_type` | token 类型不是允许值 | 只使用 `user_access_token` 或 `tenant_access_token` |
| `request_config_override_not_allowed` | 请求 query 尝试覆盖服务端配置 | 删除 query 参数，在启动命令中固定配置 |
| `identity_override_not_allowed` | `useUAT` 与 Header token 类型冲突 | 以 Header 为准，删除或修正 `useUAT` |
| `token_type_not_supported` | 工具不支持当前 token 类型 | 换用支持该身份的工具或由 Connector 传另一类 token |
| `lark_token_invalid` | 飞书返回 token 无效或过期 | Connector 刷新 token 后重试 |
| `lark_scope_missing` | token scope 或资源权限不足 | 检查应用权限、用户授权和资源访问权限 |
| `upstream_retryable` | 飞书 429 或 5xx | 按幂等性判断后退避重试 |

飞书鉴权失败会作为 MCP Tool Result 返回，不会通过 HTTP 401 或 MCP OAuth challenge 让客户端重新登录。重新授权和刷新 token 始终由 Connector 负责。

## 安全与部署建议

- 生产环境必须通过 HTTPS 暴露服务，避免明文传输 access token。
- 固定 `--tools` allowlist，避免暴露不需要的 OpenAPI 工具。
- 不要把 App Secret、refresh token 或 access token 配置到 lark-mcp 容器环境变量中。
- 出口网络只允许访问配置的飞书/Lark OpenAPI 域名。
- 建议由上游网关或部署平台做入口鉴权、限流和审计；passthrough 模式本身不认证调用方。

## 与 standalone 模式的区别

| 项目 | standalone | passthrough |
|---|---|---|
| App ID/App Secret | lark-mcp 持有 | Connector 持有，lark-mcp 不接收 |
| OAuth | lark-mcp 可启动 OAuth | lark-mcp 不启动 OAuth |
| token 存储 | 可能使用本地存储 | 不存储 |
| UAT/TAT 来源 | lark-mcp 或 SDK 管理 | 每次请求 Header |
| 适用对象 | 个人或本地 MCP 客户端 | 远端 Connector/网关 |
