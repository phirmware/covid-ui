# Choose the Image which has Node installed already
FROM node:alpine

RUN sleep 5

# COPY all the files from Current Directory into the Container
COPY ./ ./

# Install the Project Dependencies like Express Framework
RUN npm install

RUN sleep 30

# Default Command to launch the Application
CMD ["node", "index.js"]
