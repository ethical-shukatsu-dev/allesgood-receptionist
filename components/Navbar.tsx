"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState, useEffect} from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-white px-4 relative">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="hover:text-gray-200">
          <Image
            src="/allesgood_logo_light.png"
            alt="Allesgood logo"
            width={180}
            height={40}
            priority
            className="-my-12 -ml-4"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center px-3 py-2 rounded text-white hover:bg-primary-dark"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        {/* Menu items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <Link
              href="/"
              className={`px-3 py-3 rounded-md text-base font-medium ${
                isActive("/")
                  ? "bg-primary-dark text-white"
                  : "hover:bg-opacity-75"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/qr"
              className={`px-3 py-3 rounded-md text-base font-medium ${
                isActive("/qr")
                  ? "bg-primary-dark text-white"
                  : "hover:bg-opacity-75"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              QR Code
            </Link>

            <Link
              href="/admin"
              className={`px-3 py-3 rounded-md text-base font-medium ${
                isActive("/admin")
                  ? "bg-primary-dark text-white"
                  : "hover:bg-opacity-75"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
