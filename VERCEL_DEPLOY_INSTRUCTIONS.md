# راهنمای Deploy روی Vercel - نسخه ساده

## مشکل: strip-ansi 404 error

## راه حل:

### 1. حذف فایل‌های مشکل‌دار
```bash
rm -rf node_modules
rm package-lock.json
```

### 2. نصب dependencies جدید
```bash
npm install --legacy-peer-deps
```

### 3. تست build محلی
```bash
npm run build
```

### 4. Push به GitHub
```bash
git add .
git commit -m "Fix strip-ansi dependency issue"
git push origin main
```

## تنظیمات Vercel:

### Build Settings:
- **Framework Preset**: Create React App
- **Build Command**: `npm ci --legacy-peer-deps && npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm ci --legacy-peer-deps`

### Environment Variables:
- `NODE_VERSION`: `18`
- `NPM_VERSION`: `8`

## فایل‌های مهم:
- `package.json` - فقط dependencies ضروری
- `vercel.json` - تنظیمات Vercel
- `.npmrc` - تنظیمات npm
- `engines.json` - نسخه Node.js

## اگر هنوز مشکل داشتید:

### راه حل جایگزین 1: استفاده از Yarn
```bash
npm install -g yarn
yarn install
yarn build
```

### راه حل جایگزین 2: استفاده از pnpm
```bash
npm install -g pnpm
pnpm install
pnpm build
```

### راه حل جایگزین 3: استفاده از Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```
