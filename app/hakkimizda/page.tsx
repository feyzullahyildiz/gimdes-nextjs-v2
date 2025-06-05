import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto my-8">
      <h1 className="mb-4 text-2xl font-bold">Hakkımızda</h1>
      <p>
        Bu uygulama, GİMDES&#39;in resmi sitesindeki eksiklikleri gidermek ve
        güncel teknolojileri kullanarak kullanıcı deneyimini geliştirmek
        amacıyla <strong>üçüncü parti</strong> bir yazılım olarak{" "}
        <strong>bağımsız</strong> geliştirici tarafından hazırlanmıştır.
      </p>
      <p>
        Amacımız, kullanıcı deneyimini iyileştirmektir. Mümkün olduğunca yeni
        teknolojileri kullanarak hızlı uygulama deneyimi sunmak istiyoruz.
      </p>
      <p>
        Örneğin, asıl uygulamada Peynir diye arama yaptığınızda sadece 2 tane
        firmanın listelendiğini görüyordunuz (Şuanda düzeltmişler). Bu
        uygulamayı geliştirmek istememe sebep olan bir nokta bu.
      </p>
      <br />
      <p>
        Gimdesten ricamız: Uygulamanın geliştirilmesine engel olunmaması. Destek
        olunduğu takdirde Açık Kaynak olarak geliştirmek isterim. Yasal
        sorumluluk almak istemediğim için şimdilik bu şekilde devam
        edeceğim.{" "}
      </p>
      <br />
      <h2 className="mb-4 text-lg font-bold">Uygulama Yol Haritası</h2>
      <Item done>Kategorilere UTF-8 emoji desteği eklenmesi</Item>
      <Item done>Arama sonuçlarında vurgulama (highlight) desteği</Item>
      <Item>Koyu tema desteği</Item>
      <Item>Ana sayfa düzenlemesi</Item>
      <Item>Mobil uyumluluk optimizasyonu</Item>
      <Item>Progressive Web App (PWA) desteği</Item>
      <Item>
        İstemci tarafı önbellek için Tanstack React-Query entegrasyonu
        (IndexedDB ile LocalForage kullanımı)
      </Item>
      <Item>URL yapısında SEO optimizasyonu</Item>
      <Item>
        Kategori isimlendirinde düzenleme. İngilizce yazıların kaldırılması.
      </Item>
      <Item>Helal Dünya Marketleri harita entegrasyonu</Item>
      <Item>Site ikonu (favicon) eklenmesi</Item>
      <Item>Sertifika kapsamına göre gelişmiş arama filtreleri</Item>
      <Item>
        SEO için meta veriler (başlık, açıklama, anahtar kelimeler) desteği
      </Item>
      <Item>
        <i>Peynir</i> diye arama yapıldığında peynir üretimi yapan firmaların
        listelenmesi
      </Item>
      <br />

      <h2 className="mb-4 text-lg font-bold">Sürüm Notları</h2>
      <p>
        Sürüm notları için{" "}
        <Link href="/surum-notlari" className="underline">
          buraya
        </Link>{" "}
        tıklayınız.
      </p>
    </div>
  );
}

function Item({
  children,
  done = false,
  cancelled = false,
}: {
  children: React.ReactNode;
  done?: boolean;
  cancelled?: boolean;
}) {
  return (
    <div>
      <Checkbox checked={done} className="mr-2" disabled={cancelled} />
      <span
        className={cn(cancelled ? "text-gray-500 italic line-through" : "")}
      >
        {children}
      </span>
    </div>
  );
}
