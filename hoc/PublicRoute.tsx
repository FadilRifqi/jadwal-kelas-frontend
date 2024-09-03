import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/session";
import { UserInterface } from "@/interfaces/userInterface";

const PublicRoute = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<UserInterface>(); // State to hold session data

    useEffect(() => {
      const getSession = async () => {
        try {
          const sessionData = await auth();
          setSession(sessionData);
        } catch (error) {
          console.error("Error while checking session:", error);
        }
        setLoading(false);
      };
      getSession();
    }, [router]);

    if (loading) {
      return <div>loading ...</div>; // Show loading indicator while checking authentication
    }

    return <WrappedComponent {...props} session={session} />; // Pass session data as a prop
  };

  // Set the display name for better debugging
  ComponentWithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuth;
};

export default PublicRoute;
