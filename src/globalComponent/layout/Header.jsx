import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import NavBar from "../navbar/NavBar";
import logo from "../../assets/logo/we_care_community.png";
import ButtonContact from "../button/ButtonContact";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* ================= Mobile Row ================= */}
        <div className="flex items-start justify-between p-4 md:hidden">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-15 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Hamburger */}
          <div className="flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-gray-700"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Phone number - Mobile only */}
        <div className="w-full flex justify-start mb-5 md:hidden">
          <a
            href="tel:1800371070"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <ButtonContact number="1800 371 070" />
          </a>
        </div>

        {/* ================= Desktop / Tablet Row ================= */}
        <div className="hidden md:flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-15 md:h-16 lg:h-20 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex items-center justify-center gap-6 xl:gap-10">
            <NavBar />
          </nav>

          {/* Phone number */}
          <div className="flex items-center">
            <a  href="tel:1800371070"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer">
            <ButtonContact number="1800 371 070" />
            </a>
          </div>
        </div>

        {/* ================= Mobile/Tablet Drawer ================= */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 pb-8 overflow-visible"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
            <NavBar isMobile={true} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
