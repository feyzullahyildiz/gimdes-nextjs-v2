import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

import { cn } from "@/lib/utils";
import { Providers } from "@/components/provider";
import { roboto } from "@/util/font";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title:
    "Helal Sertifika Firmaları - Modern ve Kullanıcı Dostu Liste | gimdes.site",
  description:
    "Bu site, GİMDES'in resmi helal sertifikalı firmalarını güncel teknolojilerle kullanıcı dostu bir arayüzde sunar. Firma isimleri, logoları ve sertifika bilgileri orijinal kaynaktan alınmıştır. Eğitim ve toplumsal fayda amacıyla geliştirilmiştir.",
};

export const dynamic = "force-dynamic";
export const revalidate = 60;

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
