import React, { useState } from "react";

import adminLogin from "../../assets/adminLogin.json";
import Lottie from "react-lottie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: adminLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post("https://test1.bakpatu.com/api/v1/admin/login", Body)
      .then((res) => {
        localStorage.setItem("token", res?.data?.data?.token);
        navigate("/bpbpadmin");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex justify-between gap-4 items-center">
      <div className="w-1/2">
        <div className="w-3/4">
          <Lottie options={defaultOptions} />
        </div>
      </div>

      <div className="w-1/2">
        <div className="py-2 shadow-xl rounded w-3/4 mx-auto px-3">
          <h2 className="text-2xl text-center font-bold mb-8">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
