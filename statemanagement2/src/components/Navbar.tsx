import { Link } from "react-router-dom";
import ProfileImage from "../assets/react.svg";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store/store";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const numberOfCartItems = useSelector(
    (state: RootState) => state.cart.items
  ).length;

  console.log(numberOfCartItems);

  return (
    <div className="nav h-[50px] w-full px-[3%] border-b border-neutral-300 flex justify-between items-center">
      <div>
        <Link to="/home" className="flex items-center justify-between">
          HOME
          <span
            className="h-[30px] w-[30px]
        
        flex items-center justify-center border-2 border-orange-500 rounded-full
        "
          >
            O
          </span>
        </Link>
      </div>
      <div>
        <ul className="flex items-center gap-[10px]">
          <li>
            <Link
              to="#"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Cars
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Plots
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Bikes
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/carts-items">
          <p>
            Cart Items:{" "}
            <span className="font-semibold text-blue-500">
              {numberOfCartItems}
            </span>
          </p>
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <img
            src={ProfileImage}
            alt=""
            className="h-[40px] w-[40px] p-[8px] rounded-full border-4 border-orange-400"
          />
          <p className="ml-[1rem]">Kelvin Alonso</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
