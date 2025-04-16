FROM node:18-alpine
WORKDIR /app





# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source
COPY . .

# Open dev server port
EXPOSE 3001
CMD ["pnpm", "dev"]