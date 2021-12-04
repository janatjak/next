FROM node:alpine

ENV API_URL http://127.0.0.1:3000

WORKDIR /home/node

COPY . .

RUN yarn install && yarn build && yarn install --prod && yarn cache clean

EXPOSE 3000
CMD ["yarn", "start"]
