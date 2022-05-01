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
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
#COPY . ./
CMD ["npm", "run", "start"]
