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

const CMS_URL = process.env.CMS_URL;

export class ApiError extends Error {
  status: number;
  constructor(url: string, status: number) {
    super(`❌${url} ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.name = "ApiError";
    this.status = status;
  }
}

export async function fetchJson(url: string, option?: RequestInit) {
  const res = await fetch(url, option);
  if (!res.ok) {
    throw new ApiError(url, res.status);
  }
  return await res.json();
}

export const getProducts = async () => {
  const products = await fetchJson(`${CMS_URL}/products`);

  return products.map((r: ProductType) => {
    return {
      id: r.id,
      title: r.title,
      price: r.price,
      pictureUrl: CMS_URL + r.picture.url,
    };
  });
};

export const getProductDetail = async (id: string) => {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);

  return {
    id: product.id,
    title: product.title,
    description: product.description,
    pictureUrl: CMS_URL + product.picture.url,
    price: product.price,
  };
};
