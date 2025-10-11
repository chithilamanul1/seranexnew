import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer id="contact" className="bg-black border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Have a Project in Mind?</h2>
        <p className="mt-4 text-lg text-gray-400">Let's build something great together.</p>
        <a
          href="mailto:info@seranex.org"
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
            <li><a href="/privacy-policy" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Privacy Policy</a></li>
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

export default Footer;
