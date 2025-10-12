import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer id="contact" className="bg-black border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">Have a Project in Mind?</h2>
        <p className="mt-4 text-lg text-gray-300">Let's build something great together.</p>
        <a
          href="mailto:infot@seranex.org"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-dark transition-transform transform hover:scale-105"
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
          <h3 className="font-bold text-white uppercase tracking-wider text-sm font-mono">Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About</a></li>
            <li><a href="/portfolio" className="text-gray-400 hover:text-primary transition-colors text-sm">Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm font-mono">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/policies/privacy-policy" className="text-gray-400 hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
            <li><a href="/policies/terms-of-service" className="text-gray-400 hover:text-primary transition-colors text-sm">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm font-mono">Connect</h3>
          <div className="mt-4 flex space-x-4">
            {/* --- FIX for Link Names --- */}
            <a href="#" aria-label="Visit our Twitter profile" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter size={20} /></a>
            <a href="#" aria-label="Visit our LinkedIn profile" className="text-gray-400 hover:text-primary transition-colors"><FaLinkedin size={20} /></a>
            <a href="#" aria-label="Visit our GitHub profile" className="text-gray-400 hover:text-primary transition-colors"><FaGithub size={20} /></a>
            {/* --- END OF FIX --- */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 mt-16 text-center text-sm">
        {/* --- FIX for Contrast --- */}
        <p className="text-gray-400">&copy; {new Date().getFullYear()} SERANEX. All Rights Reserved.</p>
        {/* --- END OF FIX --- */}
      </div>
    </div>
  </footer>
);

export default Footer;
