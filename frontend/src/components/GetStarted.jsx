const GetStarted = () => (
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center px-8 py-4 font-poppins text-[18px] font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <span className="relative z-10 flex items-center gap-2">
      Get Started
      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </a>
);

export default GetStarted;
