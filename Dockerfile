FROM node:12.13

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY dist dist
COPY .env .
COPY ormconfig.js .

# both need to be equal to PORT and DB_PORT environment variables
EXPOSE 3000 3306
CMD ["yarn", "start:prod"]
