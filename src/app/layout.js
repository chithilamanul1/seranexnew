'use client';

import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '../components/Header';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const SeranexLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
    <path d="M10 2L3 14H12L10 22L20 10H11L10 2Z" fill="currentColor"/>
  </svg>
);

const Footer = () => (
  <footer className="bg-black/20 border-t border-white/10 py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <SeranexLogo />
        <span className="text-white/80 text-sm font-semibold">© {new Date().getFullYear()} Seranex. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-4">
        <Link href="#"><FaFacebookF className="text-white hover:text-theme-blue transition-colors"/></Link>
        <Link href="#"><FaTwitter className="text-white hover:text-theme-blue transition-colors"/></Link>
        <Link href="#"><FaLinkedinIn className="text-white hover:text-theme-blue transition-colors"/></Link>
        <Link href="#"><FaInstagram className="text-white hover:text-theme-blue transition-colors"/></Link>
      </div>
    </div>
  </footer>
);

export default function RootLayout({ children }) {
  const clerkTheme = {
    variables: {
      colorPrimary: '#3B82F6',
      colorText: '#E5E7EB',
      colorBackground: '#191919',
      colorInputBackground: '#2d2d2d',
      colorInputText: '#F9FAFB',
    },
    elements: {
      card: { backgroundColor: 'transparent', boxShadow: 'none', width: '100%' },
      socialButtonsBlockButton: { borderColor: 'rgba(255,255,255,0.2)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' } },
      footerAction: { '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' } }
    }
  };

  return (
    <ClerkProvider appearance={{ baseTheme: 'dark', ...clerkTheme }}>
      <html lang="en" className="dark">
        <body className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

