ARG NODE_VERSION=22.15.1-alpine
ARG NGINX_VERSION=alpine3.21


FROM node:${NODE_VERSION} as builder

WORKDIR /app


COPY package*.json ./

RUN --mount=type=cache,target=/root/.npm npm ci


COPY . .


# Build the Angular application
RUN npm run build


FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner


# Use a built-in non-root user for security best practices
USER nginx

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the static build output from the build stage to Nginx's default HTML serving directory
COPY --chown=nginx:nginx --from=builder /app/dist/*/browser /usr/share/nginx/html

# Expose port 8080 to allow HTTP traffic
# Note: The default NGINX container now listens on port 8080 instead of 80
EXPOSE 8080

# Start Nginx directly with custom config
ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]
