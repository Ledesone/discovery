FROM node:10.15.3-alpine

# locale & timezone (Asia/Tokyo)
# https://github.com/moby/moby/issues/12084
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /nuxt
ADD . ./

# system update
RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g yarn && \
    yarn add @vue/cli @vue/cli-init