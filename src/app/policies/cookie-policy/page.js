import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Cookie Policy</h2>
          <p className="mt-4 text-lg text-gray-400">
            Last updated: October 26, 2023
          </p>
        </div>
        <div className="space-y-10 text-base text-gray-300 leading-relaxed">
          
          <PolicySection title="1. What Are Cookies?">
            Cookies are small text files that are placed on your device by websites that you visit. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </PolicySection>

          <PolicySection title="2. How We Use Cookies">
            We use cookies to:
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Understand and save your preferences for future visits.</li>
                <li>Compile aggregate data about site traffic and site interactions to offer better site experiences and tools in the future.</li>
                <li>Track advertisements.</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Your Choices Regarding Cookies">
            You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
          </PolicySection>

        </div>
      </div>
    </main>
  );
}

const PolicySection = ({ title, children }) => (
    <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="text-base text-gray-400">{children}</div>
    </div>
);