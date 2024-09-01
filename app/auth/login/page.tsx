"use client";
import React, { useState } from "react";
import Image from "next/image";
import login from "@/images/login.jpg";
import Link from "next/link";
import { route } from "@/utils/route";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="md:flex w-full md:w-11/12 h-screen md:h-[85vh] rounded-l-xl rounded-xl shadow-xl bg-white">
        <div className="relative w-full md:w-1/3 h-full p-8 hidden md:flex items-center justify-center">
          <Image
            src={login}
            alt="login"
            layout="intrinsic"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div
          className="w-full md:w-2/3 h-full p-8 flex flex-col justify-center rounded-r-xl md:bg-blue-200 bg-cover bg-center mobile-bg-only"
          style={{ backgroundImage: `url(${login.src})` }}
        >
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  <FontAwesomeIcon
                    icon={isPasswordVisible ? faEye : faEyeSlash}
                  />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link href={route("register")} className="text-blue-600 underline">
              Sign up
            </Link>{" "}
            Forgot password?{" "}
            <Link
              className="text-blue-600 underline"
              href={route("resetPassword")}
            >
              Reset
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
