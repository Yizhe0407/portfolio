import { Comic_Relief, Pacifico, Sora } from "next/font/google";
import localFont from "next/font/local";

export const comicRelief = Comic_Relief({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comic-relief",
});

export const openHuninn = localFont({
  src: "../assets/fonts/jf-openhuninn-2.1.ttf",
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
