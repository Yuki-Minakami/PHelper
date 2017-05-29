FROM node:7.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /app

RUN npm install

CMD ["npm", "start"]