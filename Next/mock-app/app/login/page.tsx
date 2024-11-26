"use client"

import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { doCredentialLogin } from "../actions"; 

const LoginForm: FC = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      // Convert FormData to object for logging
      const formDataObj = Object.fromEntries(formData.entries());
      console.log('Form data:', formDataObj);

      const response = await doCredentialLogin(formData);

      if(response?.error) {
        console.error(response.error);
      } else {
        router.push("/");
      }
      
    } catch (error) {
      console.error(error);
    }   
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-black ">Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Login
        </button>

        <div className="flex justify-center text-black">
          <Link href="/register">Don&apos;t have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
