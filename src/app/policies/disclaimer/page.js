import Link from 'next/link';

export default function Disclaimer() {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Disclaimer</h2>
          <p className="mt-4 text-lg text-gray-400">
            Last updated: October 26, 2023
          </p>
        </div>
        <div className="space-y-8 text-base text-gray-300 leading-relaxed">
          <div className="p-8 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">General Information</h3>
            <p>The information provided by Seranex ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
          </div>
          <div className="p-8 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">Limitation of Liability</h3>
            <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
          </div>
          <div className="p-8 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">No Professional Advice</h3>
            <p>The information provided on the site is for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. The use or reliance of any information contained on this site is solely at your own risk.</p>
          </div>
        </div>
      </div>
    </main>
  );
}