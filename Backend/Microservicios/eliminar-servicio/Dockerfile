FROM node:16-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN ls -a
RUN npm install
RUN npm i -g typescript
RUN tsc -p .

FROM node:16-alpine
WORKDIR /usr
COPY package.json ./
RUN npm install --omit=dev
COPY --from=0 /usr/dist .
RUN npm install pm2 -g
EXPOSE 5000
CMD ["pm2-runtime","app.js"]