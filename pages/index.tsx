// In this case, we choose Incremental Static Regeneration
import Title from "@/components/Title";
import { ProductType, getProducts } from "@/lib/api";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products }, revalidate: 5 * 60 };
}

export default function HomePage({
  products,
}: {
  products: { id: number; title: string }[];
}): React.ReactElement {
  return (
    <>
      <Head>Next Shop</Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
