import React from "react";
import Head from "next/head";
import Link from "next/link";
import SubTab from "../components/common/SubTab";
import Instagram from "../components/main/Instagram";
import VIsitors from "../components/main/VIsitors";

// TODO 메인 - 블로그 페이지

function HomePage() {
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
