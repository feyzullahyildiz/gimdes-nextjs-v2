import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold">Hakkımızda</h1>
      <p>
        Bu uygulama, GİMDES&#39;in kendi teknik ekibi tarafından geliştiril
        <strong>me</strong>miş olup, <strong>üçüncü parti</strong> bir yazılım
        olarak hazırlanmıştır.
      </p>
      <p>
        Bu siteyi yapmamızdaki motivasyon ise Gimdesin asıl sitesindeki
        eksiklikleri karşılamaktır.
      </p>
      <br />
      <h2 className="text-lg font-bold">Uygulama Yol Haritası</h2>
      <Item done={true}>Kategorilere UTF-8 emoji eklenmesi</Item>
      <Item done={true}>Arama sonuçlarında highlight desteği</Item>
      <Item done={false}>Koyu tema desteği</Item>
      <Item done={false}>Mobil uygumluluk</Item>
      <Item done={false}>Progressive Web App (PWA) Desteği</Item>
      <Item done={false}>URL&#39;de SEO desteği</Item>
      <Item done={false}>Kategori isimlendirmeleri ve düzenleme</Item>
      <Item done={false}>Helal Dünya Marketleri Haritası</Item>
      <Item done={false}>favicon ekleme</Item>
      <Item done={false}>Sertifika Kapsamına Göre Arama</Item>
      <Item done={false}>SEO için Metadata title-description-keywords desteği</Item>
    </div>
  );
}

function Item({
  children,
  done = true,
}: {
  children: React.ReactNode;
  done?: boolean;
}) {
  return (
    <div>
      <Checkbox checked={done} className="mr-2" />
      {children}
    </div>
  );
}
