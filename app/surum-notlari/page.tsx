import React from "react";
import { Version } from "./_components_/Version";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col gap-4 px-4 py-8">
      <h1 className="text-2xl font-bold">Sürüm Notları</h1>
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
