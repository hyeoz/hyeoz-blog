import Title from "@/components/Title";
import {
  ApiError,
  ProductType,
  getProductDetail,
  getProducts,
} from "@/lib/api";
import Head from "next/head";

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map((p: ProductType) => ({
      params: { id: p.id.toString() },
    })),
    fallback: "blocking", // static path 를 통한 새 페이지가 렌더링 될 때 까지 block 함
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  console.log(params, "===>CONTEXT");

  try {
    const product = await getProductDetail(params.id);

    return {
      props: { product },
    };
  } catch (error) {
    if (error instanceof ApiError && error.status === 404)
      return { notFound: true };
    throw error;
  }
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
