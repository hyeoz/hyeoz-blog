export type StrapiPictureType = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: any;
  size: number;
  url: string;
  width: number;
};

export type ProductType = {
  created_at: string;
  description: string;
  id: number;
  picture: {
    alternativeText: string;
    caption: string;
    created_at: string;
    ext: string;
    format: {
      medium: StrapiPictureType;
      small: StrapiPictureType;
      thumbnail: StrapiPictureType;
    };
    hash: string;
    height: number;
    id: number;
    mime: string;
    name: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    size: number;
    updated_at: string;
    url: string;
    width: number;
  };
  price: number;
  title: string;
  updated_at: string;
};

export const getProducts = async () => {
  const res = await fetch(`http://localhost:1337/products`);
  const products: ProductType[] = await res.json();
  return products.map((r) => {
    return {
      id: r.id,
      title: r.title,
    };
  });
};

export const getProductDetail = async (id: string) => {
  const res = await fetch(`http://localhost:1337/products/${id}`);
  const product = await res.json();
  return {
    id: product.id,
    title: product.title,
    description: product.description,
  };
};
