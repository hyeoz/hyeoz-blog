import Head from "next/head";
import Title from "./Title";

export default function Layout({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) {
  return (
    <>
      <Head>{title} - Next Shop</Head>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}
