# Stage 1
FROM node:latest AS backend-builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:alpine

WORKDIR /app

COPY --from=backend-builder /app .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
