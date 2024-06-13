# Stage 1: Build client
FROM node:20-alpine as build-client
WORKDIR /app/client
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Build server
FROM oven/bun:latest as build-server
WORKDIR /app/server
COPY server/bun.lockb server/package.json ./
RUN bun install
COPY server/ ./

# Stage 3: Setup production environment
FROM oven/bun:latest
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y gnupg curl

# Install MongoDB
RUN curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg
RUN echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] https://repo.mongodb.org/apt/debian buster/mongodb-org/6.0 main" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list
RUN apt-get update && apt-get install -y mongodb-org

# Copy client build files
COPY --from=build-client /app/client/dist /app/client/dist

# Copy server files
COPY --from=build-server /app/server /app/server

# Install server dependencies
WORKDIR /app/server
RUN bun install --no-save

# Environment variables
ENV NODE_ENV production
ENV MONGO_URI=mongodb://localhost:27017/mydatabase
ENV VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
ENV PORT 80

# Expose ports
EXPOSE 80

# Start MongoDB and the server
CMD ["sh", "-c", "mongod --dbpath /data/db --bind_ip_all & bun run main.ts"]
