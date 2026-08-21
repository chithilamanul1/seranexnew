import { useState, useEffect } from "react";
import { logo, logoBlack } from "../assets";
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
      <div className={`hidden lg:flex fixed top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-white py-2 px-6 sm:px-16 justify-end items-center text-[12px] font-poppins z-[101] transition-transform duration-300 border-b border-gray-200 dark:border-gray-800 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <ul className="flex gap-4 max-w-[1440px] mx-auto w-full justify-end">
          {topBarLinks.map((link, index) => (
            <li key={link.id} className="flex items-center">
              <a href={`/${link.id}`} className="hover:text-purple-500 transition-colors">{link.title}</a>
              {index !== topBarLinks.length - 1 && <span className="ml-4 text-gray-300 dark:text-gray-600">|</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Navbar */}
      <div className={`fixed ${scrolled ? 'top-0' : 'top-0 lg:top-[32px]'} left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3 shadow-sm dark:shadow-lg" : "bg-white dark:bg-black py-3"}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-16 flex w-full items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="Home">
            <img src={logoBlack} alt="seranex" className="h-[40px] md:h-[50px] w-auto object-contain scale-[1.5] md:scale-[1.8] origin-left ml-2 md:ml-6 dark:hidden block" />
            <img src={logo} alt="seranex" className="h-[40px] md:h-[50px] w-auto object-contain scale-[1.5] md:scale-[1.8] origin-left ml-2 md:ml-6 hidden dark:block" />
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex flex-1 list-none items-center justify-center gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins text-[13px] font-medium transition-colors hover:text-purple-500 uppercase tracking-wide ${active === nav.title ? "text-purple-500" : "text-black dark:text-white"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Call Us Now Banner */}
          <a href="tel:+94728382638" className="hidden lg:flex bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 justify-between items-center hover:opacity-90 transition-opacity group">
            <span className="font-poppins font-bold text-[16px] tracking-[0.2em] uppercase">Call Us Now</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex flex-1 justify-end items-center">
            <button
              className="w-[28px] h-[28px] object-contain cursor-pointer text-black dark:text-white"
              onClick={() => setToggle(!toggle)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {toggle ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-white dark:bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[100] shadow-lg border border-gray-200 dark:border-gray-800`}>
        <div className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-6">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`/${nav.id}`}
                  className="font-poppins text-[15px] font-medium text-gray-800 dark:text-gray-300 hover:text-purple-500 uppercase tracking-wide transition-colors block"
                  onClick={() => setToggle(false)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <a href="/contact" className="font-poppins text-[15px] font-medium text-gray-800 dark:text-gray-300 hover:text-purple-500 uppercase tracking-wide transition-colors block">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
