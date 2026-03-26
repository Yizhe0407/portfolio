# Codex Agent Instructions

本專案為開發者個人作品集網站。

## 回覆語言
- 所有解釋與說明請使用 **繁體中文**
- 程式碼命名維持英文慣例

## 技術棧
- Next.js (App Router)
- TypeScript
- TailwindCSS
- React

## 專案結構
/app        → Next.js 頁面  
/components → 可重用 UI 元件  
/lib        → 工具函式  
/styles     → 全域樣式  

## 程式碼規則
- 優先使用 React 函式型元件
- 優先使用 Server Components
- 使用 TypeScript 型別
- 避免使用 `any`
- 所有 import 必須在檔案最上方
- 儘量保持元件小而可重用

## UI / UX 原則
- 設計風格簡潔、現代、專業
- 參考 Vercel / Linear 的設計風格
- 使用 TailwindCSS
- 避免 inline style
- Mobile-first 響應式設計
- 保持一致的 spacing 與 typography

## Codex 行為規則
當修改或新增任何程式碼時：

1. 先閱讀相關檔案以理解現有實作
2. 儘量維持既有程式碼風格
3. 只修改與任務相關的檔案
4. 避免不必要的大範圍重構
5. 若新增 UI 元件，放入 `/components`
6. 若新增工具函式，放入 `/lib`

## 修改後的驗證流程
當 **任何檔案被修改或新增**後，必須依序執行：

pnpm check

pnpm build

若出現錯誤或警告，必須修正錯誤後再次執行上述指令，直到成功為止。

## 開發指令
啟動開發伺服器：

pnpm dev