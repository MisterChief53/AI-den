FROM node:21-bookworm

# Set the working directory in the container
# we need to set this to be able to use relative paths!
WORKDIR /usr/src/app

EXPOSE 3000

# ENV PORT 3000

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./