import Link from 'next/link';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '../components/Header';

export const metadata = {
  title: 'Seranex - Digital Excellence',
  description: 'Crafting innovative solutions for a digital world.',
};

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

const Footer = () => (
    <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex items-center gap-2">
                    <SeranexLogo />
                    <span className="text-sm font-semibold text-white">© 2024 Seranex. All rights reserved.</span>
                </div>
                <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <NavLink href="/policies/privacy-policy">Privacy Policy</NavLink>
                    <NavLink href="/policies/terms-of-service">Terms of Service</NavLink>
                </nav>
            </div>
        </div>
    </footer>
);

export default function RootLayout({ children }) {
  // NEW: Updated Clerk theme to match the Login_v5 template and Seranex branding
  const clerkTheme = {
    variables: {
      colorPrimary: '#3B82F6', // Seranex blue for highlights
      colorText: '#E5E7EB', // Lighter text for dark background
      colorBackground: '#131316', // Slightly darker background for the card
      colorInputBackground: '#1E1E21',
      colorInputText: '#F9FAFB',
    },
    elements: {
      card: {
        backgroundColor: '#131316',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        width: '100%',
      },
      socialButtonsBlockButton: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }
      },
      footerAction: {
          '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }
      }
    }
  };

  return (
    <ClerkProvider appearance={{ baseTheme: 'dark', ...clerkTheme }}>
      <html lang="en" className="dark">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        </head>
        <body className="bg-background-dark text-text-light font-display">
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </body>
      </html>
    </ClerkProvider>
  );
}