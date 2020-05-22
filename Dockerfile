FROM node:10.15.1
COPY package.json ./
COPY . .
EXPOSE 8080
CMD node server.js
