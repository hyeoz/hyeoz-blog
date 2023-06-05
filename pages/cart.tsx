import Layout from "@/components/Layout";
import { useUser } from "@/hooks/user";
import { useMutation, useQuery } from "react-query";
import handleCartItems, { CartItemType } from "./api/cart";
import { fetchJson } from "@/lib/api";
import { useEffect, useState } from "react";
import Button from "@/components/Button";

export default function Cart() {
  const [total, setTotal] = useState(0);

  const { data: cartItems } = useQuery(["handleCartItem"], () =>
    fetchJson("/api/cart")
  );

  const mutation = useMutation(({ productId }: { productId: number }) =>
    fetchJson("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        product: productId,
      }),
    })
  );

  useEffect(() => {
    if (!cartItems) return;

    let _total = 0;
    cartItems?.map(
      (c: CartItemType & { total: number }) => (_total += c.total)
    );

    setTotal(_total);
  }, [cartItems]);

  // const onDeleteItem = async (productId: number) => {
  //   try {
  //     console.log(productId);
  //     await mutation.mutateAsync({ productId });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Layout title="CART">
      <div>
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((c: CartItemType & { total: number }) => {
              return (
                <tr key={c.id}>
                  <td className="text-center">{c.product.title}</td>
                  <td className="text-center">${c.product.price}</td>
                  <td className="text-center">{c.quantity}</td>
                  <td className="text-center">${c.total}</td>

                  {/* <td>
                    <Button type="button" onClick={() => onDeleteItem(c.id)}>
                      DELETE
                    </Button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td></td>
              <td></td>
              <td className="text-center">${total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
}
