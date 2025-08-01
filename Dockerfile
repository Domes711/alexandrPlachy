# 🧱 Build stage
FROM node:18 AS builder
WORKDIR /app
COPY ./frontend .
RUN npm install
RUN npm run build

# 🚀 Serve with Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html/milena/
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]