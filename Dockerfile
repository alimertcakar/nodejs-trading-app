FROM node:14.15.4-alpine3.12
ENV NODE_ENV=production
WORKDIR /
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD ["node","server.mjs"]