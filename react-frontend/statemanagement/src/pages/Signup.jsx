import { useState } from "react";
import Navbar from "../components/Navbar";

import Swal from "sweetalert2";

import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",

    lName: "",

    fName: "",

    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.lName === "" ||
      formData.fName === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",

        text: "Please fill fields kindly",

        confirmButtonColor: "#f97316",
      });
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const emailExists = users.some((user) => user.email === formData.email);

      if (emailExists) {
        Swal.fire({
          icon: "error",
          title: "Email already exists",
          text: "Please use a different email address.",
          confirmButtonColor: "#f97316",
        });
        return;
      }

      const newUser = {
        id: users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1,

        ...formData,
      };

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      Swal.fire({
        title: "SUCCESSFULLY REGISTERED",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <p className="text-3xl text-center font-bold text-orange-500 mb-8">
            SIGN UP
          </p>
          <form action="#" className="space-y-6" onSubmit={handleSubmit}>
            <div className="input-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Firstname
              </label>
              <input
                type="text"
                name="fName"
                placeholder="Enter your first name..."
                onChange={handleChange}
                className="w-full h-12 border border-gray-300 rounded-lg mt-1 px-4 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="input-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Lastname
              </label>
              <input
                type="text"
                name="lName"
                placeholder="Enter your last name..."
                onChange={handleChange}
                className="w-full h-12 border border-gray-300 rounded-lg mt-1 px-4 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="input-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email..."
                onChange={handleChange}
                className="w-full h-12 border border-gray-300 rounded-lg mt-1 px-4 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="input-group">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="Enter your password..."
                className="w-full h-12 border border-gray-300 rounded-lg mt-1 px-4 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full h-12 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Have an account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
