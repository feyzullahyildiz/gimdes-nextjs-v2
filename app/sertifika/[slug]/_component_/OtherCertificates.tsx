import React from "react";
import { getFirmaById } from "@/service/get-firma-by-id";
import { getSertifikasByIdArray } from "@/service/get-sertifikas-by-id-array";
import { SertifikaItemCard } from "@/components/sertifika-item-card";
import Link from "next/link";
import { toSlug } from "@/util/slug";
interface Props {
  firmaId: number;
  sertifikaId: string;
}
export const OtherCertificates = async ({ firmaId, sertifikaId }: Props) => {
  const firma = await getFirmaById(firmaId.toString());
  if (!firma) {
    return null;
  }
  const otherIds = firma.sertifikaIds
    .filter((id) => id !== sertifikaId)
    .filter((_, index) => index < 3);
  if (otherIds.length === 0) {
    return null;
  }
  const otherCertificates = await getSertifikasByIdArray(otherIds);
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2 flex items-end gap-4">
        <h2 className="text-xl font-bold">Firmanın Diğer Sertifikaları</h2>
        <Link
          href={`/firma/${toSlug(firma.FirmaAdi, firmaId)}`}
          className="underline underline-offset-2"
        >
          Tümünü Gör
        </Link>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        {otherCertificates.map((certificate) => (
          <SertifikaItemCard
            key={certificate.id}
            item={certificate}
            className="md:max-w-52"
          />
        ))}
      </div>
    </div>
  );
};
