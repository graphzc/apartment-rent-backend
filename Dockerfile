# --- Stage 1: Build ---
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm (change to npm/yarn if needed)
RUN npm install -g pnpm

# Copy and install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Copy the source code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Compile TypeScript
RUN pnpm build


# --- Stage 2: Runtime ---
FROM node:22-alpine AS runtime

WORKDIR /app

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy necessary files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma

# Optional: Generate Prisma Client again (only if needed)
# RUN npx prisma generate

# Set production env
ENV NODE_ENV=production

USER appuser

# Change this port if your app uses another
EXPOSE 8080

# Start your server
CMD ["node", "dist/index.js"]
