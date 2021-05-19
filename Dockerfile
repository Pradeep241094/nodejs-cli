FROM node:10.24.0
COPY . /app
WORKDIR /app
RUN npm install
RUN npm link
ENTRYPOINT ["node", "."]
