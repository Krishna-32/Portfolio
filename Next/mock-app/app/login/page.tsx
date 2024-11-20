"use client"

import React, { FC } from "react";
import Link from "next/link";

const LoginForm: FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-black ">Login</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Login
        </button>

        <div className="flex justify-center text-black">
          <Link href="/register">Dont have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
