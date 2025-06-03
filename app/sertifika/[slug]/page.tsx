import { getSertifikaById } from "@/service/get-sertifika-by-id";
import React from "react";
import Image from "next/image";
import { imgUrl } from "@/util/img-url";
import { formatDate } from "@/util/format-date";

export const experimental_ppr = true


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getSertifikaById(slug);
  console.log(item);
  return (
    <div className="container mx-auto flex flex-1 justify-between gap-8 py-4">
      <div className="mb-8 flex flex-1 flex-col rounded-md py-4">
        {item.MarkaLogosu && (
          <Image
            src={imgUrl(item.MarkaLogosu)}
            alt={item.MarkaAdi}
            width={300}
            height={300}
            priority
          />
        )}
        <div className="flex flex-col py-4">
          <MezhebItem text="Hanefi" ok={item.HanefiOk} />
          <MezhebItem text="Şafi" ok={item.SafiOk} />
          <MezhebItem text="Hanbeli" ok={item.HanbeliOk} />
          <MezhebItem text="Maliki" ok={item.MalikiOk} />
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Tarihçe</h3>
          {item.unstable_Tarihce.map((txt, i) => (
            <div className="m-0" key={i}>
              {txt}
            </div>
          ))}
        </div>
      </div>

      {/*  */}
      <div className="flex flex-1 flex-col gap-8 py-4">
        <div>
          <h1 className="text-4xl font-bold">{item.MarkaAdi}</h1>
          <p className="text-gray-500">
            <strong>Kategori: </strong>
            {item.KategoriAdi}
          </p>
          <p className="text-gray-500">
            <strong>Son Güncelleme Tarihi: </strong>
            {formatDate(item.GuncellemeTarihi)}
          </p>
        </div>

        <div>
          <p className="text-gray-500">
            <strong>Firma Adı: </strong>
            {item.FirmaAdi}
          </p>
          <p className="text-gray-500">
            <strong>Firma Adresi: </strong>
            {item.FirmaAdresi}
          </p>

          {item.FirmaWebSayfasi && (
            <p className="text-gray-500">
              <strong>Firma Web Sayfası: </strong>
              <a
                href={fixWebUrl(item.FirmaWebSayfasi)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.FirmaWebSayfasi}
              </a>
            </p>
          )}
          <p className="text-gray-500">
            <strong>İletişim: </strong>
            <span className="select-all">{item.FirmaTelefon}</span>
          </p>
          <p className="text-gray-500">
            <strong>İletişim Email: </strong>
            <span className="select-all">{item.FirmaIletisimEmail}</span>
          </p>
        </div>
        <section>
          <h2 className="text-2xl font-bold">Sertifika Kapsamı</h2>
          <div className="flex flex-col">
            <ol>
              {item.unstable_SertifikaKapsami.map((txt, i) => (
                <li className="m-0" key={i}>
                  {txt}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="flex-1"></div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Sertifika Resimleri</h3>
          <div className="flex flex-wrap gap-4">
            {item.SertifikaResimleri.map((resim) => (
              <Image
                key={resim.Filename}
                src={imgUrl(resim.Filename)}
                alt={item.MarkaAdi}
                width={100}
                height={100}
                priority={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MezhebItem({ text, ok }: { text: string; ok: boolean }) {
  return (
    <div className="flex">
      <span className="basis-32">{text}</span>
      <span aria-label={ok ? "Evet" : "Hayır"}>{ok ? "✅" : "❌"}</span>
    </div>
  );
}

function fixWebUrl(url: string) {
  if (url.startsWith("http")) {
    return url;
  }
  return `https://${url}`;
}
