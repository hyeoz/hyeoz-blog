import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export const getPost = async (name: string) => {
  const source = await readFile(`./content/posts/${name}.md`, "utf-8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);
  return {
    date,
    title,
    body,
  };
};

export const getFile = async () => {
  const paths = await getList();
  let posts = [];
  // NOTE array.map 의 각각을 await 적용하기
  await Promise.all(
    paths.map(async (p) => {
      const post = await getPost(p);
      posts.push({ path: p, ...post });
    })
  );
  console.log("GET FILE", posts);
  return posts;
};

export const getList = async () => {
  const files = await readdir("./content/posts");
  // mark down 파일만 필터링, 파일명에서 .md 자르고 리턴
  return files.filter((f) => f.endsWith(".md")).map((ff) => ff.slice(0, -3));
};
