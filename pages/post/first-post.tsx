import { readFile } from "fs/promises";
import Head from "next/head";

type PropsType = {
  title: string;
  body: string;
};

export async function getStaticProps() {
  console.log("GET STATIC PROPS");
  const data = await readFile("./content/posts/first-post.json", "utf-8");
  const post = JSON.parse(data);

  return {
    props: post,
  };
}

export default function FirstPost(props: PropsType) {
  console.log(props, "===> PROPS");

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </main>
    </>
  );
}
