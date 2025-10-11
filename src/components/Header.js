'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const SeranexLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
        <path d="M10 2L3 14H12L10 22L20 10H11L10 2Z" fill="currentColor"/>
    </svg>
);

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-sm font-medium text-white/60 transition-colors hover:text-white">
    {children}
  </Link>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
                <SeranexLogo />
                <h1 className="text-xl font-bold text-white tracking-wider">Seranex</h1>
            </Link>
            <nav className="hidden items-center gap-8 md:flex">
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="https://forums.seranex.org">Forums</NavLink>
                <NavLink href="/careers">Careers</NavLink>
                <NavLink href="/faq">FAQ</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </nav>
            <div className="flex items-center gap-4">
                <SignedOut>
                    <Link className="hidden rounded-lg bg-white px-5 py-2 text-sm font-bold text-black transition-transform duration-300 hover:scale-105 md:inline-block" href="/sign-in">
                        Get Started
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                </SignedIn>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="material-symbols-outlined text-white">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden bg-background-dark/90">
                <nav className="container mx-auto flex flex-col items-start gap-4 px-4 py-4 sm:px-6 lg:px-8">
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/portfolio">Portfolio</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/blog">Blog</NavLink>
                    <NavLink href="/careers">Careers</NavLink>
                    <NavLink href="/faq">FAQ</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                     <SignedOut>
                        <a className="w-full mt-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-center text-black transition-opacity hover:opacity-90" href="/sign-in">Get Started</a>
                    </SignedOut>
                </nav>
            </div>
        )}
    </header>
  );
};



