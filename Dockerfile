FROM node:16.13.0-alpine
WORKDIR /usr/src/app/api
RUN set -ex && \
    adduser node root

COPY package*.json ./

# Install production dependencies.
# RUN npm ci
RUN npm install

COPY . ./api

ENV MONGO_URI2 = mongodb+srv://rana:rana@cluster0.e4pfi5c.mongodb.net/?retryWrites=true&w=majority
ENV secretOrKey = MySecret
ENV adminPanelLogin = admin@e-learning.com
ENV adminPanelPassword = admin

EXPOSE 8080
CMD ["node", "server.js"]