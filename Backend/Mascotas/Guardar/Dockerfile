FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci --only=production
# If you are building your code for production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "app.js" ]