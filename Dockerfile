FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY ./backend ./backend
COPY ./frontend ./frontend

RUN yarn install

WORKDIR /usr/src/app/frontend

RUN yarn build

WORKDIR /usr/src/app/backend

RUN yarn tsc

CMD ["yarn", "start"]



