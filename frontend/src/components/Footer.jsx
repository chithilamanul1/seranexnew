import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";
import year from "./date";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
    {/* Top Section */}
    <div className={`${styles.flexStart} mb-12 w-full flex-col md:flex-row justify-between items-start border-b border-gray-800/80 pb-12`}>
      <div className="flex flex-[1.5] flex-col justify-start mr-10 mb-8 md:mb-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="seranex" className="h-[80px] w-[80px] object-contain" />
          <span className="font-poppins font-bold text-[32px] text-white tracking-wider">SERANEX</span>
        </div>
        <p className={`${styles.paragraph} max-w-[450px] text-dimWhite leading-relaxed`}>
          Seranex Lanka is a custom software company in Sri Lanka building intelligent software and AI Digital Staff that remove operational bottlenecks, reduce errors, and help teams work with more clarity.
        </p>
      </div>

      {/* Badges / Ratings */}
      <div className="flex flex-row gap-4 flex-wrap items-center justify-start md:justify-end flex-1">
        <div className="bg-black-gradient border border-gray-800 px-4 py-2 rounded-xl flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] text-dimWhite uppercase tracking-wider">Top Rated</span>
          <span className="text-sm font-bold text-secondary">Sortlist</span>
        </div>
        <div className="bg-black-gradient border border-gray-800 px-4 py-2 rounded-xl flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] text-dimWhite uppercase tracking-wider">Verified</span>
          <span className="text-sm font-bold text-secondary">Clutch</span>
        </div>
        <div className="bg-black-gradient border border-gray-800 px-4 py-2 rounded-xl flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] text-dimWhite uppercase tracking-wider">5.0 Star</span>
          <span className="text-sm font-bold text-secondary">Agency</span>
        </div>
      </div>
    </div>

    {/* Middle Section: Columns */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12 text-left">
      <div>
        <h4 className="font-poppins font-semibold text-[18px] text-white mb-4">Services</h4>
        <p className="text-dimWhite text-[14px] leading-relaxed max-w-[280px]">
          Explore our custom software development and AI Digital Staff services built to remove inefficiencies and improve business operations.
        </p>
        <a href="/services" className="text-secondary hover:underline text-sm font-medium mt-3 inline-block">View Services &rarr;</a>
      </div>
      <div>
        <h4 className="font-poppins font-semibold text-[18px] text-white mb-4">Case Studies</h4>
        <p className="text-dimWhite text-[14px] leading-relaxed max-w-[280px]">
          See how businesses have used Seranex, a leading Sri Lankan Software company to solve operational problems with custom-built software and intelligent systems.
        </p>
        <a href="/case-studies" className="text-secondary hover:underline text-sm font-medium mt-3 inline-block">View Case Studies &rarr;</a>
      </div>
      <div>
        <h4 className="font-poppins font-semibold text-[18px] text-white mb-4">Products</h4>
        <p className="text-dimWhite text-[14px] leading-relaxed max-w-[280px]">
          Discover software products designed to solve business problems efficiently and support operational growth.
        </p>
        <a href="/products" className="text-secondary hover:underline text-sm font-medium mt-3 inline-block">View Products &rarr;</a>
      </div>
    </div>

    {/* Contact Section */}
    <div className="w-full text-left border-t border-gray-800/80 pt-12 mb-12">
      <h4 className="font-poppins font-semibold text-[20px] text-white mb-6">Contact</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-dimWhite/60 block mb-1">Email</span>
          <a href="mailto:info@seranex.lk" className="text-white hover:text-secondary font-medium transition-colors">info@seranex.lk</a>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-dimWhite/60 block mb-1">WhatsApp / Phone</span>
          <a href="https://wa.me/94728382638" target="_blank" rel="noreferrer" className="text-white hover:text-secondary font-medium transition-colors">+94 72 838 2638</a>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-dimWhite/60 block mb-1">Location</span>
          <span className="text-white font-medium">No. 20 A, Amuna Rd, Seeduwa</span>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex w-full flex-col items-center justify-between border-t border-gray-800/80 pt-8 md:flex-row gap-4">
      <div className="flex flex-row gap-6 text-sm text-dimWhite">
        <a href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
        <span>|</span>
        <a href="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</a>
      </div>
      <p className="text-center font-poppins text-[14px] text-dimWhite md:order-none order-last">
        Copyright Ⓒ {year} Seranex Lanka Private Limited. All Rights Reserved.
      </p>

      <div className="flex flex-row gap-6">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="h-[21px] w-[21px] cursor-pointer object-contain hover:opacity-80 transition-opacity"
            onClick={() => window.open(social.link)}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>

    <a
      href="https://wa.me/94728382638"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.574 1.97 14.101.945 11.472.945c-5.442 0-9.866 4.372-9.87 9.802 0 1.714.47 3.387 1.357 4.881L1.935 21.85l6.396-1.676zM9.588 7.319c-.163-.368-.337-.375-.491-.381l-.417-.007c-.147 0-.385.055-.587.276-.201.221-.771.753-.771 1.838 0 1.085.789 2.133.899 2.28.11.147 1.552 2.37 3.761 3.326.525.227.935.363 1.255.465.528.168 1.009.144 1.389.087.424-.064 1.3-.532 1.484-1.048.184-.516.184-.958.129-1.048-.055-.09-.203-.147-.423-.258-.22-.11-1.3-.642-1.502-.715-.202-.074-.349-.11-.497.11-.147.221-.57.715-.698.864-.128.147-.257.166-.477.055-.22-.11-.929-.342-1.77-1.094-.653-.582-1.095-1.302-1.223-1.523-.128-.221-.014-.341.096-.451.1-.1.22-.258.33-.387.11-.13.147-.221.22-.368.074-.147.037-.276-.018-.387-.056-.11-.491-1.184-.673-1.623z" />
      </svg>
    </a>
  </section>
);

export default Footer;
