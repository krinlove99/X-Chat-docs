# 使用官方 Node.js 镜像作为基础镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 复制项目文件到工作目录
COPY . /app

# 安装项目依赖
RUN npm install

# 构建 VuePress 网站静态文件
RUN npm run build

# 暴露容器的端口
EXPOSE 8080

# 运行 VuePress 服务器
CMD ["npm", "run", "serve"]