import { Inter, Fira_Code } from 'next/font/google'; // <-- Import from next/font
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- THIS IS THE FIX ---
// Configure the fonts with Next.js's font optimization
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Create a CSS variable for the font
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code', // Create a CSS variable for the font
});
// --- END OF FIX ---

export const metadata = {
  title: {
    template: '%s | Seranex',
    default: 'Seranex - Elite Digital Engineering',
  },
  description: 'A global digital engineering firm specializing in high-performance web applications, strategic branding, and custom software solutions.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      {/* The old <Head> tag with font links is no longer needed here */}
      <html lang="en" className={`${inter.variable} ${firaCode.variable} dark`}>
        <body className="bg-black text-gray-100 font-sans">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
