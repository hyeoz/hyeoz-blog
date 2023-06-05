import { useState } from "react";
import Button from "./Button";
import { useMutation } from "react-query";
import { fetchJson } from "@/lib/api";
import { useRouter } from "next/router";

export default function AddToCardWidget({ productId }: { productId: number }) {
  const router = useRouter();

  const [value, setValue] = useState(0);

  const mutation = useMutation(({ quantity }: { quantity: number }) =>
    fetchJson(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        product: productId,
        quantity,
      }),
    })
  );

  const onAddToCart = async () => {
    try {
      await mutation.mutateAsync({ quantity: value });
      router.push("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="number"
        className="w-20 border border-gray-100"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
      {mutation.isLoading ? (
        <p>Loading...</p>
      ) : (
        <Button type="button" onClick={onAddToCart}>
          Add To Card
        </Button>
      )}
    </div>
  );
}
