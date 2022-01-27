FROM node:16-alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm ci -qy
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
RUN chown -R node.node /usr/app
COPY . ./

EXPOSE 8080

CMD ["npm", "start"]