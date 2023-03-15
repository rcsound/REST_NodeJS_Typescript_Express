FROM node:18 as base

RUN mkdir -p /home/node/app
RUN mkdir -p /home/node/app/db
WORKDIR /home/node/app

COPY package*.json /home/node/app
RUN npm install

COPY . .

EXPOSE 3002

FROM base as production

ENV NODE_PATH=./build

RUN npm run build