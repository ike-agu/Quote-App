FROM node:alpine

ENV NODE_ENV=production
COPY . /Quote-App
WORKDIR /Quote-App/backend

RUN npm ci --omit=dev

# Return to root directory
WORKDIR /Quote-App
ENTRYPOINT ["node", "backend/server.js"]
