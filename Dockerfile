FROM node:17
ENV NODE_ENV=development
WORKDIR /app
COPY . /app
RUN npm install
COPY . .
EXPOSE 3000