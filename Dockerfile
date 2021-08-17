#############
### Build ###
#############

# base image
FROM node:lts as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
ADD .git .git
ADD .git /app/.git

# Add app
RUN npm install -g @vue/cli
RUN yarn
COPY . /app

#############
### Build ###
#############

RUN yarn run generate

############
### Prod ###
############

# base image
FROM nginx:mainline-alpine

# Clear Nginx default site
RUN rm -rf /usr/share/nginx/html/*

# Load our nginx.conf and server conf
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/nginx-default.conf /etc/nginx/conf.d/default.conf

# Copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]