# Use Node.js 14 as the base image
FROM node:18

# Set the working directory to /app/server
WORKDIR /AgggieReuse/server

# Copy the package.json and package-lock.json files to the container
COPY . ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port 3000 for the Node.js server
EXPOSE 5000

# Start the Node.js server
CMD ["npm", "start"]
