import React from "react";
import { Version } from "./_components_/Version";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col gap-4 px-4 py-8">
      <h1 className="text-2xl font-bold">Sürüm Notları</h1>
      <Version
        version="1.0.8"
        date="2025-06-29"
        changes={[
          "Menü  mobil uyumlu hale getirildi.",
          "Sertifika kapsamına göre arama eklendi.",
        ]}
      />
      <Version
        version="1.0.7"
        date="2025-06-13"
        changes={["PWA denemesi yapıldı."]}
      />
      <Version
        version="1.0.6"
        date="2025-06-10"
        changes={[
          "URL'deki id yerine slug kullanılıyor. Bu sayede SEO optimizasyonu sağlanıyor.",
          "Firma sayfasındaki arayüz düzenlendi.",
          "Anasayfadaki kategori ve sertifika sonuçlarında arayüz hatası düzeltildi.",
        ]}
      />
      <Version
        version="1.0.5"
        date="2025-06-10"
        changes={[
          "Ana sayfa aramalarında kategori isimleri de görünüyor.",
          "Kategori'lere keywordler de eklendi. Aramalarda daha rahat bulunuyor.",
        ]}
      />
      <Version
        version="1.0.4"
        date="2025-06-09"
        changes={[
          "Kategori isimleri özelleştirildi.",
          "Kategori emojileri değiştirildi.",
          "Sertifika gibi resimlerin önbellek süresi 30 güne çıkarıldı.",
        ]}
      />
      <Version
        version="1.0.3"
        date="2025-06-07"
        changes={["Koyu tema desteği eklendi."]}
      />
      <Version
        version="1.0.2"
        date="2025-06-07"
        changes={[
          "Arama sonuçlarında highlight sorunu %99 düzeltildi. Teknik açıklama: Reactta array render ederken kullanmamız gereken key değerine document'in idsini veriyorduk. Ama döküman içeriği değişiyordu. Bazı senaryolarda tekrardan render edilmiyordu. Artık index değeri ile beraber veriyoruz. Sonuç: index ile beraber verilmesi ciddi ölçüde düzeltecektir.",
        ]}
      />
      <Version
        version="1.0.1"
        date="2025-06-07"
        changes={[
          "Arama sonuçlarında mobil'e uygun hale getirildi.",
          "Arama sonuçlarında highlight sorunu düzeltildi.",
          "Kategoriler sayfasında mobil'e uygun hale getirildi.",
          "Dockerfile ve cache yönetimi güncellendi. Build anında cache yapılmıyor. Crash durumunda uygulama çok çok daha hızlı ayağa kalkıyor.",
        ]}
      />
      <Version version="1.0.0" date="2025-06-06" changes={["İlk versiyon"]} />
    </div>
  );
}
