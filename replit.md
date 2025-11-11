# Vite + Vue + SCSS 網站專案

## 專案概述
這是一個使用 Vite、Vue 3 和 SCSS 建立的簡單網站，包含登入頁面、歡迎頁面和關於我們頁面。

## 功能特點
- **登入頁面**: 用戶可以輸入帳號和密碼進行登入
- **歡迎頁面**: 登入後顯示用戶名稱和系統資訊
- **關於我們頁面**: 展示公司資訊和聯絡方式
- **環境配置**: 支援開發和正式環境的不同配置

## 技術棧
- **前端框架**: Vue 3 (Composition API)
- **構建工具**: Vite 7
- **路由管理**: Vue Router 4
- **樣式處理**: SCSS/Sass
- **語言**: JavaScript (ES Modules)

## 專案結構
```
workspace/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── variables.scss    # SCSS 變數定義
│   │       └── main.scss          # 全局樣式
│   ├── views/
│   │   ├── Login.vue              # 登入頁面
│   │   ├── Welcome.vue            # 歡迎頁面
│   │   └── About.vue              # 關於我們頁面
│   ├── router/
│   │   └── index.js               # 路由配置
│   ├── App.vue                    # 根組件
│   └── main.js                    # 應用入口
├── public/                        # 靜態資源
├── .env.development              # 開發環境配置
├── .env.production               # 正式環境配置
├── vite.config.js                # Vite 配置
├── index.html                    # HTML 入口
└── package.json                  # 專案配置

## 環境配置

### 開發環境 (.env.development)
```
VITE_CONTEXT_PATH=/
```

### 正式環境 (.env.production)
```
VITE_CONTEXT_PATH=/foo/bar
```

## 可用指令

### 開發模式
```bash
npm run dev
```
啟動開發服務器，使用開發環境配置 (CONTEXT_PATH=/)

### 正式環境開發模式
```bash
npm run dev:production
```
啟動開發服務器，但使用正式環境配置 (CONTEXT_PATH=/foo/bar)

### 構建專案
```bash
npm run build
```
構建生產版本的應用程式

### 預覽構建結果
```bash
npm run preview
```
預覽構建後的應用程式

## 頁面說明

### 1. 登入頁面 (/)
- 用戶輸入帳號和密碼
- 登入後將資訊存儲到 localStorage
- 導航到歡迎頁面
- 包含「關於我們」連結

### 2. 歡迎頁面 (/welcome)
- 顯示用戶名稱
- 展示當前環境和路徑前綴資訊
- 包含登出功能
- 導航欄可前往關於我們頁面

### 3. 關於我們頁面 (/about)
- 展示公司簡介
- 顯示使命和核心價值
- 提供聯絡資訊
- 可返回登入頁面

## 路由配置
路由器使用 `VITE_CONTEXT_PATH` 環境變數作為 base URL，確保在不同環境下正確運行。

## 樣式系統
- 使用 SCSS 預處理器
- 定義了全局變數 (主色調、次要色調、文字顏色等)
- 每個組件使用 scoped 樣式避免樣式衝突

## 最近更新
- 2025-11-11: 初始專案建立，完成三個基本頁面和環境配置

## 注意事項
- 目前的登入功能使用 localStorage 存儲，僅作為示範
- 開發服務器綁定到 0.0.0.0:5000，支援外部訪問
- SCSS 使用 @import 語法會有棄用警告，但不影響功能
