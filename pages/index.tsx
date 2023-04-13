import React from "react";
import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <Head>
        <title>NEXT BLOG</title>
        <meta name="description" defaultValue="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          <li>
            <Link href="/post/first-post">First Post</Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
