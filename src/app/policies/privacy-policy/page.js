import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h2>
          <p className="mt-4 text-lg text-gray-400">
            Last updated: October 26, 2023
          </p>
        </div>
        <div className="space-y-10 text-base text-gray-300 leading-relaxed">
          
          <PolicySection title="1. Introduction">
            Welcome to Seranex. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            We may collect personal information such as your name, email address, and phone number when you fill out a contact form or subscribe to our newsletter. We also collect non-personal information, such as browser type and IP address, through cookies and analytics tools.
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            We use the information we collect to:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Send you marketing communications, if you opt-in.</li>
              <li>Improve our website and services.</li>
              <li>Monitor and analyze usage and trends to enhance your experience.</li>
            </ul>
          </PolicySection>
          
          <PolicySection title="4. Contact Us">
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a className="font-semibold text-blue-400 hover:underline" href="mailto:info@seranex.org">
              info@seranex.org
            </a>.
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