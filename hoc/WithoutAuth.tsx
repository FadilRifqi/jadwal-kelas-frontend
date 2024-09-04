import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/session";
import { UserInterface } from "@/interfaces/userInterface";
import { route } from "@/utils/route";
import Loading from "@/components/Loading";

const WithoutAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<UserInterface>(); // State to hold session data

    useEffect(() => {
      const getSession = async () => {
        try {
          const sessionData = await auth();

          if (sessionData) {
            router.push(route("dashboard"));
          } else {
            setSession(sessionData); // Save session data
            setLoading(false);
          }
        } catch (error) {
          console.error("Error while checking session:", error);
        }
      };
      getSession();
    }, [router]);

    if (loading) {
      return <Loading />; // Show loading indicator while checking authentication
    }

    return <WrappedComponent {...props} />;
  };

  // Set the display name for better debugging
  ComponentWithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuth;
};

export default WithoutAuth;
