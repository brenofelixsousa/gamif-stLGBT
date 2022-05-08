FROM node:16-alpine AS base

WORKDIR /home/node/app

RUN npm install -g increase-memory-limit
RUN increase-memory-limit
RUN npm install -g concurrently
RUN npm install -g react-scripts

COPY package*.json ./
EXPOSE 3000

#FROM base as production
#ENV NODE_ENV=production
#RUN npm run build
#COPY . ./
#CMD ["npm", "run", "server"]

FROM base as dev

WORKDIR /home/node/app

ENV NODE_ENV=development

RUN npm install -g nodemon && npm install
RUN chown -R node:node /home/node/app
RUN mkdir node_modules/.cache
RUN chmod -R 777 node_modules/.cache

CMD ["npm", "run", "start"]
