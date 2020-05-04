# pull official base image
FROM node:12.12.0
# working directory
WORKDIR /Users/kevinparine/ScratchPad/
COPY package*.json /Users/kevinparine/ScratchPad/quick-install

RUN npm install

# add app
COPY . /Users/kevinparine/ScratchPad/quick-install
# start app
CMD ["npm", "start"]

EXPOSE 3000