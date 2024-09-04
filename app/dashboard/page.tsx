"use client";

import React from "react";
import Layout from "@/components/Layout";
import WithAuth from "@/hoc/WithAuth";
import { UserInterface } from "@/interfaces/userInterface";

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

const Button = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
    >
      {children}
    </a>
  );
};

const DashboardPage = ({ session }: { session?: UserInterface }) => {
  return (
    <Layout session={session}>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">
          Welcome, {session?.firstName}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Manage Classes">
            <p className="mb-4">Create, edit, or delete classes.</p>
            <Button href="/classes/manage">Go to Classes</Button>
          </Card>

          <Card title="View Schedule">
            <p className="mb-4">See your upcoming classes and schedules.</p>
            <Button href="/schedule/view">View Schedule</Button>
          </Card>

          <Card title="Account Settings">
            <p className="mb-4">Update your profile and account settings.</p>
            <Button href="/account/settings">Account Settings</Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default WithAuth(DashboardPage);
