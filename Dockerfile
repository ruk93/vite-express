FROM node:18-alpine AS build
WORKDIR /app

COPY . ./
RUN  yarn install
RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 ruk

#COPY --from=build --chown=ruk:nodejs /app/workspaces/server/dist ./
COPY --from=build /app/workspaces/server/dist ./

USER ruk

EXPOSE 3009

ENV PORT 3009

CMD ["node", "index"]
