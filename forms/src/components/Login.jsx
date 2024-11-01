import { useState } from "react";

import Swal from "sweetalert2";

const Login = () => {
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

    if (formData.email.trim === "" || formData.password.trim() === "") {
      Swal.fire({
        title: "Not Authenticated",
        icon: "error",
        text: "Not done",
        confirmButtonText: "Ok",
      });
    }

    if (!users || users.length === 0) {
      Swal.fire({
        title: "Not authenticated",
        icon: "error",
        text: "No such user in the database",
        confirmButtonText: "Ok",
      });
    }

    users.forEach((user) => {
      if (user.email === formData.email) {
        if (user.password === formData.password) {
          Swal.fire({
            title: "Authenticated",
            icon: "success",
            text: "ACCESS GRANTED",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            title: "Not authenticated",
            icon: "error",
            text: "Wrong password",
            confirmButtonText: "Ok",
          });
        }
      }
    });
  };

  const users = () => {
    const usersToFetch = JSON.parse(localStorage.getItem("users")) || []
    console.log(usersToFetch)
  };

  users()

  return (
    <form
      action="#"
      className="p-4 pb-4 shadow-lg max-w-[800px] w-[90%] bg-white my-5"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl my-4 text-center text-orange-500 font-semibold">
        LOGIN
      </p>
      <div className="mt-4">
        <p>Email</p>
        <input
          type="email"
          name="email"
          className="h-[40px] p-[10px]  w-full"
          placeholder="Enter email"
          onChange={handleChange}
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
          onChange={handleChange}
          style={{
            border: "1px solid #333",
          }}
        />
      </div>
      <button
        type="submit"
        className="rounded-md p-2 text-white bg-gradient-to-tr from-orange-500 to-orange-800 w-full mt-4 hover:bg-teal-950"
      >
        LOGIN
      </button>
    </form>
  );
};

export default Login;
