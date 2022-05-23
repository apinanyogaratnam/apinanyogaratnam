FROM node:17.9.0-buster as deps
WORKDIR /usr/src/app

COPY package.json ./
# COPY .npmrc ./.npmrc
# COPY .env.production ./.env.production

RUN npm i

FROM node:17.9.0-buster as builder
WORKDIR /usr/src/app
COPY . .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package-lock.json ./package-lock.json
# COPY --from=deps /usr/src/app/.env.production ./.env.production

RUN npm run build

FROM node:17.9.0-buster as runner
WORKDIR /usr/src/app
ENV PORT=3001
# COPY --from=builder /usr/src/app/theme.js ./theme.js
# COPY --from=builder /usr/src/app/.npmrc ./.npmrc
COPY --from=builder /usr/src/app/next.config.js ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/pages ./pages
COPY --from=builder /usr/src/app/styles ./styles
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package-lock.json ./package-lock.json
COPY --from=builder /usr/src/app/package.json ./package.json
# COPY --from=builder /usr/src/app/.env.production ./.env.production

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs

EXPOSE 3000

CMD ["npm", "start"]
