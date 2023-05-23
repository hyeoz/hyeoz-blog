// In this case, we choose Incremental Static Regeneration
import React from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { ProductType, getProducts } from "@/lib/api";

export type ProductPropsType = {
  id: number;
  title: string;
  price: number;
  pictureUrl: string;
};

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECOND!),
  };
}

export default function HomePage({
  products,
}: {
  products: ProductPropsType[];
}): React.ReactElement {
  return (
    <Layout title="Indoor Plants">
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 ">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
