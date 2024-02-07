import { DUMMY_SHIPPING } from "@/constants/dummy";
import { useAppSelector } from "@/store";
import { useCallback } from "react";

export default function SummaryCart() {
  const products = useAppSelector((state) => state.cart.products);

  const temporaryAmount = useCallback(() => {
    let amount = 0;
    products.forEach((obj) => (amount += obj.price * obj.count));
    return amount;
  }, [products]);

  return (
    <div className="w-1/2 h-fit max-md:w-full">
      <div className="rounded-lg shadow-lg p-8">
        <p className="text-xl font-bold mb-6">Total of amount of</p>
        <div className="justify-between flex mb-2">
          <p>Temporary amount</p>
          <p>${temporaryAmount()}</p>
        </div>
        <div className="justify-between flex mb-2">
          <p>Shipping</p>
          <p>{DUMMY_SHIPPING}</p>
        </div>
        <div className="bg-slate-300 h-0.5 w-full mb-2" />
        <div className="justify-between flex mb-6 font-bold">
          <p>The total amount of (including VAT)</p>
          <p>${temporaryAmount() + DUMMY_SHIPPING}</p>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 w-full rounded-lg text-sm p-4"
          onClick={() => alert("Success Checkout!")}
        >
          GO TO CHECKOUT
        </button>
      </div>
      <div className="rounded-lg shadow-lg p-8 mt-8 justify-between flex">
        <p>Add a discount code [optional]</p>
      </div>
    </div>
  );
}
