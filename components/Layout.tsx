import Head from "next/head";
import Title from "./Title";
import NavBar from "./NavBar";

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
      <header>
        <NavBar />
      </header>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}
