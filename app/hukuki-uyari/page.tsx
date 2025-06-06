import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Hukuki Uyarı</h1>

      <p>
        Bu internet sitesi,{" "}
        <strong>
          <a
            href="https://gimdes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            gimdes.com
          </a>
        </strong>{" "}
        üzerinden kamuya açık olarak yayımlanmış helal sertifikalı firmalara ait
        bilgileri kullanarak, daha modern ve kullanıcı dostu bir arayüz ile
        sunmak amacıyla geliştirilmiştir.
      </p>

      <p>
        Sitenin geliştirilme amacı tamamen eğitimsel ve toplumsal faydaya
        yöneliktir. Herhangi bir ticari amaç güdülmemektedir. Projede yer alan
        firma isimleri, logoları, adres ve sertifika bilgileri orijinal siteden
        alınmış olup, telif hakları ve ticari markalar ilgili sahiplerine
        aittir.
      </p>

      <p>
        Bu site, orijinal kurum ya da kuruluş ile{" "}
        <strong>herhangi bir resmî bağlantıya sahip değildir</strong>. İçerikler
        birebir alınmış olmakla birlikte, sadece yazılım geliştirme, kullanıcı
        deneyimi tasarımı ve teknik dönüşüm amacıyla kullanılmaktadır.
      </p>

      <p>
        Eğer herhangi bir içerik sahibinin bu verilerin gösterimiyle ilgili
        itirazı veya kaldırılma talebi varsa, lütfen bizimle iletişime geçiniz.
        Talep doğrultusunda gerekli düzenlemeler yapılacaktır.
      </p>

      <p>
        <strong>İletişim maili:</strong>{" "}
        <span className="select-all">nar.tomarza@gmail.com</span>
      </p>

      <p>
        <strong>Tarih:</strong> 6 Haziran 2025
      </p>
      <p>
        <strong>Sürüm notları için</strong>{" "}
        <Link href="/surum-notlari" className="underline">
          buraya
        </Link>{" "}
        tıklayınız.
      </p>
    </div>
  );
}
