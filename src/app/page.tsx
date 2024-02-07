"use client";
import { store } from "@/store";
import { ListProduct } from "./components/listProduct";
import { Provider } from "react-redux";
import SummaryCart from "./components/summaryCart";

const Home = () => {
  return (
    <Provider store={store}>
      <h1 className="text-3xl font-bold text-center py-10">Shopping Cart</h1>
      <div className="flex max-md:flex-col bg-white p-6 gap-4">
        <ListProduct />
        <SummaryCart />
      </div>
    </Provider>
  );
};

export default Home;
