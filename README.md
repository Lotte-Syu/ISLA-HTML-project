# ISLA 彩妝電商切版Project 💄

這是一個以 SCSS + Bootstrap 為主的靜態網頁切版專案，  
針對 ISLA 彩妝品牌，建置六大功能頁、共用元件 header/footer，並使用模組化 SCSS 管理樣式。

---

## 📁 專案結構
```
ISLA-PROJECT/
├── .vscode/
│   └── settings.json
├── assets/
│   ├── images/
│   └── scss/
│       ├── base/
│       ├── layout/
│       ├── pages/
│       ├── main.scss
│       ├── main.css
│       └── main.css.map
├── components/
│   ├── footer.html
│   └── header.html
├── js/
│   └── include.js
├── node_modules/
├── pages/
├── index.html
└── README.md
```
## 🛠 使用技術

- SCSS（模組化樣式管理）
- Bootstrap 5（已客製變數）
- Bootstrap Icons
- Live Sass Compiler（推薦插件）
- 原生 JS：用 `fetch()` 插入 header / footer

---

## 🚀 開發流程

###  1. 安裝 VS Code 插件：Live Sass Compiler

###  2. 點擊右下角 `Watch Sass`，自動編譯 `main.scss`

- main.scss → 編譯成 → assets/css/main.css


### 3.編譯規則（請遵守）
| 操作           | ✅ 正確方式                                           | ❌ 錯誤方式                                    |
|----------------|--------------------------------------------------------|------------------------------------------------|
| 編譯樣式        | 只編譯 `main.scss`                                     | 不要編譯 `_xxx.scss` 或 `_index.scss`         |
| 新增頁面樣式    | 放入 `/pages/xxx/` 資料夾                             | 不要塞在根目錄或 `assets/css/` 裡             |
| HTML 引用 CSS  | `<link rel="stylesheet" href="../assets/css/main.css">` | 不要連到 `.scss` 或錯誤路徑                   |

### 4.header/footer 使用方式
- HTML 加入這兩個區塊：
  ```
  <div id="header-include"></div>
  <div id="footer-include"></div>
  ```
- 最底部引入 JS 插入功能：
  ```
  <script src="../js/include.js"></script>
  ```

### 5.注意事項
- _xxx.scss 檔案為 partial，不應該單獨編譯

- 出現 xxx.css, .map 為誤按編譯，請刪除

- 所有樣式統一寫入 main.scss（透過 @import 匯入）




"# ISLA-HTML-project" 
