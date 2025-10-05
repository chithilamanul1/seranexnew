'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const SeranexLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M11.5 2C11.13 2 10.88 2.3 10.88 2.67V10.16L6.5 10.16C6.18 10.16 5.89 10.33 5.75 10.6C5.61 10.88 5.68 11.23 5.92 11.45L13.17 21.05C13.38 21.32 13.73 21.43 14.05 21.32C14.37 21.21 14.56 20.91 14.56 20.55V13.06L18.88 13.06C19.2 13.06 19.49 12.89 19.63 12.62C19.77 12.34 19.7 11.99 19.46 11.77L12.21 2.17C12 2.06 11.75 2 11.5 2ZM12.29 11.4L17.27 17.84L15.34 17.84L15.34 11.4L12.29 11.4ZM8.73 10.84L13.71 4.4L13.71 10.84L8.73 10.84Z" fill="currentColor"/>
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
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2">
                <SeranexLogo />
                <h1 className="text-xl font-bold text-white">Seranex</h1>
            </Link>
            <nav className="hidden items-center gap-8 md:flex">
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </nav>
            <div className="flex items-center gap-4">
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                </SignedIn>
                <SignedOut>
                    <Link className="hidden rounded-lg bg-white px-4 py-2 text-sm font-bold text-black transition-opacity hover:opacity-90 md:inline-block" href="/sign-in">
                        Sign In
                    </Link>
                </SignedOut>
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