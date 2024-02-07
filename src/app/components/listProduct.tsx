import { useAppDispatch, useAppSelector } from "@/store";
import React from "react";
import Product from "./product";
import { deleteProduct, updateProduct } from "@/store/cart";

export const ListProduct = () => {
  const products = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  return (
    <div className="rounded-lg shadow-lg p-8 w-full max-w-full">
      <p className="text-xl font-bold mb-6">Cart ({products.length} items)</p>
      {products.map((item, idx) => (
        <div key={item.id}>
          <Product
            item={item}
            onDelete={() => dispatch(deleteProduct(item.id))}
            onUpdate={(product) => dispatch(updateProduct(product))}
          />
          {idx < products.length - 1 && (
            <div className="bg-slate-300 h-0.5 w-full mb-4" />
          )}
        </div>
      ))}
    </div>
  );
};
