import { Link } from "react-router-dom";

import { useState } from "react";

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Preloader from "../preloader/preloader";

import {
  openPreloader,
  closePreloader,
} from "../Redux/Features/PreloaderSlice";

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.preloader.loading);
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "ACCESS DENIED",
        confirmButtonText: "OK",
      });
      return;
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (!user) {
        Swal.fire({
          icon: "error",
          title: "ACCESS DENIED",
          text: "wrong credentials",
          confirmButtonText: "Try again",
        });
        return;
      } else {
        Swal.fire({
          icon: "success",
          title: "ACCESS GRANTED",
          confirmButtonText: "OK",
        }).then(() => {
          dispatch(openPreloader());
          setTimeout(() => {
            dispatch(closePreloader());
            localStorage.setItem("token", JSON.stringify(user.id));
            navigate("/users");
          }, 3000);
        });
        return;
      }
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        action="#"
        onSubmit={handleSubmit}
        className="max-w-[600px]  w-[96%] p-3 border border-neutral-400"
      >
        <h1 className="text-center text-3xl font-semibold bg-gradient-to-tr from-orange-500 to-orange-800  text-white">
          LOGIN
        </h1>
        <div className="my-[0.5rem]">
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={onChange}
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
          />
        </div>
        <div className="my-[0.5rem]">
          <p>Password</p>
          <input
            type="password"
            name="password"
            id=""
            onChange={onChange}
            placeholder="Enter email"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
          />
        </div>

        <p>
          <Link className="text-blue-600 ">Forget password</Link>
        </p>

        <button
          type="submit"
          className="w-full h-[40px] bg-blue-500 text-white"
        >
          LOGIN
        </button>

        <p>
          <Link to="/signup" className="text-blue-600">
            Don't have an account?
          </Link>
        </p>
      </form>

      {loading && <Preloader />}
    </div>
  );
};

export default Login;
