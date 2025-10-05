import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center p-4">
      <div className="w-full max-w-5xl flex rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/20">
        {/* Left Side: Image inspired by the Login_v5 template */}
        <div className="hidden lg:block w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2670&auto=format&fit=crop"
            alt="Web development concept"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-12">
            <h2 className="text-3xl font-bold text-white">Welcome to Seranex</h2>
            <p className="text-white/70 mt-2">Your partner in digital excellence. Sign in to access your dashboard.</p>
          </div>
        </div>

        {/* Right Side: Clerk Sign-In Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
          <SignIn signUpForceRedirectUrl="/dashboard" />
        </div>
      </div>
    </div>
  );
}
