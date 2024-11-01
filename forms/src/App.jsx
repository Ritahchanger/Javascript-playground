import React from "react";

import { useState } from "react";

import Swal from "sweetalert2";
import Login from "./components/Login";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === ""
    ) {
      Swal.fire({
        title: "FORM SUBMISSION ERROR",
        icon: "error",
        text: "Fill all fields",
        confirmButtonText: "OK",
      });
    } else {
      var users = [];

      users.push(formData);

      const isLocalStorageEmpty = !!localStorage.getItem("users");

      if (!isLocalStorageEmpty) {
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        users = JSON.parse(localStorage.getItem("users"));

        users.forEach((user) => {
          if (user.email === formData.email) {
          
            Swal.fire({
              title: "USER ALREADY FOUND",
              icon: "error",
              text: "We already have this user",
              confirmButtonText: "OK",
            });
          } else {
            users.push(formData);

            localStorage.setItem("users", JSON.stringify(users));

            Swal.fire({
              title: "USER REGISTERED",
              icon: "success",
              text: "User successfully registered",
              confirmButtonText: "OK",
            });

          }
        });

      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(value);
  };

  return (
    <div className="h-[100%] flex flex-col w-full justify-center items-center bg-neutral-300">
      <form
        action="#"
        className="p-4 shadow-lg max-w-[800px] w-[90%] bg-white"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl my-4 text-center text-orange-500 font-semibold">
          SIGNUP TO AGRIBIX
        </p>
        <div>
          <p>Username</p>
          <input
            type="text"
            name="username"
            className="h-[40px] p-[10px]  w-full"
            placeholder="Enter username"
            onChange={onChange}
            style={{
              border: "1px solid #333",
            }}
          />
        </div>
        <div className="mt-4">
          <p>Email</p>
          <input
            type="email"
            name="email"
            className="h-[40px] p-[10px]  w-full"
            placeholder="Enter email"
            onChange={onChange}
            style={{
              border: "1px solid #333",
            }}
          />
        </div>
        <div className="mt-4">
          <p>Password</p>
          <input
            type="password"
            name="password"
            className="h-[40px] p-[10px]  w-full"
            placeholder="Enter password"
            onChange={onChange}
            style={{
              border: "1px solid #333",
            }}
          />
        </div>
        <button
          type="submit"
          className="rounded-md p-2 text-white bg-gradient-to-tr from-orange-500 to-orange-800 w-full mt-4"
        >
          SIGNUP
        </button>
      </form>

      <Login />
    </div>
  );
};

export default App;
