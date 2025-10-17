import { BoxIcon, Star } from "lucide-react";
import React from "react";

function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="w-1/2">
      <h1 className="font-semibold text-3xl">{product.title}</h1>
      <div className="flex gap-3 items-end h-8 mt-3">
        {product.priceAfterDiscount ? (
          <div className="flex gap-3 font-bold text-2xl">
            <span className="text-zinc-400 line-through">{product.price}</span>
            <span>{product.priceAfterDiscount}</span>
          </div>
        ) : (
          <div>{product.price}</div>
        )}
        <span className="font-medium text-lg">EGP</span>
        <div className="flex gap-1 self-start ms-2 bg-zinc-100 px-2 rounded-full">
          <BoxIcon width={20} />
          <span>{product.quantity}</span>
          <span>Left in stock</span>
        </div>
      </div>
      <div className="flex gap-2 p-4 border-t border-b border-zinc-200 mt-6 text-lg">
        <Star width={25} fill="#FFA508" color="#FFA508" />
        <span>Rating: </span>
        <span>{product.rateAvg} / 5</span>
        <span className="text-blue-500">({product.rateCount}) rating</span>
      </div>
      <p className="text-lg mt-10 text-zinc-600 dark:text-zinc-100">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
