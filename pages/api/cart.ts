import { fetchJson } from "@/lib/api";

const { CMS_URL } = process.env;

export type CartItemType = {
  created_at: string;
  id: number;
  product: {
    created_at: string;
    description: string;
    id: number;
    picture: any;
    price: number;
    title: string;
    updated_at: string;
  };
  quantity: number;
  updated_at: string;
  user: {
    blocked: boolean;
    confirmed: boolean;
    created_at: string;
    email: string;
    id: number;
    provider: string;
    role: number;
    updated_at: string;
    username: string;
  };
};

async function getCartItems(req: any, res: any) {
  const { jwt } = req.cookies;

  if (!jwt) {
    return res.status(401).end();
  }
  try {
    const cartItem = await fetchJson(`${CMS_URL}/cart-items`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    res.status(200).json(
      cartItem.map((c: CartItemType) => {
        return {
          ...c,
          total: c.quantity * c.product.price,
        };
      })
    );
  } catch (error) {
    res.status(401).end();
  }
}

async function postCardItems(req: any, res: any) {
  const { jwt } = req.cookies;
  if (!jwt) {
    return res.status(401).end();
  }

  const { product, quantity } = JSON.parse(req.body);

  try {
    await fetchJson(`${CMS_URL}/cart-items`, {
      method: req.method,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        product,
        quantity,
      }),
    });

    return res.status(200).json({
      product,
      quantity,
    });
  } catch (error) {
    return res.status(401).end();
  }
}

async function deleteCartItem(req: any, res: any) {
  const { jwt } = req.cookies;
  if (!jwt) {
    return res.status(401).end();
  }

  const { product } = JSON.parse(req.body);

  try {
    await fetchJson(`${CMS_URL}/cart-items/${product}`, {
      method: req.method,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-type": "application/json",
      },
    });

    return res.status(200).end();
  } catch (error) {
    return res.status(401).end();
  }
}

export default async function handleCartItem(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return getCartItems(req, res);
    case "POST":
      return postCardItems(req, res);
    case "DELETE":
      return deleteCartItem(req, res);
    default:
      return res.status(405).end;
  }
}
