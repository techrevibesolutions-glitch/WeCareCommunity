import React from "react";
import { Link } from "react-router-dom"; // Added for navigation
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo/icon_we_care_community.png";
import ndislogo from "../../assets/logo/ndis_logo.png";

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebookF, href: "https://facebook.com/yourpage" },
    { Icon: FaXTwitter, href: "https://twitter.com/yourhandle" },
    { Icon: FaYoutube, href: "https://youtube.com/yourchannel" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com/company/yourprofile" },
  ];

  // Define Quick Links data
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Referral Form", path: "/referralform" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="bg-white font-sans">
      <footer className="border-t border-gray-100 pt-16 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Office Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-800 w-fit pr-4 pb-1">
                Office
              </h3>
              <address className="not-italic text-gray-600 text-lg leading-relaxed">
                <span className="font-semibold block mt-2 text-gray-800">
                  Head Office:{" "}
                </span>
                Level 1,154 Marsden St Parramatta NSW 2150
                <br />
                <span className="font-semibold block mt-2 text-gray-800">
                  Goulburn Day Program Centre:
                </span>
                149 Kinghorne St Goulburn 2580
                <br />
                <span className="font-semibold block mt-2 text-gray-800">
                  Other Services Area:
                </span>
                All Across Sydney, Southern Highland, Newcastle, Hawkesbury,
                Richmond and Wollongong
              </address>
            </div>

            {/* Quick Links - NEW SECTION */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-800 w-fit pr-4 pb-1">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-600 text-lg hover:text-blue-800 hover:translate-x-1 transition-all inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-800 w-fit pr-4 pb-1">
                Contact Us
              </h3>
              <div className="text-gray-600 text-lg space-y-2">
                <p className="hover:text-blue-800 transition-colors">
                  <a href="mailto:info@wecarecommunity.com.au">
                    info@wecarecommunity.com.au
                  </a>
                </p>
                <p className="hover:text-blue-800 transition-colors">
                  <a
                    href="https://wa.me/1800371070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    1800 371 070
                  </a>
                </p>
              </div>
            </div>

            {/* Social & Logo */}
            <div className="flex flex-row items-start gap-0">
              {/* <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <social.Icon size={20} />
                  </a>
                ))}
              </div> */}

<div className="w-64 h-40 flex items-center justify-center">
    <img
      src={logo}
      alt="We Care Community Logo"
      className="max-h-full max-w-full object-contain"
    />
  </div>

  <div className="w-64 h-40 flex items-center justify-center">
    <img
      src={ndislogo}
      alt="NDIS Logo"
      className="max-h-full max-w-full object-contain"
    />
  </div>
            </div>
          </div>

          {/* Copyright Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} We Care Community. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
