import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Terms of Service</h2>
          <p className="mt-4 text-lg text-gray-400">
            Last updated: July 26, 2024
          </p>
        </div>
        <div className="space-y-10 text-base text-gray-300 leading-relaxed">
          
          <PolicySection title="1. Acceptance of Terms">
            By accessing or using the Seranex website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </PolicySection>
          
          <PolicySection title="2. Services">
            Seranex provides web development, mobile app development, digital marketing, and graphic design services. We reserve the right to modify or discontinue any service at any time without notice.
          </PolicySection>

          <PolicySection title="3. Intellectual Property">
            All content on the Seranex website, including text, graphics, logos, and software, is the property of Seranex or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
          </PolicySection>
          
          <PolicySection title="4. Limitation of Liability">
            Seranex is not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages. Our liability is limited to the fullest extent permitted by law.
          </PolicySection>

          <PolicySection title="5. Contact Us">
            If you have any questions about these Terms of Service, please contact us at:{' '}
            <a className="font-semibold text-blue-400 hover:underline" href="mailto:contact@seranex.com">
              contact@seranex.com
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
        <p className="text-base text-gray-400">{children}</p>
    </div>
);