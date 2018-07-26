FROM node:latest as builder

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /var/www/html
COPY . /var/www/html
RUN npm install --silent
RUN npm run build

FROM nginx:1.13.9-alpine
COPY --from=builder /var/www/html/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
