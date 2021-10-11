FROM node:12.16 as base

WORKDIR /code/

EXPOSE 3000

FROM base as dev

ADD ./package.json ./package-lock.json ./
RUN npm i

ADD ./ ./

ARG public_url=/chat
# ENV PUBLIC_URL=${public_url}

FROM base AS build

ADD ./package.json ./package-lock.json ./
RUN npm ci

ADD ./ ./

ARG public_url=/chat
#ENV PUBLIC_URL=${public_url}

RUN npm run build

FROM nginx:1.17-alpine AS dist

RUN apk --no-cache add gettext

WORKDIR /code

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /
COPY --from=build --chown=nginx /code/public ./
COPY --from=build --chown=nginx /code/build ./

ENTRYPOINT ["docker-entrypoint.sh"]