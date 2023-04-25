import Head from "next/head";
import React from "react";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Head>Next Shop</Head>
      <main className="px-6 py-4">
        <h1 className="pb-4 text-2xl">next shop</h1>
        <p>[TODO : display products]</p>
      </main>
    </>
  );
}
