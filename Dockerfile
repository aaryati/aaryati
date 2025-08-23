# ---------- Builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps for native builds
RUN apk add --no-cache libc6-compat

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .

# Build both client and server
RUN npm run build

# ---------- Runner ----------
FROM node:20-alpine
WORKDIR /app

# Create a non-root user
RUN addgroup -g 1001 nodejs && \
    adduser -S -u 1001 -G nodejs nodejs

# Set production environment
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Copy built files and dependencies
COPY --from=builder /app/dist/server ./dist/server
COPY --from=builder /app/dist/public ./dist/server/public
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev && \
    chown -R nodejs:nodejs /app

# Enable ES modules
ENV NODE_OPTIONS="--enable-source-maps --experimental-specifier-resolution=node"

# Switch to non-root user
USER nodejs

# Start the server using the compiled JavaScript
CMD ["node", "dist/server/index.js"]