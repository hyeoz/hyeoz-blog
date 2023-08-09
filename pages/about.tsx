import Head from "next/head";
import React from "react";
import SubTab from "../components/common/SubTab";
import Portfolio from "../components/about/Portfolio";
import Contact from "../components/about/Contact";

// TODO 노션, 포트폴리오, 컨택트 페이지

function AboutPage() {
  return (
    <>
      <Head>
        <title>HYEOZ_ABOUT</title>
        <meta name="description" defaultValue="혜오즈의 블로그" />
      </Head>
      <main className="main-container">
        <SubTab />

        <section className="grid grid-cols-5 gap-4">
          <article className="col-span-3 border">
            <Portfolio />
          </article>
          <article className="col-span-2 border">
            <Contact />
          </article>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
