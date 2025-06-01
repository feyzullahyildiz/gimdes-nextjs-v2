import { Abyssinica_SIL, Roboto } from "next/font/google";

export const abyssinicaSIL = Abyssinica_SIL({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abyssinica-sil",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

