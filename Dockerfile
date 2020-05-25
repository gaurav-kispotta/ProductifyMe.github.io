# base image
FROM node:10-slim

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

ENV HOST=0.0.0.0 PORT=4200 NODE_DEBUG_PORT=9229

EXPOSE ${PORT} ${NODE_DEBUG_PORT}

# start app
CMD ng serve --host 0.0.0.0