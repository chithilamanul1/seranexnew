'use client';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="flex-grow container mx-auto px-6 py-12 md:py-24 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="text-gray-400 mt-2">Start your journey with Seranex.</p>
          </div>
          
          <form className="space-y-6">
            <input name="name" type="text" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-base placeholder:text-gray-500 focus:ring-theme-blue focus:border-theme-blue transition-colors duration-200" placeholder="Full Name" required />
            <input name="email" type="email" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-base placeholder:text-gray-500 focus:ring-theme-blue focus:border-theme-blue transition-colors duration-200" placeholder="Your Email" required />
            <input name="password" type="password" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-base placeholder:text-gray-500 focus:ring-theme-blue focus:border-theme-blue transition-colors duration-200" placeholder="Create Password" required />
            
            <button 
                className="w-full bg-theme-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-theme-blue/30" 
                type="submit" 
            >
                Create Account
            </button>
          </form>

          <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-900 px-2 text-gray-500">Or sign up with</span>
              </div>
          </div>
          
          <div>
            <button className="w-full flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-lg py-3 hover:bg-white/20 transition-colors">
                 {/* Simple Google SVG */}
                 <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.657-3.657-11.303-8l-6.571 4.819C9.656 39.663 16.318 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083L43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C43.021 36.297 44 30.552 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
                <span className="text-sm font-semibold text-white">Sign up with Google</span>
            </button>
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            Already have an account? <Link href="/login" className="text-theme-blue hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </main>
  );
}