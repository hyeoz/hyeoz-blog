import React from "react";
import Head from "next/head";
import Link from "next/link";
import SubTab from "../components/common/SubTab";
import Instagram from "../components/main/Instagram";
import VIsitors from "../components/main/VIsitors";
import { fetcher } from "../lib/api";
// TODO 메인 - 블로그 페이지

export async function getStaticProps() {
  const { data } = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/reviews`
  );
  // console.log("GET STATIC PROP", data);

  // TODO test
  return {
    props: {
      reviews: data,
    },
  };
}

function HomePage({ reviews }) {
  console.log("FRONT", reviews);

  return (
    <>
      <Head>
        <title>HYEOZ</title>
        <meta name="description" defaultValue="혜오즈의 블로그" />
      </Head>
      <main className="main-container">
        <SubTab />

        <section className="grid grid-cols-5 gap-4">
          <article className="col-span-3 border">TISTORY BLOG AREA</article>
          <article className="col-span-2 border">
            <Instagram />
            <VIsitors />
          </article>
        </section>
      </main>
    </>
  );
}

export default HomePage;
