# syntax=docker/dockerfile:1

FROM node:20-bookworm-slim AS build

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    ca-certificates \
    python3 \
    make \
    g++ \
    pkg-config \
    libsecret-1-dev \
  && rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --frozen-lockfile

COPY src ./src
RUN yarn build

RUN yarn install --frozen-lockfile --production \
  && yarn cache clean

FROM node:20-bookworm-slim

ENV NODE_ENV=production

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    ca-certificates \
    libsecret-1-0 \
  && rm -rf /var/lib/apt/lists/*

COPY --from=build --chown=node:node /app/package.json ./package.json
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist

USER node

EXPOSE 3000

ENTRYPOINT ["node", "/app/dist/cli.js"]
CMD ["--help"]

