import Head from 'next/head';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Understand how SERANEX uses cookies to provide and improve our website and services.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <div className="w-full pt-24 sm:pt-32 pb-16">
        <main className="max-w-4xl mx-auto px-6">
          <div className="text-center animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Cookie Policy
            </h1>
            <p className="mt-4 text-lg text-gray-400">Last Updated: October 12, 2025</p>
          </div>

          <div className="mt-16 prose prose-invert lg:prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-500">
            <p className="lead text-gray-300">
              This Cookie Policy explains what cookies are and how SERANEX ("we", "us", or "our") uses them on our website, seranex.org (the "Service"). We encourage you to read this policy in full so that you can understand what information we collect using cookies and how that information is used.
            </p>

            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies help us to improve your experience on our website and to ensure that the Service functions as you expect it to.</p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies for several reasons, detailed below:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as logging in or filling in forms. Our authentication provider, Clerk, uses essential cookies to manage your login session securely.</li>
              <li><strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. We may use services like Vercel Analytics or Google Analytics for this purpose.</li>
            </ul>

            <h2>Your Choices Regarding Cookies</h2>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
            </p>

            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, you can contact us at: <a href="mailto:privacy@seranex.org">privacy@seranex.org</a>.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
