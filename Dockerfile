FROM node:22.17.0

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV PORT=5001
EXPOSE 5001

CMD ["npm", "run", "start"]
