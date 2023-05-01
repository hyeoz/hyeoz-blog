import Title from "@/components/Title";
import Head from "next/head";
import React from "react";

const products = [
  { id: 1, title: "First Product" },
  { id: 2, title: "Second Product" },
];

export default function HomePage(): React.ReactElement {
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
