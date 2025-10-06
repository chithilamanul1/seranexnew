import Link from "next/link";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";

export const metadata = {
  title: "Seranex - Digital Excellence",
  description: "Crafting innovative solutions for a digital world.",
};

// Seranex Logo
const SeranexLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
  >
    <path d="M10 2L3 14H12L10 22L20 10H11L10 2Z" fill="currentColor" />
  </svg>
);

// Footer social SVGs
const SocialIcon = ({ href, svg }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
      {svg}
    </div>
  </Link>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-black/30">
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <SeranexLogo />
        <span className="text-sm font-semibold text-white">
          © {new Date().getFullYear()} Seranex. All rights reserved.
        </span>
      </div>
      <div className="flex gap-4">
        <SocialIcon
          href="https://twitter.com/"
          svg={
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.924 4.924 0 00-8.39 4.482A13.978 13.978 0 011.671 3.149 4.924 4.924 0 003.195 9.86a4.904 4.904 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.927 4.927 0 004.6 3.417A9.867 9.867 0 010 21.543 13.94 13.94 0 007.548 24c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
            </svg>
          }
        />
        <SocialIcon
          href="https://linkedin.com/"
          svg={
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
            >
              <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zm13.5 10.3h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.3c.5-.8 1.5-1.3 2.5-1.3 2.2 0 4 1.8 4 4v5z" />
            </svg>
          }
        />
        <SocialIcon
          href="https://github.com/"
          svg={
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
            >
              <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5a3.14 3.14 0 00-1.3-1.7c-1-.7.1-.7.1-.7a2.49 2.49 0 011.8 1.2 2.53 2.53 0 003.5 1 2.53 2.53 0 01.8-1.6c-2.6-.3-5.3-1.3-5.3-5.7a4.44 4.44 0 011.2-3.1 4.1 4.1 0 01.1-3s1-.3 3.3 1.2a11.44 11.44 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.1 4.1 0 01.1 3 4.44 4.44 0 011.2 3.1c0 4.5-2.7 5.4-5.3 5.7a2.82 2.82 0 01.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 0z" />
            </svg>
          }
        />
      </div>
    </div>
  </footer>
);

export default function RootLayout({ children }) {
  const clerkTheme = {
    variables: {
      colorPrimary: "#3B82F6",
      colorText: "#E5E7EB",
      colorBackground: "#191919",
      colorInputBackground: "#2d2d2d",
      colorInputText: "#F9FAFB",
    },
    elements: {
      card: {
        backgroundColor: "transparent",
        boxShadow: "none",
        width: "100%",
      },
      socialButtonsBlockButton: {
        borderColor: "rgba(255, 255, 255, 0.2)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        },
      },
      footerAction: {
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        },
      },
    },
  };

  return (
    <ClerkProvider appearance={{ baseTheme: "dark", ...clerkTheme }}>
      <html lang="en" className="dark">
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
