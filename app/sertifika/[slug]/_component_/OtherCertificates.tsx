import React from "react";
import { getFirmaById } from "@/service/get-firma-by-id";
interface Props {
  firmaId: string;
  sertifikaId: string;
}
export const OtherCertificates = async ({ firmaId }: Props) => {
  const firma = await getFirmaById(firmaId);

  return (
    <div>
      OtherCertificates
      <div>{firma.FirmaAdi}</div>
    </div>
  );
};
