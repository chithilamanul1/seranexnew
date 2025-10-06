import Link from "next/link";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const metadata = {
  title: "Seranex - Digital Excellence",
  description: "Crafting innovative solutions for a digital world.",
};

// Footer with modern design
const SeranexLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
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
  <footer className="bg-black/30 border-t border-white/10 py-16 text-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Branding */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <SeranexLogo />
            <span className="font-bold text-lg">Seranex</span>
          </div>
          <p className="text-white/70 max-w-xs">
            Crafting innovative digital solutions that elevate your business and inspire your audience.
          </p>
          <div className="flex gap-4 mt-4 text-white/70">
            <Link href="https://twitter.com" target="_blank" className="hover:text-theme-blue transition">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-theme-blue transition">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-theme-blue transition">
              <FaGithub size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-theme-blue transition">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-white/80">Quick Links</h4>
          <Link href="/" className="hover:text-theme-blue transition">Home</Link>
          <Link href="/services" className="hover:text-theme-blue transition">Services</Link>
          <Link href="/portfolio" className="hover:text-theme-blue transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-theme-blue transition">Contact</Link>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-white/80">Resources</h4>
          <Link href="/policies/privacy-policy" className="hover:text-theme-blue transition">Privacy Policy</Link>
          <Link href="/policies/terms-of-service" className="hover:text-theme-blue transition">Terms of Service</Link>
          <Link href="/blog" className="hover:text-theme-blue transition">Blog</Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-white/80">Newsletter</h4>
          <p className="text-white/70">Subscribe to stay updated with our latest projects and insights.</p>
          <form className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-theme-blue"
            />
            <button
              type="submit"
              className="mt-2 rounded-md bg-theme-blue px-4 py-2 font-semibold text-black sm:mt-0 hover:bg-blue-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Seranex. All rights reserved.
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
      card: { backgroundColor: "transparent", boxShadow: "none", width: "100%" },
      socialButtonsBlockButton: {
        borderColor: "rgba(255, 255, 255, 0.2)",
        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.05)" },
      },
      footerAction: { "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.05)" } },
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
