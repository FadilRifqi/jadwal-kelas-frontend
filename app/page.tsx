"use client";

import PublicRoute from "@/hoc/PublicRoute";
import { UserInterface } from "@/interfaces/userInterface";
import { useEffect } from "react";

function Home({ session }: { session?: UserInterface }) {
  // session is optional
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Hello World</h1>
      {session && <p>Welcome, {session.email}</p>}
    </div>
  );
}

export default PublicRoute(Home);
