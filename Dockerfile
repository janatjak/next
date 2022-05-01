FROM node:alpine

ENV API_URL http://127.0.0.1:3000

WORKDIR /tmp

COPY . .

# public -> standalone/public
# .next/static -> standalone/.next/static
RUN yarn install && yarn build && \
    mv public .next/standalone/public && \
    mv .next/static .next/standalone/.next/static && \
    mv .next/standalone /home/node && \
    yarn cache clean && rm -rf /tmp

WORKDIR /home/node/standalone

EXPOSE 3000
CMD ["node", "server.js"]
