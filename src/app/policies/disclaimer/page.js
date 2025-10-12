import Head from 'next/head';

export const metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for the SERANEX website and the information provided herein.',
};

export default function DisclaimerPage() {
  return (
    <>
      <div className="w-full pt-24 sm:pt-32 pb-16">
        <main className="max-w-4xl mx-auto px-6">
          <div className="text-center animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Disclaimer
            </h1>
            <p className="mt-4 text-lg text-gray-400">Last Updated: October 12, 2025</p>
          </div>

          <div className="mt-16 prose prose-invert lg:prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-500">
            <p className="lead text-gray-300">
              The information provided by SERANEX ("we," "us," or "our") on seranex.org (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>

            <h2>Limitation of Liability</h2>
            <p>UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>

            <h2>External Links Disclaimer</h2>
            <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE.</p>

            <h2>Professional Disclaimer</h2>
            <p>The Site cannot and does not contain legal or financial advice. The information, particularly in our blog section, is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK.</p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, you can contact us at: <a href="mailto:legal@seranex.org">legal@seranex.org</a>.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
