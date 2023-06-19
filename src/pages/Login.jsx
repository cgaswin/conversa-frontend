import React, { useContext, useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import googleLogo from "../assets/google.svg";
import axios from "../api/axios";
import { authenticate, isAuthenticated } from "../utils/auth";
import { UserContext } from "../context/UserContext.jsx";

const Login = () => {

  const navigate = useNavigate();
  const {changeUsername,handleLogin,handleUserId} = useContext(UserContext)

  useEffect(()=>{
    if(isAuthenticated()){
      navigate("/dashboard")
    }
  },[navigate,isAuthenticated])


  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    const { email, password, error, loading, didRedirect } = values;
    if (!email) {
      alert("email required");
      return;
    }
    if (!password) {
      alert("password required");
      return;
    }

    console.log(email, password);
    try {
      const { data } = await axios.post("/login", { email, password });
      console.log(data);
      if(data.success){
        authenticate(data)
        handleLogin(true)
        navigate("/dashboard")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col  justify-center items-center font-Outfit">
        <h3 className="text-3xl">Welcome back</h3>
        <p className="text-gray-400 pt-5 text-center mx-5">
          We've missed you! Please sign in to catch up on what you've missed
        </p>
        {/* <button className="flex mt-5 rounded-xl items-center px-20 py-2 border border-gray-300">
          <img src={googleLogo} />
          Login with Google
        </button>

        <p className="text-gray-400 mt-5">or</p> */}

        <form className="mt-5 ">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border mt-1 px-6 w-[350px] py-2 rounded-xl"
              type="text"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="password">password</label>
            <input
              className="border mt-1 px-6 w-[350px] py-2 rounded-xl"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Enter your password"
            />
          </div>

          <button
            className="bg-black text-white mt-8 px-40 py-3 rounded-xl hover:shadow-sm hover:shadow-slate-400"
            onClick={formSubmit}
          >
            Login
          </button>
        </form>
      </div>
      </>
  );
};

export default Login;
