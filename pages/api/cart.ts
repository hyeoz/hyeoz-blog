import { fetchJson } from "@/lib/api";

const { CMS_URL } = process.env;

export const handleCartItems = async (req: any, res: any) => {
  const { jwt } = req.cookies;

  if (!jwt) {
    return res.status(401).end();
  }
  try {
    const cartItem = await fetchJson(`${CMS_URL}/cart-item`, {
      headers: {
        Authentication: jwt,
      },
    });
    res.status(200).json(cartItem);
  } catch (error) {}
};
