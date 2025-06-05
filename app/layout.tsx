import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { cn } from "@/lib/utils";
import { Providers } from "@/components/provider";
import { roboto } from "@/util/font";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Gimdes 🄯 - 𝖋𝖆k𝖊",
  description: "Üçüncü parti Gimdes uygulaması",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={cn("flex min-h-screen min-w-96 flex-col", roboto.className)}
      >
        <Providers>
          <Header />
          <div className="flex flex-1 flex-col pb-16">{children}</div>
          <CookieConsent />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
