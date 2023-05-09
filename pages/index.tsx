// In this case, we choose Incremental Static Regeneration
import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import { ProductType, getProducts } from "@/lib/api";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export type ProductPropsType = {
  id: number;
  title: string;
  price: number;
  pictureUrl: string;
};

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECOND!),
  };
}

export default function HomePage({
  products,
}: {
  products: ProductPropsType[];
}): React.ReactElement {
  return (
    <>
      <Head>Next Shop</Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 ">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
