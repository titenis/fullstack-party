FROM node:latest as builder

ARG ROOTURL
ARG APIURL
ARG GITHUB_URL
ARG GITHUB_API_URL
ARG CLIENT_ID
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /var/www
COPY . /var/www

RUN npm install
RUN npm run build

FROM nginx:1.13.9-alpine
COPY --from=builder /var/www/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]