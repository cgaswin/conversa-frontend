import React from "react";
import Navbar from "../components/Navbar";
import googleLogo from "../assets/google.svg";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  justify-center items-center font-Outfit">
        <h3 className="text-3xl">Welcome back</h3>
        <button className="flex mt-5 rounded-xl items-center px-20 py-2 border border-gray-300">
          <img src={googleLogo} />
          Login with Google
        </button>

        <p className="text-gray-400 mt-5">or</p>

        <form >
        <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="border mt-1 px-6 w-[350px] py-2 rounded-xl"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col mt-5 ">
            <label htmlFor="email">Email</label>
            <input
              className="border mt-1 px-6 w-[350px] py-2 rounded-xl"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="password">password</label>
            <input
              className="border mt-1 px-6 w-[350px] py-2 rounded-xl"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="border mt-1 px-6 w-[350px] py-2 rounded-xl"
              type="password"
              name="confirmPassword"
              placeholder="Enter your password"
            />
          </div>

          <button className="bg-black text-white mt-5 px-40 py-3 rounded-xl hover:shadow-sm hover:shadow-slate-400">
            Login
          </button>

          
        </form>
      </div>
    </>
  );
};

export default Signup;
