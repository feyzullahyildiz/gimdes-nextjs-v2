import React from "react";
import { getUpdateTime } from "@/service/get-update-time";
import { formatDate } from "@/util/format-date";
export const Footer = async () => {
  const { latest, hash } = await getUpdateTime();
  return (
    <div className="bg-secondary">
      <div className="container mx-auto p-4">
        <div>Son Güncelleme tarihi: {formatDate(latest)}</div>
        <div>Son Güncelleme hash: {hash}</div>
      </div>
    </div>
  );
};
