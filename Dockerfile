FROM node:20-alpine

WORKDIR /app

COPY webapp/package.json webapp/package-lock.json* ./
RUN npm install

COPY webapp/ ./
RUN npm run build

EXPOSE 3000
CMD ["node", "server.js"]
