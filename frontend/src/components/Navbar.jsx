import { useState, useEffect } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";

const topBarLinks = [
  { id: "about", title: "About Us" },
  { id: "services", title: "Services" },
  { id: "our-work", title: "Our Work" },
  { id: "careers", title: "Careers" },
  { id: "contact", title: "Contact Us" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [toggle]);

  return (
    <>
      {/* Desktop Top Bar */}
      <div className={`hidden lg:flex fixed top-0 left-0 w-full bg-black text-white py-2 px-6 sm:px-16 justify-end items-center text-[12px] font-poppins z-[101] transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <ul className="flex gap-4 max-w-[1440px] mx-auto w-full justify-end">
          {topBarLinks.map((link, index) => (
            <li key={link.id} className="flex items-center">
              <a href={`/${link.id}`} className="hover:text-purple-500 transition-colors">{link.title}</a>
              {index !== topBarLinks.length - 1 && <span className="ml-4 text-gray-600">|</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Navbar */}
      <div className={`fixed ${scrolled ? 'top-0' : 'top-0 lg:top-[32px]'} left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md border-b border-gray-800 py-3 shadow-lg" : "bg-black py-4"}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-16 flex w-full items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="seranex" className="w-[140px] md:w-[180px] h-auto object-contain" />
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex flex-1 list-none items-center justify-center gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins text-[13px] font-medium transition-colors hover:text-purple-500 uppercase tracking-wide ${active === nav.title ? "text-purple-500" : "text-white"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Right Section */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Grid Menu Icon */}
            <button
              className="bg-[#1a1a1a] p-2 rounded-md border border-gray-800 text-gray-400 hover:text-white transition-colors"
              onClick={() => setToggle(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="4" width="6" height="6" rx="1" stroke="#a855f7" strokeWidth="2" />
                <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <div className={`fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setToggle(false)}>
        <div
          className={`absolute top-0 right-0 w-full sm:w-[400px] h-full bg-[#111] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <a href="/" className="flex items-center">
              <img src={logo} alt="seranex" className="w-[120px] h-auto object-contain" />
            </a>
            <div className="flex items-center gap-3">
              <button
                className="bg-[#1a1a1a] p-2 rounded-md border border-gray-800 text-purple-500 hover:bg-gray-800 transition-colors"
                onClick={() => setToggle(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>

          {/* Call Us Now Banner */}
          <a href="tel:+94728382638" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 flex justify-between items-center hover:opacity-90 transition-opacity group">
            <span className="font-poppins font-bold text-[16px] tracking-[0.2em] uppercase">Call Us Now</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto py-6 px-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`/${nav.id}`}
                    className="font-poppins text-[15px] font-medium text-gray-300 hover:text-purple-500 uppercase tracking-wide transition-colors block"
                    onClick={() => setToggle(false)}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-800">
                <a href="/contact" className="font-poppins text-[15px] font-medium text-gray-300 hover:text-purple-500 uppercase tracking-wide transition-colors block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
