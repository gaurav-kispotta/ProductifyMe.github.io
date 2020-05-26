# base image
FROM node:10-slim AS BUILDER

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /app

RUN npm run heroku-postbuild

FROM node:10-slim AS PROD

WORKDIR /app

COPY --from=BUILDER ./app ./app

ENV HOST=0.0.0.0 PORT=4200

EXPOSE ${PORT}

# start app
CMD node ./server.js