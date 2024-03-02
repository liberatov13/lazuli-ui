FROM node:20
LABEL authors="liberatov13"

COPY . /app
WORKDIR /app

RUN rm -rf node_modules
RUN npm install
RUN npm run build --configuration=production

FROM nginx:1.25

LABEL authors="liberatov13"

COPY --from=0 /app/dist/lazuli-ui /usr/share/nginx/html

EXPOSE 80
