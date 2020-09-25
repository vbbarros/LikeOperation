#pull a node image from docker hub
FROM node:12-slim

#set the working dir to /app
# WORKDIR /opt
WORKDIR /usr/src

#copy package.json, package-lock.json and yarn.lock to the container
COPY package.json package.json
# COPY package*.json ./
# COPY yarn.lock ./

# install package.json modules in container
RUN yarn install


#copy everything to container /app
COPY . .

#expose port 3000 to mount it to another port in local machine 
EXPOSE 3000

#using wait to run the container after rabbitMQ is running
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

#start server inside container
CMD [ "yarn", "start" ]