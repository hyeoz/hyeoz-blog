import Title from "@/components/Title";
import { getProductDetail, getProducts } from "@/lib/api";
import Head from "next/head";

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map((p) => ({
      params: { id: p.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  console.log(params, "===>CONTEXT");
  const product = await getProductDetail(params.id);

  return {
    props: { product },
  };
}

export default function ProductDetail({
  product,
}: {
  product: { id: number; title: string; description: string };
}) {
  console.log(product, "=====> PRODUCT");

  return (
    <>
      <Head>Products</Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  );
}
