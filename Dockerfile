# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリ
WORKDIR /app

# package.json だけコピーして先にインストール
COPY package.json package-lock.json* ./  
RUN npm install

# アプリコードをコピー
COPY . .

# ポート解放
EXPOSE 3000

# devサーバ起動（本番なら "npm run build && npm start"）
CMD ["npm", "run", "dev"]