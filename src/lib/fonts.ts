import { Pacifico, Sora } from "next/font/google";
import localFont from "next/font/local";

// 自架而非 next/font/google：Comic Relief 不在 Next 內建度量表，
// google 版產生不了尺寸校正 fallback；localFont 直接讀檔算度量
export const comicRelief = localFont({
  src: [
    { path: "../assets/fonts/comic-relief-400.woff2", weight: "400" },
    { path: "../assets/fonts/comic-relief-700.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--font-comic-relief",
});

// 子集化字型，新增中文內容後執行 pnpm subset-font 重產
export const openHuninn = localFont({
  src: "../assets/fonts/jf-openhuninn-2.1.subset.woff2",
  display: "swap",
  variable: "--font-open-huninn",
});

export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});
