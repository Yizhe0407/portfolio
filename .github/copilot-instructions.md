# Copilot Instructions

本專案為開發者個人作品集網站，使用 Next.js 與 TypeScript 建構，用於展示專案、技術能力與聯絡資訊。

---

## 回覆語言

* Copilot Chat 的說明、註解與解釋 **請使用繁體中文**
* 程式碼命名維持英文慣例

---

## 技術棧

* Next.js (App Router)
* TypeScript
* React
* TailwindCSS
* pnpm 作為 package manager

---

## 專案結構

/app → Next.js 頁面
/components → 可重用 UI 元件
/lib → 工具函式
/styles → 全域樣式

---

## 程式碼風格

* 優先使用 **React 函式型元件**
* 優先使用 **Server Components**
* 使用 TypeScript 型別
* 避免使用 `any`
* 元件保持小型與可重用
* 所有 import 放在檔案最上方
* 優先使用 TailwindCSS 進行樣式設計
* 避免 inline style

---

## UI / UX 原則

* 設計風格：簡潔、現代、專業
* 視覺風格參考 **Vercel / Linear**
* 保持一致的 spacing 與 typography
* 採用 **mobile-first 響應式設計**

---

## Copilot 行為指引

當 Copilot 建議或生成程式碼時：

1. 優先遵守本專案的技術棧與結構
2. 保持程式碼簡潔與可維護
3. 避免過度抽象
4. 新增 UI 元件放在 `/components`
5. 新增工具函式放在 `/lib`

---

## 修改後的驗證流程

當 **任何檔案被修改或新增**後，請執行以下指令進行驗證：

pnpm check

pnpm build

若出現錯誤或警告，請先修正錯誤後再繼續開發。

---

## 開發指令

啟動開發伺服器：

pnpm dev
