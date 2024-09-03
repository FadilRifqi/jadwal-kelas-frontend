import Navbar from "@/components/Navbar";
import { UserInterface } from "@/interfaces/userInterface";

interface LayoutProps {
  children: React.ReactNode;
  session?: UserInterface;
}

const Layout = ({ children, session }: LayoutProps) => {
  return (
    <div>
      <Navbar session={session} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
