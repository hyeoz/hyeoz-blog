import { getProducts } from "@/lib/api";

async function handler(req: any, res: any) {
  console.log("[API ROUTES]");
  const products = await getProducts();
  res.status(200).json(products);
}

export default handler;
