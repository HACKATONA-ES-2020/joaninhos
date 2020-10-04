FROM node:14

WORKDIR /usr/src/app

ADD bot ./

CMD ["node", "index.js"]