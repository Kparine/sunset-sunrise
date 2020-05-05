# pull official base image
FROM node:12.12.0
# working directory
WORKDIR /Users/kevinparine/ScratchPad/sunset-sunrise/
COPY package*.json /Users/kevinparine/ScratchPad/sunset-sunrise/

RUN npm install

# add app
COPY . /Users/kevinparine/ScratchPad/sunset-sunrise/
# start app
CMD ["npm", "start"]

EXPOSE 3001