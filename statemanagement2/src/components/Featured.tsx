import { products } from "../data/custom.products";
import { Product } from "../types/Product.interface";

import ProductCard from "./ProductCard";
const Featured = () => {
  console.log(products);

  return (
    <div>
      <p className="text-center text-4xl text-orange-500">Featured</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0.5rem] px-[3%] mt-[1rem]">
        {products.map((product: Product): any => (
          <ProductCard product={product}/>
        ))}
      </div>
    </div>
  );
};

export default Featured;
