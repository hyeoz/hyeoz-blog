export default async function handlerRevalidate(req: any, res: any) {
  console.log(`/api/revalidate received: `, req.body);
  const event = req.body;
  if (event.model === "product") {
    const id = event.entry.id;
    await Promise.all([res.revalidate("/"), res.revalidate(`/products/${id}`)]);
  }
  res.status(204).end();
}
