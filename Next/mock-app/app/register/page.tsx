'use client'

import React, { FC, useState } from "react";
import Link from "next/link";

const RegisterForm: FC = () => {

  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(!name || !username || !email || !password) {
      setError('Please fill in all fields')
      return
    }
  }


  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-black">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
        /> 
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Register
        </button>

        <div className="flex justify-center text-black">
          <Link href="/login">Already have an account?</Link>
        </div>

        {error && <p className="bg-red-500 text-white p-2 rounded-md text-center">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
