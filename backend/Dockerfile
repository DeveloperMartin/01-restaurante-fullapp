FROM node:18-bullseye-slim

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["node", "./index.js"]