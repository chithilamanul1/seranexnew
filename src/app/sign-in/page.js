import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center p-4">
      <div className="w-full max-w-5xl flex rounded-xl overflow-hidden border border-white/10 shadow-lg">
        {/* Left Side: Image */}
        <div className="hidden lg:block w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2670&auto=format&fit=crop"
            alt="Web development"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Right Side: Sign In Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-black/20">
          <SignIn />
        </div>
      </div>
    </div>
  );
}