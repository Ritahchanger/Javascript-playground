import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

import { SwalGlobalised } from "../Globals/swal";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    SwalGlobalised("success", "authenticated", "ok").then(() =>
      navigate("/home")
    );
  };

  return (
    <div className="">
      <div className="flex justify-center items-center w-[90%] max-w-[700px] h-[100vh] mx-auto">
        <form
          action="#"
          className="w-full p-[1rem] border border-blue-500"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-blue-500 font-semibold text-3xl">
            LOGIN
          </p>
          <div className="input">
            <input
              type="text"
              name="email"
              id=""
              className="h-[40px]  focus:outline-none bg-transparent border border-neutral-300 focus:border-l-blue-500 w-full p-[10px]"
              placeholder="Enter your email...."
            />
          </div>
          <div className="input my-[1rem]">
            <input
              type="password"
              name="password"
              id=""
              className="h-[40px]  focus:outline-none bg-transparent border border-neutral-300 focus:border-l-blue-500 w-full p-[10px]"
              placeholder="Enter your password...."
            />
          </div>
          <button
            type="submit"
            className="h-[40px] bg-blue-400 w-full text-white border-none"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
