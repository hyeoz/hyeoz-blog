import AddToCardWidget from "@/components/AddToCardWidget";
import Title from "@/components/Title";
import { useUser } from "@/hooks/user";
import {
  ApiError,
  ProductType,
  getProductDetail,
  getProducts,
} from "@/lib/api";
import Head from "next/head";
import Image from "next/image";

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
  product: {
    id: number;
    title: string;
    description: string;
    pictureUrl: string;
    price: number;
  };
}) {
  const user = useUser();

  return (
    <>
      <Head>Products</Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <div className="flex flex-col lg:gap-4 lg:flex-row">
          <Image
            src={product.pictureUrl}
            width={640}
            height={480}
            alt="detail"
          />
          <div className="flex-1">
            <p className="text-sm">{product.description}</p>
            <p className="mt-2 text-lg font-bold mb-4">${product.price}</p>
            {!!user && <AddToCardWidget productId={product.id} />}
          </div>
        </div>
      </main>
    </>
  );
}
