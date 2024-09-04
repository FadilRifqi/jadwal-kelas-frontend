"use client";

import { useRouter } from "next/navigation";
import { refresh } from "@/lib/session";
import { route } from "@/utils/route";
import Loading from "@/components/Loading";
import React, { useEffect } from "react";

const RefreshPage = () => {
  const router = useRouter();

  useEffect(() => {
    const fn = async () => {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        router.push(route("home"));
        return;
      }
      await refresh(refreshToken);
      router.push(route("dashboard"));
    };
    fn();
  }, [router]);
  return <Loading />;
};

export default RefreshPage;
