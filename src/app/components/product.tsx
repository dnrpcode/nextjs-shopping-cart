import { TProduct } from "@/types/productType";
import Image from "next/image";
import CounterInput from "./counterInput";
import { memo } from "react";
import Trash from "../../assets/icons/trash.svg";
import Heart from "../../assets/icons/heart.svg";

interface IProduct {
  item: TProduct;
  onDelete: () => void;
  onUpdate: (product: TProduct) => void;
}

const Product = (props: Readonly<IProduct>) => {
  const { item, onDelete, onUpdate } = props;

  const _onUpdate = (count: number) => {
    onUpdate({ ...item, count });
  };

  return (
    <div className="flex max-lg:flex-col max-lg:items-start pb-4 justify-between">
      <div className="flex">
        <Image
          src={item.image}
          width={250}
          height={300}
          alt={item.name}
          className="rounded-lg max-w-xs"
        />
        <div className="ml-4 grid gap-1 w-4/5">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p>{item.type}</p>
          <p>COLOR: {item.color}</p>
          <p>SIZE: {item.size}</p>
          <div className="flex-row font-medium text-sm">
            <button
              type="button"
              className="hover:bg-gray-200 focus:ring-gray-100 rounded-lg p-2.5 text-center inline-flex items-center"
              onClick={onDelete}
            >
              <Image src={Trash} alt="trash" width={20} />
              <p className="max-md:hidden pl-2">REMOVE ITEM</p>
            </button>
            <button
              type="button"
              className="hover:bg-gray-200 focus:ring-gray-100 rounded-lg p-2.5 text-center inline-flex items-center"
              onClick={() => alert("Success move product to wishlist")}
            >
              <Image src={Heart} alt="heart" width={20} />
              <p className="max-md:hidden pl-2">MOVE TO WISHLIST</p>
            </button>
          </div>
        </div>
      </div>
      <div className="justify-between grid">
        <CounterInput value={item.count} onChange={_onUpdate} />
        <h2 className="text-xl font-semibold self-end">${item.price}</h2>
      </div>
    </div>
  );
};

export default memo(Product);
