
# Node version
FROM node:16

# Make work directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
COPY tsconfig.json ./
COPY . ./

# NPM install & build
RUN npm install
RUN npm run build

# POR define
EXPOSE 5001

# Set ENV variables
ENV PORT=5001
ENV SERVICE_NAME=demo
ENV DB_URI=mongodb://localhost:27017/demo-database
ENV TEST_DB_URI=mongodb://localhost:27017/demo-database
ENV ENVIRONMENT=DEV
ENV AUTH_SERVICE_ENDPOINT=http://auth-service:5000/

# Open CMD & execute command
CMD [ "npm", "start"]