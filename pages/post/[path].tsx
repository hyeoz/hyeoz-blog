import { readFile } from "fs/promises";
import Head from "next/head";
import { getList, getPost } from "../../lib/post";

type PropsType = {
  date: string;
  title: string;
  body: string;
};

export async function getStaticPaths() {
  const paths = await getList();
  return {
    paths: paths.map((p) => ({ params: { path: p } })),
    fallback: false, // 없는 경로에 접근한 경우 404 페이지 보여줄건지
  };
}

export async function getStaticProps({ params }) {
  console.log("GET STATIC PROPS", params);
  const post = await getPost(params.path);

  return {
    props: post,
  };
}

export default function PostPage(props: PropsType) {
  console.log(props, "===> PROPS");

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>
        <p>{props.date}</p>
        <h1>{props.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: props.body }} />
      </main>
    </>
  );
}
