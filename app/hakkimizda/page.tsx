import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const dynamic = "force-static";

export default function Page() {
  return (
    <div className="container mx-auto my-8">
      <h1 className="mb-4 text-2xl font-bold">Hakkımızda</h1>
      <p>
        Bu platform, GİMDES tarafından sunulan helal sertifika bilgilerini daha
        modern ve kullanıcı dostu bir arayüzle erişilebilir kılmak amacıyla{" "}
        <strong>bağımsız</strong> olarak geliştirilen{" "}
        <strong>üçüncü parti</strong> bir uygulamadır.
      </p>
      <p>
        Projenin temel hedefi, mevcut sistemdeki kullanılabilirlik sorunlarını
        ele alarak modern web teknolojileri ile gelişmiş bir kullanıcı deneyimi
        sunmaktır. Performans optimizasyonu ve gelişmiş arama fonksiyonları
        aracılığıyla kullanıcıların ihtiyaç duydukları bilgilere daha hızlı ve
        etkin bir şekilde ulaşabilmelerini sağlamayı amaçlamaktadır.
      </p>
      <p>
        Geliştirme sürecinde karşılaşılan teknik eksiklikler ve kullanıcı
        deneyimi sorunları, bu projenin başlatılmasında temel motivasyon
        kaynağını oluşturmuştur. Arama algoritmalarının iyileştirilmesi ve
        sonuçların daha kapsamlı listelenmesi gibi teknik düzenlemeler
        gerçekleştirilmiştir.
      </p>
      <br />
      <p>
        Bu proje, eğitimsel ve toplumsal fayda amacı güder. Telif hakları ve
        yasal sorumluluklar konusundaki hassasiyetimiz nedeniyle, projenin açık
        kaynak kodlu hale getirilmesi ve daha geniş bir geliştirici topluluğunun
        katkısına açılması ancak uygun koşulların oluşması durumunda mümkün
        olacaktır.
      </p>
      <br />
      <h2 className="mb-1 text-lg font-bold">Uygulama Yol Haritası</h2>
      <Item done>Kategorilere UTF-8 emoji desteği eklenmesi</Item>
      <Item done>Arama sonuçlarında vurgulama (highlight) desteği</Item>
      <Item done>Koyu tema desteği</Item>
      <Item>Ana sayfa düzenlemesi</Item>
      <Item>Mobil uyumluluk optimizasyonu</Item>
      <Item done>Progressive Web App (PWA) desteği</Item>
      <Item>
        İstemci tarafı önbellek için Tanstack React-Query entegrasyonu
        (IndexedDB ile LocalForage kullanımı)
      </Item>
      <Item done>URL yapısında SEO optimizasyonu</Item>
      <Item done>
        Kategori isimlendirinde düzenleme. İngilizce yazıların kaldırılması.
      </Item>
      <Item>Helal Dünya Marketleri harita entegrasyonu</Item>
      <Item>Site ikonu (favicon) eklenmesi</Item>
      <Item>Sertifika kapsamına göre gelişmiş arama filtreleri</Item>
      <Item>
        SEO için meta veriler (başlık, açıklama, anahtar kelimeler) desteği
      </Item>
      <Item>404 sayfası</Item>
      <Item done>
        <i>Peynir</i> diye arama yapıldığında peynir üretimi yapan firmaların
        listelenmesi
      </Item>
      <br />

      <h2 className="mt-4 text-lg font-bold">Sürüm Notları</h2>
      <p>
        Sürüm notları için{" "}
        <Link href="/surum-notlari" className="underline">
          buraya
        </Link>{" "}
        tıklayınız.
      </p>

      <h2 className="mt-4 text-lg font-bold">Hukuki Uyarı</h2>
      <p>
        Telif hakları ve yasal sorumluluklar hakkında detaylı bilgi için{" "}
        <Link href="/hukuki-uyari" className="underline">
          hukuki uyarı
        </Link>{" "}
        sayfasını inceleyebilirsiniz.
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
