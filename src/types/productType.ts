export type TProduct = {
  id: string;
  name: string;
  type: string;
  color: string;
  size: TSize;
  price: number;
  count: number;
  image: string;
};

export enum TSize {
  XS = "XS",
  S = "S",
  M = "M",
  XL = "XL",
  XXL = "XXL",
}
