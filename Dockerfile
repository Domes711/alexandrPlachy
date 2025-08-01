# 1️⃣ Build React app
FROM node:18 AS builder
WORKDIR /app
COPY frontend/ ./
RUN npm install
RUN npm run build

# 2️⃣ Serve with Nginx
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
# nebo: COPY --from=builder /app/build /usr/share/nginx/html  # pro CRA
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]