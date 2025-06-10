import { getSertifikaById } from "@/service/get-sertifika-by-id";
import React, { Suspense } from "react";
import Image from "next/image";
import { getImageUrl, getProxiedImageUrl } from "@/util/img-url";
import { formatDate } from "@/util/format-date";
import { OtherCertificates } from "./_component_/OtherCertificates";
import Link from "next/link";
import { fromSlug } from "@/util/slug";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = fromSlug(slug);
  if (!id) {
    return notFound();
  }
  const item = await getSertifikaById(id);
  if (!item) {
    return notFound();
  }
  return (
    <div className="container mx-auto flex flex-1 flex-col justify-between gap-8 py-8 lg:flex-row">
      <div className="flex flex-1 flex-col gap-4 rounded-md">
        {item.MarkaLogosu && (
          <Image
            className="mx-auto max-h-80 flex-1 md:w-min lg:mx-0"
            src={getImageUrl(item.MarkaLogosu)}
            alt={item.MarkaAdi}
            width={300}
            height={300}
            priority
          />
        )}
        <div>
          <h1 className="mb-4 text-center text-4xl font-bold lg:text-left">
            {item.MarkaAdi}
          </h1>
          <Link
            href={`/kategori/${item.KategoriId}`}
            className="underline underline-offset-4"
          >
            <strong>Kategori: </strong>
            {item.kategori_name} {item.kategori_emoji}
          </Link>
          <p>
            <strong>Son Güncelleme Tarihi: </strong>
            {formatDate(item.GuncellemeTarihi, { hideHour: true })}
          </p>
        </div>

        <div>
          <p>
            <strong>Firma Adı: </strong>
            {item.FirmaAdi}
          </p>
          <p>
            <strong>Firma Adresi: </strong>
            {item.FirmaAdresi}
          </p>

          {item.FirmaWebSayfasi && (
            <p>
              <strong>Firma Web Sayfası: </strong>
              <a
                className="underline underline-offset-2"
                href={fixWebUrl(item.FirmaWebSayfasi)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.FirmaWebSayfasi}
              </a>
            </p>
          )}
          <p>
            <strong>İletişim: </strong>
            <span className="select-all">{item.FirmaTelefon}</span>
          </p>
          <p>
            <strong>İletişim Email: </strong>
            <span className="select-all">{item.FirmaIletisimEmail}</span>
          </p>
          <p>
            <strong>İlk Sertifika Alım Tarihi: </strong>
            {formatDate(item.IlkSertifikaAlimTarihi, { hideHour: true })}
          </p>
        </div>

        <div className="flex flex-col">
          <MezhebItem text="Hanefi" ok={item.HanefiOk} />
          <MezhebItem text="Şafi" ok={item.SafiOk} />
          <MezhebItem text="Hanbeli" ok={item.HanbeliOk} />
          <MezhebItem text="Maliki" ok={item.MalikiOk} />
        </div>

        <div className="flex-1"></div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">Tarihçe</h3>
          {item.unstable_Tarihce.map((txt, i) => (
            <div className="m-0" key={i}>
              {txt}
            </div>
          ))}
        </div>
      </div>

      {/*  */}
      <div className="flex flex-1 flex-col gap-8">
        <section>
          <h2 className="text-xl font-bold">Sertifika Kapsamı</h2>
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

        {/* <div className="flex-1"></div> */}

        {/* TODO buraya skeleton ekleyeceğiz */}
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <OtherCertificates firmaId={item.FirmaId} sertifikaId={item.id} />
        </Suspense>
        {item.SertifikaResimleri.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Sertifika Resimleri</h3>
            <div className="flex flex-wrap gap-4">
              {item.SertifikaResimleri.map((resim) => (
                <a
                  key={resim.Filename}
                  href={getProxiedImageUrl(resim.Filename)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={getImageUrl(resim.Filename)}
                    alt={item.MarkaAdi}
                    width={80}
                    height={120}
                    priority={false}
                    className="h-auto w-auto object-contain"
                    blurDataURL="/blur/sertifika.webp"
                    placeholder="blur"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
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
