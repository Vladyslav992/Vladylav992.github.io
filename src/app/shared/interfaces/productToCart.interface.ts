export interface ProductToCart {
  id: number;
  name: string | undefined;
  description: string;
  imgUrl: string;
  price: number;
  discount: number;
  color: string;
  size: string;
  quantity: number;
}
