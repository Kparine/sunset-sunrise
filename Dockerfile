# pull official base image
FROM node:12.12.0

# working directory
WORKDIR /Users/kevinparine/ScratchPad/

COPY package*.json /Users/kevinparine/ScratchPad/quick-install

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /Users/kevinparine/ScratchPad/quick-install
COPY package-lock.json /Users/kevinparine/ScratchPad/quick-install
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . /Users/kevinparine/ScratchPad/quick-install

# start app
CMD ["npm", "start"]