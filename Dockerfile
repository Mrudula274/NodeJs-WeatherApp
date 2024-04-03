FROM node:12.2.0-alpine
WORKDIR app
copy . .
RUN npm install
RUN npm run test
EXPOSE 3000
CMD ["node","app.js"]
