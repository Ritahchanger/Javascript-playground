import React from "react";

import { Product } from "../types/Product.interface";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store/store";

import { addToCart } from "../Redux/features/Cart.slice";

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (product: any): any => {
    dispatch(addToCart({ productId: product.id, quantity: 1 }));
  };

  return (
    <div>
      <div key={product.id} className="border border-neutral-300">
        <div>
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="p-[1rem] text-center">
          <h4 className="text-neutral-400 text-sm">{product.name}</h4>
          <p className="border-b py-[0.3rem] border-purple-400">
            ${product.price}
            {""}
          </p>
          <button
            className="text-sm text-white mt-[10px] bg-purple-800 px-[1.5rem] py-[0.3rem]"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
