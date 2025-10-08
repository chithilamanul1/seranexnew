import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | SERANEX',
    default: 'SERANEX - Elite Digital Engineering',
  },
  description: 'A global digital engineering firm specializing in high-performance web applications, strategic branding, and custom software solutions.',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${inter.className} bg-black text-gray-100`}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}

  {/* Footer & CTA */}
          <Footer />
        </main>
      </div>
    </>
  );
}

// Reusable Components
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-lg h-full">
    <div className="text-4xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const TechStackIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="text-4xl text-gray-400">{icon}</div>
    <span className="text-sm font-semibold text-gray-400">{name}</span>
  </div>
);

const PhilosophyCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-gray-800 border border-blue-500/50 rounded-lg">
      <div className="text-xl text-blue-500">{icon}</div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

const Footer = () => (
  <footer id="contact" className="bg-black border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Have a Project in Mind?</h2>
        <p className="mt-4 text-lg text-gray-400">Let's build something great together.</p>
        <a
          href="mailto:contact@seranex.com" // Change to your actual contact email
          className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-transform transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">SERANEX</h2>
          <p className="mt-2 text-sm text-gray-400">Ideas, Engineered.</p>
        </div>
        <div>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm">Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Services</a></li>
            <li><a href="#philosophy" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Philosophy</a></li>
            <li><a href="#stack" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Technology</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm">Connect</h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaGithub size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 mt-16 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} SERANEX. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

