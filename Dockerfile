# 使用alpine版本
FROM node:16-alpine AS builder
# 创建工作目录
WORKDIR /app
# 复制package.json和package-lock.json
COPY package*.json ./
# 安装依赖并清理缓存
RUN npm install && npm cache clean --force
# 复制其他源代码文件
COPY . .
# 构建你的Vuepress项目
RUN npm run build 
# 最终阶段
FROM nginx:alpine
# 从builder阶段复制构建的文件到nginx中
COPY --from=builder /app/.vuepress/dist /usr/share/nginx/html