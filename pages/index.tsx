import React from "react";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>NEXT BLOG</title>
        <meta name="description" defaultValue="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
}

export default HomePage;
