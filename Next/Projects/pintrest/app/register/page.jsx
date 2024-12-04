"use client";
import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { ClipLoader } from "react-spinners";
import Link from "next/link";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(file);
      setPreviewImage(reader.result);
    };
  };

  const handleRegister = async () => {
    console.log(username, email, password, image);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full absolute top-0 left-0 pt-16">
      <div className="flex flex-col items-center justify-center gap-6 bg-[#171717] p-8 rounded-xl">

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/pinterest.png" alt="logo" width={80} height={80} />
            <h2>Welcome to Pinterest</h2>
            <p>Find your inspiration. Share your creativity.</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <span className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                placeholder="Username"
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </span>
            <span className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email"
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                placeholder="Password"
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="w-[50px] h-[50px] relative rounded-full overflow-hidden">
              <Image
                src={previewImage ? previewImage : "/default.png"}
                alt="preview"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>

            <label
              className={`cursor-pointer bg-[#272727] p-2 rounded-lg ${
                image ? "bg-green-500" : ""
              }`}
            >
              {image ? "Change Avatar" : "Choose Avatar"}
              <input
                type="file"
                name="image"
                id="image"
                className="hidden"
                onChange={handleImageChange}
                accept=".png,.jpg,.jpeg"
              />
            </label>
          </div>

          <button onClick={handleRegister} className="bg-red-500 text-white p-2 rounded-lg w-52 flex items-center justify-center">{loading ? <ClipLoader size={20} color="white" /> : "Register"}</button>
        </div>

        <hr className="w-full" />

        <div className="flex flex-col items-center justify-center gap-4">
          <button onClick={() => signIn("google", { callbackUrl: "/" })} className="flex items-center justify-center gap-2 bg-white text-black p-2 rounded-lg w-full">
            <Image src="/google.png" alt="google" width={20} height={20} priority />
            <span>|</span>
            <span className="text-md">Continue with Google</span>
          </button>

          <button onClick={() => signIn("github", { callbackUrl: "/" })} className="flex items-center justify-center gap-2 bg-white text-black p-2 rounded-lg w-full">
            <Image src="/github.png" alt="github" width={20} height={20} priority />
            <span>|</span>
            <span className="text-md">Continue with Github</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="text-xs">Already have an account? &nbsp;
            <Link className="text-blue-500 hover:underline" href="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
