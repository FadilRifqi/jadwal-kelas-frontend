"use client";

import Layout from "@/components/Layout";
import WithAuth from "@/hoc/WithAuth";
import { UserInterface } from "@/interfaces/userInterface";
import React from "react";

const DashboardPage = ({ session }: { session?: UserInterface }) => {
  return <Layout session={session}>Dashboard Page</Layout>;
};

export default WithAuth(DashboardPage);
