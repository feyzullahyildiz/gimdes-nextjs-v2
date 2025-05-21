import { getActiveVersion } from "@/service/get-active-version";
import { getProductsByCategory } from "@/service/get-products";
import { imgUrl } from "@/util/img-url";
import React from "react";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const activeVersion = await getActiveVersion();
  const products = await getProductsByCategory(slug, activeVersion);
  //   console.log(products);
  return (
    <div className="container mx-auto py-4">
      <div className="bg-gray-100 rounded-md p-4 mb-8">
        <h1>{slug}</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
        {products.map((product) => (
          <div className="bg-gray-100 rounded-md p-4" key={product.id}>
            <div>{product.MarkaAdi}</div>
            <div>{product.FirmaAdi}</div>
            {/* <div>{product.Rozet}</div> */}
            {/* <div>{product.SertifikaKapsami}</div> */}
            {/* <div>{product.SertifikaResimleri}</div> */}
            {product.MarkaLogosu && (
              <Image
                src={imgUrl(product.MarkaLogosu)}
                alt={product.MarkaAdi || ""}
                width={100}
                height={100}
                className="flex justify-center items-center object-contain size-32"
                priority={false}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
