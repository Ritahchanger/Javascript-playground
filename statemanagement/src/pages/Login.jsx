import { useState } from "react";
import Navbar from "../components/Navbar";

import Swal from "sweetalert2";

import { Link } from "react-router-dom";


import  { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const [ loading,setLoading ] = useState(false)

  const [formData, setFormData] = useState({
    email: "",

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

    if (formData.email === "" || formData.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",

        text: "Please fill in both email and password!",

        confirmButtonColor: "#f97316",
      });
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (user) {

        Swal.fire({
          title: "LOGIN SUCCESSFUL",
          icon: "success",
          confirmButtonText: "OK",
        }).then(
          ()=>{
            navigate('/')
          }
        );

      }else{

        Swal.fire({
          icon: "error",
          title: "Invalid credentials",
          text: "Please check your email and password.",
          confirmButtonColor: "#f97316",
        });

      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <p className="text-3xl text-center font-bold text-orange-500 mb-8">
            LOGIN
          </p>
          <form action="#" className="space-y-6" onSubmit={handleSubmit}>
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
                LOGIN
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-500 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
