import { TProduct, TSize } from "@/types/productType";

export const PRODUCT_DUMMY: TProduct[] = [
  {
    id: "1",
    name: "Product A",
    type: "Type A",
    color: "Red",
    size: TSize.S,
    price: 20,
    count: 1,
    image: "https://picsum.photos/200/300",
  },
  {
    id: "2",
    name: "Product B",
    type: "Type B",
    color: "Blue",
    size: TSize.M,
    price: 30,
    count: 1,
    image: "https://picsum.photos/200/300",
  },
  {
    id: "3",
    name: "Product C",
    type: "Type A",
    color: "Green",
    size: TSize.XL,
    price: 40,
    count: 1,
    image: "https://picsum.photos/200/300",
  },
  {
    id: "4",
    name: "Product D",
    type: "Type C",
    color: "Black",
    size: TSize.XXL,
    price: 50,
    count: 1,
    image: "https://picsum.photos/200/300",
  },
  {
    id: "5",
    name: "Product E",
    type: "Type B",
    color: "White",
    size: TSize.XS,
    price: 25,
    count: 1,
    image: "https://picsum.photos/200/300",
  },
];

export const DUMMY_SHIPPING = 10;
