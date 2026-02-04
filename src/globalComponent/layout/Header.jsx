import React, { useState } from 'react';
import NavBar from '../navbar/NavBar';
import logo from '../../assets/logo/we_care_community.png';
import ButtonContact from '../button/ButtonContact';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
     {/* Main Nav Row */}
<div className="flex flex-wrap items-center justify-between p-4">
  
  <div className="flex  items-center shrink-0 order-1">
    <img src={logo} alt="Logo" className="h-15 md:h-16 lg:h-20 w-auto object-contain" />
  </div>

  <div className="flex flex-1 justify-end lg:hidden order-2">
    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700">
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  </div>

  <div className="w-full xl:w-auto flex justify-center mt-4  lg:mt-4 order-3 lg:order-2">
    <div className="transform scale-75 sm:scale-90 lg:scale-100 origin-center">
      <a 
      href="https://wa.me/1800371070" 
      target="_blank" 
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <ButtonContact number="1800 371 070" />
    </a>
    </div>
  </div>

  <nav className="hidden xl:flex-1 lg:flex items-center justify-center gap-6 lg:g xl:gap-10 order-4 lg:order-1 lg:mx-8">
    <NavBar />
  </nav>

</div>

        {/* Mobile/Tablet Drawer */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100 pb-8 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"
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