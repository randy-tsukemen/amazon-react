import React from "react";
import { format } from "date-fns";

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative border rounded-md">
      <div
        className="flex items-center space-x-10 p-5 bg-gray-100
    text-sm text-gray-600"
      >
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{format(new Date(timestamp * 1000), "dd MMMM yyyy")}</p>
        </div>
        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(amount)}
            - Next Day Delivery{" "}
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(amountShipping)}
          </p>
        </div>
        <p
          className="text-sm whitespace-nowrap sm:text-xl self-end
        flex-1 text-right text-blue-500"
        >
          {items.length} items
        </p>

        <p
          className="absolute top-2 right-2 w-40 lg:w-72 truncate
        text-xs whitespace-nowrap"
        >
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img
              src={image}
              key={image}
              alt=""
              className="h-20 object-contain sm:h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
