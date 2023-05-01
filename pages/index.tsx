// CSR with Internal API routes
import Title from "@/components/Title";
import { ProductType, getProducts } from "@/lib/api";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function HomePage(): React.ReactElement {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/products");
      const products = await res.json();
      setProducts(products);
    })();
  }, []);

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
