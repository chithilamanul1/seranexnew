import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";
import year from "./date";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
    {/* Top Section */}
    <div className={`${styles.flexStart} mb-12 w-full flex-col md:flex-row justify-between items-start border-b border-gray-200 dark:border-gray-800/80 pb-12`}>
      <div className="flex flex-[1.5] flex-col justify-start mr-10 mb-8 md:mb-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="seranex" className="h-[80px] w-[80px] object-contain" />
          <span className="font-poppins font-bold text-[32px] text-lightText dark:text-white tracking-wider">SERANEX</span>
        </div>
        <p className={`${styles.paragraph} max-w-[450px] text-lightDimText dark:text-dimWhite leading-relaxed`}>
          Seranex Lanka is a custom software company in Sri Lanka building intelligent software and AI Digital Staff that remove operational bottlenecks, reduce errors, and help teams work with more clarity.
        </p>
      </div>

      {/* Badges / Ratings */}
      <div className="flex flex-row gap-4 flex-wrap items-center justify-start md:justify-end flex-1">
        <a href="https://share.google/b6jJYh9t08b9zwoJZ" target="_blank" rel="noreferrer" className="bg-gray-100 dark:bg-black-gradient border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-xl flex flex-col items-center min-w-[120px] hover:border-secondary transition-colors">
          <div className="flex gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
          </div>
          <span className="text-[10px] text-lightDimText dark:text-dimWhite uppercase tracking-wider">5.0 on Google</span>
        </a>
        <div className="bg-gray-100 dark:bg-black-gradient border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-xl flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] text-lightDimText dark:text-dimWhite uppercase tracking-wider">Top Rated</span>
          <span className="text-sm font-bold text-secondary">Sortlist</span>
        </div>
        <div className="bg-gray-100 dark:bg-black-gradient border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-xl flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] text-lightDimText dark:text-dimWhite uppercase tracking-wider">Verified</span>
          <span className="text-sm font-bold text-secondary">Clutch</span>
        </div>
      </div>
    </div>

    {/* Middle Section: Columns */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12 text-left">
      <div>
        <h4 className="font-poppins font-semibold text-[18px] text-lightText dark:text-white mb-4">Services</h4>
        <p className="text-lightDimText dark:text-dimWhite text-[14px] leading-relaxed max-w-[280px]">
          Explore our custom software development and AI Digital Staff services built to remove inefficiencies and improve business operations.
        </p>
        <a href="/services" className="text-secondary hover:underline text-sm font-medium mt-3 inline-block">View Services &rarr;</a>
      </div>
      <div>
        <h4 className="font-poppins font-semibold text-[18px] text-lightText dark:text-white mb-4">Our Work</h4>
        <p className="text-lightDimText dark:text-dimWhite text-[14px] leading-relaxed max-w-[280px]">
          See how businesses have used Seranex, a leading Sri Lankan Software company to solve operational problems with custom-built software and intelligent systems.
        </p>
        <a href="/our-work" className="text-secondary hover:underline text-sm font-medium mt-3 inline-block">View Our Work &rarr;</a>
      </div>
      <div>
        <h4 className="font-poppins font-semibold text-[18px] text-lightText dark:text-white mb-4">Company</h4>
        <p className="text-lightDimText dark:text-dimWhite text-[14px] leading-relaxed max-w-[280px]">
          Learn more about our mission, vision, and the team behind Seranex Lanka.
        </p>
        <a href="/company" className="text-secondary hover:underline text-sm font-medium mt-3 inline-block">View Company &rarr;</a>
      </div>
    </div>

    {/* Contact Section */}
    <div className="w-full text-left border-t border-gray-200 dark:border-gray-800/80 pt-12 mb-12">
      <h4 className="font-poppins font-semibold text-[20px] text-lightText dark:text-white mb-6">Contact</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-lightDimText dark:text-dimWhite/60 block mb-1">Email</span>
          <a href="mailto:info@seranex.lk" className="text-lightText dark:text-white hover:text-secondary font-medium transition-colors">info@seranex.lk</a>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-lightDimText dark:text-dimWhite/60 block mb-1">WhatsApp / Phone</span>
          <a href="https://wa.me/94728382638" target="_blank" rel="noreferrer" className="text-lightText dark:text-white hover:text-secondary font-medium transition-colors">+94 72 838 2638</a>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-lightDimText dark:text-dimWhite/60 block mb-1">Location</span>
          <span className="text-lightText dark:text-white font-medium">No. 20 A, Amuna Rd, Seeduwa</span>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex w-full flex-col items-center justify-between border-t border-gray-200 dark:border-gray-800/80 pt-8 md:flex-row gap-4">
      <div className="flex flex-row gap-6 text-sm text-lightDimText dark:text-dimWhite">
        <a href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
        <span>|</span>
        <a href="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</a>
      </div>
      <p className="text-center font-poppins text-[14px] text-lightDimText dark:text-dimWhite md:order-none order-last">
        Copyright Ⓒ {year} Seranex Lanka Private Limited. All Rights Reserved.
      </p>

      <div className="flex flex-row gap-6">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="h-[21px] w-[21px] cursor-pointer object-contain hover:opacity-80 transition-opacity filter dark:invert-0 invert"
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
    <div className="sr-only">
      <h2>Comprehensive Web Design and Digital Marketing Services in Sri Lanka</h2>
      <p>Seranex Lanka is a premier web design sri lanka, web design, web design near me, web development company, digital marketing service, website design, website development, website design company, web page design, web design company, web design agency, design a website, website development company, website developers, web developers, web design services, wordpress website designer, website designers for small business, website design cost, best website design, website design services, local website designers, digital marketing, ecommerce websites, digital marketing agency, online marketing, ecommerce website design, digital marketing company, website design for small business, wordpress website developer, website design agency, web design and development, marketing agency near me, web application development, internet marketing, web development services, web development agency, best website designers, website development costs, online website design, ecommerce website developer, digital marketing near me, digital marketing agency near me, online digital marketing, wordpress designers, wordpress web designer, best website developers, web marketing, website design and development services, best ecommerce website, marketing firms near me, online marketing agency, digital marketing companies near me, web app developer, website developers for small business, local web designers, custom websites, webpage designer, wordpress website designers, best digital marketing agencies, seo digital marketing, cool website designs, web design websites, website design websites, ecommerce marketing agencies, web design studio, website design packages, custom website design cost, website design prices, media marketing, digital media marketing, building website for business, best website design companies, best web designers, wordpress design services, website packages, custom web design, digital marketing websites, web app developers, small business website design services, website development service, good website design, web design online, web design business, best digital marketing companies, web design for small businesses, webdesigners, best web design companies, business website design, website design sites, top 10 website design companies, digital agency website, website building agency, designer website, custom website design, custom website development, web dev agency, website design and development, web design cost, digital marketing services near me, seo agency near me, web design firms, site design, website design companies for small business, top digital marketing companies, professional website developer, best website design companies for small business, e commerce web design, custom ecommerce website, best ecommerce marketing agency, ecommerce website agency, seo website design, cheap website developers, online marketing companies near me, marketing website design, full service digital marketing agencies, top social media marketing companies, retail website design, best social media marketing companies, top web development companies, website development agencies, web app development companies, web design pricing, website design firms, online marketing company, best web design websites, web and app development company, digital marketing and ecommerce, corporate website design, wordpress design agency, ecommerce website designers, ecommerce website company, digital agency near me, web and mobile app development companies, best web development companies, looking for website developer, best web design agencies, search engine optimization in digital marketing, best agency websites, website design packages prices, top web design companies, webdesign company, ecommerce web designers near me, social media digital marketing, best digital marketing, best website developers for small business, web app development agency, cheap web developers, website design and seo, web agencies, best ecommerce website design, app developer website, professional website designers, top website designers, social media ads agency, branding website, social media marketing agency near me, top web design agencies, website created, ecommerce website development cost, web design and development agency, top website developers, seo and digital marketing, website design firm, digital marketing firms, find a website developer, website and app developers, website developer agency, digital and social media marketing, top website designs, ecommerce development agency, website marketing agency, professional website designer near me, ecommerce website cost, ecommerce design, wordpress website design services, social media marketing company near me, ecommerce website design companies, digital agency services, beautiful website design, e commerce website developers, website and app development company, web design services for small business, digital marketing content, best digital agencies, website development packages, digital marketing firms near me, ecommerce developers, web developer for small business, top web developers, website design & development, web development firm, top web designers, best design agency websites, digital marketing website design, web app developers near me, we build websites, web design and seo, best online marketing company, wordpress website company, ecommerce web designer, web and app developer, ecommerce website design agency, ecommerce web developers, internet advertising companies, online marketing website, ecommerce website developer near me, ecommerce web designers, website making companies, best digital agency websites, ecommerce digital marketing, best digital marketing websites, website and app developer near me, best website development company, web development packages, marketing and seo, web app development services, best online marketing, good web design, web design and marketing, website design and social media marketing, web design development, content marketing agency, website page design, affordable website developer, web design package, web dev company, website development price, ecommerce design agency, online marketing agency near me, best custom website design company, lead generation for website development, ecommerce website development agency, website design and development company, digital branding solutions, web application development companies, online marketing service, cheap website designers near me, custom website developer, it website design, best performance marketing agency, media marketing company, digital media agency near me, cheap website developer near me, web app agency, website marketing services, web development studio, content marketing in digital marketing, online social media marketing, web company, best website marketing companies, web developer websites, web development for small businesses, digital market company, online marketing near me, best website development, top digital marketing agency, website building for small business, best web development agencies, online marketing firm, web design and development companies, custom web design services, digital marketing site, website design and branding, digital web agency, website redesign agency, good website developers, wordpress website development company, website design and digital marketing, digital marketing and social media marketing, best website building apps, best ecommerce agencies, best web page design, affordable digital marketing company, best ecommerce website development company, marketing digital marketing, digital media marketing agency, online website developer, digital marketing agency seo, web developer ecommerce, top digital marketing companies in the world, best web design for small business, website build company, design studio website, digital marketing solutions, wordpress web design company, digital marketing and website development, website and app development near me, wordpress website design company, web development agencies near me, digital design agencies, ecommerce website development company, internet marketing service, web agencies near me, digital marketing design, seo marketing digital, wordpress website design agency, internet marketing company, business website developer, website development firm, digital marketing & e commerce, web design seo, web development cost, professional web development services, web design lead generation, digital marketing plans, custom web development services, website development business, website creating companies, wordpress website development services, ecommerce website design services, web site company, corporate website development, custom website design company, digital marketing campaigns, best website developer near me, web developer for ecommerce, web design and branding, social digital marketing, ecommerce branding agency, wordpress web design services, wordpress web design agency, web application agency, website designer agency, web design and seo company, cheapest website design, web application development services, digital web design, seo and digital marketing company, custom web development, website development websites, web development company website, website developer services, web development agentur, retail website developers, web design and branding agency, best web agency, web development agency website, digital marketing agency ecommerce, top website development companies, web design marketing, affordable digital marketing, webdesigning, ecommerce web development agency, website development and digital marketing company, seo and social media marketing, top website building companies, ecommerce website packages, top website design companies, digital marketing company website, biggest digital marketing companies, website design and development agency, companies looking for digital marketing services, web application development agency, social marketing agencies, app and web development company, website design and branding companies, digital media marketing company, custom web design and development services, small business web design packages, internet marketing companies near me, the best digital marketing agency, website making agency, ecommerce designer, web development businesses, website design firms near me, web site designs, cheapest web design company, digital promotion, ecommerce website developers near me, digital marketing ad, digital marketing service provider, professional ecommerce website, top digital marketing agencies in the world, top digital marketing services, ecommerce website design price, online website designers, best webdesign, custom e commerce website, top web development agencies, website development consultant, web marketing companies, best web app developers, local web design, website designer near me, website design and digital marketing company, online marketing solutions, web designers near me, online marketing services near me, website developers near me, website development site, best web design companies for small business, ecommerce shopping website, search engine optimization agencies, website builders near me, full service digital marketing, website design near me, web developers near me, internet marketing near me, best web development services, business ecommerce website, it company website design, digital marketing details, web and app development services, ecommerce web design services, custom web development company, seo agency for ecommerce, best web designers in the world, digital marketing social media marketing, web design companies near me, ecommerce site development, great ecommerce websites, affordable marketing agency, website design company near me, web development services company, digital commerce agency, wordpress web development services, best seo marketing companies, digital marketing analysis, us web development company, website development near me, web development companies near me, custom web application development company, bespoke web design services, full service digital agencies, seo web design companies, top digital marketing, web design services near me, award winning ecommerce websites, cool web design, best digital marketing services, online seo marketing, ecommerce web development company, website design services near me, digital agency seo, wordpress website development, website developer website, web design agency near me, design e commerce website, web development near me, wordpress web development company, digital marketing seo agency, custom web app, site developers near me, online marketing campaign, search engine optimization companies, companies looking for website development, b2b web development, best websites for web development, seo and web design services, website development company near me, branding and web design for small business, web agency services, mobile app and website development, custom website design agency, top web design, best website designer near me, custom web developers, b2b website development, website design monthly packages, best internet marketing company, a web designer, custom web design company, beautiful web design, custom website company, the web design and seo company, digital agency website design, digital and social media marketing companies, startup web development company, digital seo, best digital marketing agency near me, website development services company, website design and seo services, best web development, e commerce web designers, ecommerce site developers, online digital marketing companies, best ecommerce website developers, ecommerce site design, seo content marketing agency, website marketing firm, best ecommerce design, digital marketing sales, e commerce website design sri lanka, website design marketing agency, marketing agency digital, the best website developers, web developer companies near me, website design affordable, best website design firms, best website design and seo company, website and digital marketing agency, cost effective website design, ecommerce website design near me, internet marketing agency, top seo marketing companies, best website making company, website development package price, web development sri lanka, biggest web development companies.</p>
    </div>
  </section>
);

export default Footer;
