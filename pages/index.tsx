// SSR with Incremental Static Regeneration
import Title from "@/components/Title";
import { ProductType, getProducts } from "@/lib/api";
import Head from "next/head";
import React from "react";

export async function getStaticProps() {
  console.log("[SERVER] getStaticProps Called");
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 30, // seconds
  };
}

export default function HomePage({
  products,
}: {
  products: ProductType[];
}): React.ReactElement {
  console.log(products);

  return (
    <>
      <Head>Next Shop</Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
