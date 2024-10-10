# Choose the Image which has Node installed already
FROM node:alpine

RUN sleep 5

# COPY all the files from Current Directory into the Container
COPY ./ ./

# Simulate an error by running a command that will fail
RUN exit 1

# Install the Project Dependencies like Express Framework
RUN npm install

# Default Command to launch the Application
CMD ["node", "app.js"]
