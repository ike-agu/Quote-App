FROM node:alpine

ENV NODE_ENV=production
COPY . /Quote-App
WORKDIR /Quote-App

RUN npm install --omit=dev ci
ENTRYPOINT ["node", "backend/server.js"]
