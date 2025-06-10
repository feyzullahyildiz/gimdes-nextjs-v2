import { SertifikaItemCard } from "@/components/sertifika-item-card";
import { getFirmaById } from "@/service/get-firma-by-id";
import { getSertifikasByIdArray } from "@/service/get-sertifikas-by-id-array";
import React from "react";
import { notFound } from "next/navigation";
import { fromSlug } from "@/util/slug";

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
  const firma = await getFirmaById(id);
  if (!firma) {
    return notFound();
  }
  const sertifikalar = await getSertifikasByIdArray(firma.sertifikaIds);
  return (
    <div className="container mx-auto flex flex-col gap-8 py-8">
      <div>
        <h1 className="text-2xl font-bold">{firma.FirmaAdi}</h1>
        <p className="text-gray-500">{firma.FirmaAdresi}</p>
      </div>
      <div className="grid gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 2xl:grid-cols-6">
        {sertifikalar.map((sertifika) => (
          <SertifikaItemCard key={sertifika.id} item={sertifika} showCategory />
        ))}
      </div>
    </div>
  );
}
