import React from "react";
import { getUpdateTime } from "@/service/get-update-time";
import { formatDate } from "@/util/format-date";
import Link from "next/link";
import { InstallPWA } from "./install-pwa";

export const Footer = async () => {
  const { latest, hash } = await getUpdateTime();
  return (
    <div className="bg-secondary">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-8 md:flex-row">
        <div className="flex flex-2 flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              © 2025 — Eğitim amaçlı geliştirilmiştir.{" "}
              <Link href="/hukuki-uyari" className="underline">
                Hukuki Uyarı
              </Link>
            </div>
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
            ’un modernleştirilmiş, eğitimsel bir klonudur. Hiçbir ticari
            faaliyet içermez.
          </div>
          <div>
            <div>Son Güncelleme tarihi: {formatDate(latest)}</div>
            <div>Son Güncelleme hash: {hash}</div>
            <div>
              Sürüm notları için{" "}
              <Link href="/surum-notlari" className="underline">
                buraya
              </Link>{" "}
              tıklayınız.
            </div>
            <br />
            <div>
              Önerileriniz için:{" "}
              <span className="select-all">nar.tomarza@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex min-h-24 min-w-24 justify-end">
          <InstallPWA />
        </div>
      </div>
    </div>
  );
};
