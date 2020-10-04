FROM node:14

ADD bot ./

RUN npm install

CMD ["node", "index.js"]