FROM node:20

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app