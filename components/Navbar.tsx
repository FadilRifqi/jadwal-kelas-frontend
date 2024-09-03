import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { UserInterface } from "@/interfaces/userInterface";
import Link from "next/link";
import { logout } from "@/lib/session";

interface NavbarProps {
  session?: UserInterface;
}

const Navbar = ({ session }: NavbarProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <nav className="bg-white sticky top-0 dark:bg-gray-800 transition-colors duration-500">
      <div className="w-full mx-auto">
        <div className="flex mx-auto justify-between w-11/12">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-12">
            {/* logo */}
            <div>
              <a
                href="/"
                className="flex gap-1 font-bold text-gray-700 dark:text-gray-300 items-center"
              >
                <PaperAirplaneIcon className="h-6 w-6 text-primary transition-colors duration-500" />
                <span>Paper.io</span>
              </a>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                Benefits
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                Our Classes
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className="hidden md:flex items-center gap-2">
              {/* Dark Mode Toggle */}
              <div
                className={`flex border-2 border-gray-700 dark:border-white items-center rounded-md transition-colors duration-500 ${
                  darkMode ? "text-yellow-500" : "text-gray-700"
                }`}
              >
                <button
                  onClick={toggleDarkMode}
                  className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white transition-transform duration-500 transform"
                >
                  <span className="sr-only">Toggle dark mode</span>
                  <div
                    className={`transform transition-transform duration-500 ${
                      darkMode ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {darkMode ? (
                      <SunIcon className="h-6 w-6 text-yellow-500" />
                    ) : (
                      <MoonIcon className="h-6 w-6 text-gray-700" />
                    )}
                  </div>
                </button>
              </div>
              <div>
                {session ? (
                  <button
                    onClick={handleLogout}
                    className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100 transition-colors duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100 transition-colors duration-300"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-gray-100 dark:bg-gray-900 overflow-hidden flex flex-col lg:hidden gap-12 origin-top transition-all duration-500 ${
          !toggleMenu ? "h-0 opacity-0" : "h-full opacity-100"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a
              href="#"
              className="border-l-4 border-gray-600 dark:border-gray-300 transition-colors duration-500"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 transition-colors duration-500"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 transition-colors duration-500"
            >
              Download
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 transition-colors duration-500"
            >
              Classic
            </a>
            {/* Dark Mode Toggle for Mobile */}
            <div
              className={`flex w-[2.4rem] border-2 border-gray-700 dark:border-white items-center rounded-md transition-colors duration-500 ${
                darkMode ? "text-yellow-500" : "text-gray-700"
              }`}
            >
              <button
                onClick={toggleDarkMode}
                className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white transition-transform duration-500 transform"
              >
                <span className="sr-only">Toggle dark mode</span>
                <div
                  className={`transform transition-transform duration-500 ${
                    darkMode ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {darkMode ? (
                    <SunIcon className="h-6 w-6 text-yellow-500" />
                  ) : (
                    <MoonIcon className="h-6 w-6 text-gray-700" />
                  )}
                </div>
              </button>
            </div>
            {/* Login/Logout for Mobile */}
            <div>
              {session ? (
                <button
                  onClick={handleLogout}
                  className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100 transition-colors duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100 transition-colors duration-300"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
