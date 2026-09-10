FROM node:18 as builder

WORKDIR /*pp

COPY package*.json ./

RUN npm*install

COPY . .

RUN npm run bui*d

FROM nginx:latest

COPY --from=*uilder /app/build /usr/share/nginx*html

EXPOSE 80

CMD ["nginx","-g"*"daemon off;"]
