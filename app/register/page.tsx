"use client";
import React, { useState } from "react";
import Image from "next/image";
import login from "@/images/login.jpg";
import Link from "next/link";
import { route } from "@/utils/route";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import WithoutAuth from "@/hoc/WithoutAuth";

const Registerpage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      console.log("Registration successful:", data);
      // Handle successful registration (e.g., redirect, show success message, etc.)
    } catch (error: any) {
      setError(
        error.message ||
          "Registration failed. Please check your details and try again."
      );
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:flex w-full md:w-4/5 h-[85vh] rounded-xl shadow-xl bg-white"
      >
        <div
          className="w-full md:w-2/3 h-full p-8 flex flex-col justify-center rounded-l-xl md:bg-blue-200 bg-cover bg-center mobile-bg-only"
          style={{ backgroundImage: `url(${login.src})` }}
        >
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
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
                    icon={isPasswordVisible ? faEyeSlash : faEye}
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                checked={isAgree}
                onChange={(e) => setIsAgree(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                required
              />
              <label
                htmlFor="agree"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the{" "}
                <a href="/terms" className="text-blue-600 underline">
                  terms
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-blue-600 underline">
                  privacy policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 active:bg-blue-300 disabled:bg-blue-300"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link href={route("login")} className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </div>
        <div className="relative w-full md:w-1/3 h-full p-8 hidden md:flex items-center justify-center">
          <Image
            src={login}
            alt="login"
            layout="intrinsic"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WithoutAuth(Registerpage);
