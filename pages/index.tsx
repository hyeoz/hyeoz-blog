import React from "react";
import Head from "next/head";
import Link from "next/link";

function HomePage(props) {
  console.log("=====> HOME PAGE", props);
  const { posts } = props;
  return (
    <>
      <Head>
        <title>NEXT BLOG</title>
        <meta name="description" defaultValue="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.title}>
              <Link href={`/post/${post.path}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
