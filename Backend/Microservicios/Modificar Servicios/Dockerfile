FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci  --omit=dev
# If you are building your code for production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "app.js" ]