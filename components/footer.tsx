import React from "react";
import { getUpdateTime } from "@/service/get-update-time";
import { formatDate } from "@/util/format-date";
import Link from "next/link";
export const Footer = async () => {
  const { latest, hash } = await getUpdateTime();
  return (
    <div className="bg-secondary">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-8">
        <div>
          © 2025 — Eğitim amaçlı geliştirilmiştir.{" "}
          <Link href="/hukuki-uyari" className="underline">
            Hukuki Uyarı
          </Link>
        </div>
        <div>
          Bu site, orijinal{" "}
          <a
            href="https://gimdes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            gimdes.com
          </a>{" "}
          ’un modernleştirilmiş, eğitimsel bir klonudur. Hiçbir ticari faaliyet
          içermez.
        </div>
        <div>
          <div>Son Güncelleme tarihi: {formatDate(latest)}</div>
          <div>Son Güncelleme hash: {hash}</div>
          <div>
            Önerileriniz için:{" "}
            <span className="select-all">nar.tomarza@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
