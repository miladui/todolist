@echo off
npm cache clean --force
npm install --legacy-peer-deps
npm run build
