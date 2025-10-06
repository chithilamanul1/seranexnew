import Link from "next/link";
import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Seranex - Digital Excellence",
  description: "Crafting innovative solutions for a digital world.",
};

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

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-sm font-medium text-white/60 transition-colors hover:text-white"
  >
    {children}
  </Link>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <SeranexLogo />
          <span className="text-sm font-semibold text-white">
            © {new Date().getFullYear()} Seranex. All rights reserved.
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <NavLink href="/policies/privacy-policy">Privacy Policy</NavLink>
          <NavLink href="/policies/terms-of-service">Terms of Service</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
      <div className="mt-8 text-center text-white/50 text-sm">
        Made with ❤️ by Seranex Team
      </div>
    </div>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white font-sans">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
