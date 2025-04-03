FROM node:20-alpine

# need this to install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .

EXPOSE 1234
CMD ["pnpm", "run", "dev"]