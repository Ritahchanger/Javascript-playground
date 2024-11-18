
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
const SignUp = () => {
   const navigate = useNavigate()
  const [formData, setFormData] = useState({
    FName: "",
    LName: "",
    email: "",
    password: "",
    CPassword: "",
  });
  const onRegistration = (e) => {
    e.preventDefault();
    if (
      formData.email.trim() === "" ||
      formData.FName.trim() === "" ||
      formData.LName.trim() === "" ||
      formData.password.trim() === "" ||
      formData.password !== formData.CPassword
    ) {
      Swal.fire({
        icon: "error",
        title: "NOT REGISTERED",
        text: "input correct credentials",
        confirmTextButton: "OK",
      });
      return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserIn = users.some((user) => user.email === formData.email);
    if (isUserIn) {
      Swal.fire({
        icon: "error",
        title: "USER ALREADY REGISTERED",
        text:"we already have the email",
        confirmButtonText: "OK",
      });
      return;
    } 
    else{
      
const newUser = {
  id:users.length ? Math.max(...users.map((user)=>user.id))+1 :1,
  ...formData
}
      
users.push(newUser);
localStorage.setItem("users",JSON.stringify(users));

Swal.fire({
  icon:"success",
  title:"REGISTERED",
  confirmButtonText:"OK"
}).then(()=>{
  navigate("/")
})


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
    <div className="h-screen w-full flex items-center justify-center">
      <form
        action="#"
        onSubmit={onRegistration}
        className="max-w-[600px] w-[96%] p-3 border border-neutral-400 "
      >
        <h1 className="text-center bg-gradient-to-tr from-orange-500 to-orange-800 text-white font-semibold text-3xl">
          Sign up
        </h1>
        <div className="my-[0.5rem]">
          <p>First Name</p>
          <input
            type="text"
            name="FName"
            id=""
            placeholder="enter first name"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
            onChange={onChange}
          />
        </div>
        <div className="my-[0.5rem]">
          <p>Last Name</p>
          <input
            type="text"
            name="LName"
            id=""
            placeholder="enter Last name"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
            onChange={onChange}
          />
        </div>
        <div className="my-[0.5rem]">
          <p>Email</p>
          <input
            type="email"
            name="email"
            id=""
            placeholder="enter email"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
            onChange={onChange}
          />
        </div>
        <div className="my-[0.5rem]">
          <p>Password</p>
          <input
            type="password"
            name="password"
            id=""
            placeholder="enter password"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
            onChange={onChange}
          />
        </div>
        <div className="my-[0.5rem]">
          <p>Confirm Password</p>
          <input
            type="password"
            name="CPassword"
            id=""
            placeholder="retype password"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-500 h-[40px]"
        >
          SIGN UP
        </button>
        <p>
          <Link to="/" className="text-blue-600">
            {" "}
            Have an account?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;