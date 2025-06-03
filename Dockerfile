# Node.js 22 standart image kullan (Alpine yerine)
FROM node:22-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# Package dosyalarını kopyala
COPY package.json package.json
COPY package-lock.json package-lock.json

# Bağımlılıkları yükle
RUN npm ci

# Uygulama kaynak kodunu kopyala
COPY . .

# Next.js uygulamasını build et
RUN npm run build

# Port 3000'i aç
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"] 