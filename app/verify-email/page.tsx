"use client";

import Layout from "@/components/Layout";
import WithAuth from "@/hoc/WithAuth";
import { UserInterface } from "@/interfaces/userInterface";
import { getToken } from "@/lib/session";
import React, { useState } from "react";

const VerifyEmailPage = ({ session }: { session?: UserInterface }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleVerifyEmail = async () => {
    setLoading(true);
    setMessage("");
    try {
      const accessToken = await getToken();
      if (!accessToken) {
        throw new Error();
      }

      console.log("accessToken", accessToken);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/create-confirm-email-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: session?.id,
          }),
        }
      );

      if (response.ok) {
        setMessage("Verification email sent successfully.");
      } else {
        setMessage("Failed to send verification email.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout session={session}>
      <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-100 dark:bg-gray-900">
        <h1 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Verify Email Page
        </h1>
        <button
          onClick={handleVerifyEmail}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Verify Email"}
        </button>
        {message && (
          <p className="mt-4 text-gray-700 dark:text-gray-300">{message}</p>
        )}
      </div>
    </Layout>
  );
};

export default WithAuth(VerifyEmailPage);
