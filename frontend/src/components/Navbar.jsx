import { useState, useEffect } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

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

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md border-b border-gray-800/50 py-4 shadow-lg" : "bg-transparent py-6"}`}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-16 flex w-full items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="seranex" className="h-[48px] w-[48px] object-contain" />
          <span className="font-poppins font-bold text-[24px] text-white tracking-wider">SERANEX</span>
        </a>

        <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer font-poppins text-[16px] font-medium transition-colors hover:text-secondary ${active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
              aria-hidden="true"
            >
              <a href={`/${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            aria-hidden="true"
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6 z-50 shadow-2xl border border-gray-800`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-poppins text-[16px] font-medium hover:text-secondary transition-colors ${active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                  aria-hidden="true"
                >
                  <a href={`/${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
