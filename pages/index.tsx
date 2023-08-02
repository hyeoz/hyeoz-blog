import React from "react";
import Head from "next/head";
import Link from "next/link";

function HomePage(props) {
  console.log("=====> HOME PAGE", props);
  // const { posts } = props;
  return (
    <>
      <Head>
        <title>HYEOZ</title>
        <meta name="description" defaultValue="This is my blog" />
      </Head>
      <main>
        <h1>CONTENT</h1>
        <ul></ul>
      </main>
    </>
  );
}

export default HomePage;
