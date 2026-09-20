import Navbar from "../components/Navbar";

import { RootState } from "../Redux/store/store";

import { useSelector } from "react-redux";
import { CartItem } from "../types/Cart.interface";

const Cart = () => {
  const items: CartItem[] = useSelector((state: RootState) => state.cart.items);

  console.log(items);

  return (
    <div>
      <Navbar />
      <div className="mx-[3%]">
        <table className="w-full">
          <thead className="border-b border-neutral-300">
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item: CartItem): any => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button>REMOVE</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
