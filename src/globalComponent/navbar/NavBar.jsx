import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function NavBar({ isMobile }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-[#2c59a3] font-bold text-lg underline underline-offset-4 decoration-2 decoration-[#2c59a3] inline-block"
      : "text-gray-700 hover:text-[#2c59a3] transition-colors duration-200 font-bold text-lg inline-block";

  const handleMobileNavClick = () => {
    if (isMobile && closeMobileMenu) {
      setIsServicesOpen(false);
      closeMobileMenu();
    }
  };

  const handleServicesToggle = () => {
    if (isMobile) {
      setIsServicesOpen((prev) => !prev); // only open dropdown
    }
  };

  return (
    <nav className={isMobile ? "w-full bg-white rounded-lg" : ""}>
      <ul
        className={`flex ${
          isMobile
            ? "flex-col space-y-6 w-full ml-4 mt-4"
            : "flex-row items-center gap-6 xl:gap-8 "
        }`}
      >
        <li>
          <NavLink
            to="/"
            onClick={handleMobileNavClick}
            className={navLinkStyle}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={handleMobileNavClick}
            className={navLinkStyle}
          >
            About Us
          </NavLink>
        </li>

        {/* Services Dropdown */}
        <li className={`${!isMobile ? "relative group" : "w-full "}`}>
          <div
            className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-[#2c59a3] font-bold text-lg"
            onClick={handleServicesToggle}
          >
            <NavLink to="/services" onClick={(e) => isMobile && e.preventDefault()} className={navLinkStyle}>
              Our Services
            </NavLink>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isServicesOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown Menu */}
          <div
            className={`
            ${
              isMobile
                ? `${
                    isServicesOpen
                      ? "max-h-[400px] py-4 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  } transition-all duration-300 flex flex-col space-y-4 pl-4 border-l-2 border-gray-100 mt-2`
                : "absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-xl rounded-xl z-60 py-2"
            }
          `}
          >
            <NavLink
              to="/services/supportcoordination"
              onClick={handleMobileNavClick}
              className="block px-4 py-2 hover:bg-gray-50 text-gray-600 hover:text-[#2c59a3] font-bold"
            >
              Support Coordination
            </NavLink>
            <NavLink
              to="/services/supportindependlive"
              onClick={handleMobileNavClick}
              className="block px-4 py-2 hover:bg-gray-50 text-gray-600 hover:text-[#2c59a3] font-bold"
            >
              Supported Independent Living
            </NavLink>
            <NavLink
              to="/services/shortterm"
              onClick={handleMobileNavClick}
              className="block px-4 py-2 hover:bg-gray-50 text-gray-600 hover:text-[#2c59a3] font-bold"
            >
              Short-Term Accommodation
            </NavLink>
            <NavLink
              to="/services/mediumterm"
              onClick={handleMobileNavClick}
              className="block px-4 py-2 hover:bg-gray-50 text-gray-600 hover:text-[#2c59a3] font-bold"
            >
              Medium-Term Accommodation
            </NavLink>
            <NavLink
              to="/services/inhomesupport"
              onClick={handleMobileNavClick}
              className="block px-4 py-2 hover:bg-gray-50 text-gray-600 hover:text-[#2c59a3] font-bold"
            >
              In Home Support
            </NavLink>
          </div>
        </li>

        <li>
          <NavLink
            to="/referralform"
            onClick={handleMobileNavClick}
            className={navLinkStyle}
          >
            Referral Form
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkStyle}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
