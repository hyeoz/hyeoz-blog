import { ProductPropsType } from "@/pages";
import Image from "next/image";
import Link from "next/link";

type ProductCardType = {
  product: ProductPropsType;
};

export default function ProductCard({ product }: ProductCardType) {
  return (
    <div className="border shadow w-80 hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <Image src={product.pictureUrl} alt="image" width={320} height={240} />
        <div className="flex items-baseline justify-between p-2">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <span>${product.price}</span>
        </div>
      </Link>
    </div>
  );
}
