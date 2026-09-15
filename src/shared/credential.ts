export type LarkTokenType = 'user_access_token' | 'tenant_access_token';

export interface RequestCredential {
  type: LarkTokenType;
  accessToken: string;
}

export interface RequestExecutionContext {
  requestId: string;
  credential?: RequestCredential;
  signal?: AbortSignal;
}
