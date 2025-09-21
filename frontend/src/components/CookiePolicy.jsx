import React from 'react';
import { Button } from "./ui/button";
import { ArrowLeft, Cookie, Settings, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      {/* Header */}
      <header className="relative z-50 px-4 sm:px-6 py-4 backdrop-blur-md bg-black/20 border-b border-gray-800/50">
        <div className="container mx-auto flex items-center justify-between">
          <Button 
            onClick={() => navigate('/')}
            variant="outline" 
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SERANEX</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              How we use cookies and similar technologies
            </p>
            <p className="text-gray-400">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Cookie className="w-6 h-6 text-purple-400 mr-3" />
                What Are Cookies?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We also use similar technologies like web beacons, pixels, and local storage to enhance your browsing experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div className="bg-purple-900/20 border border-purple-600/50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Essential Cookies</h3>
                  <p className="text-gray-300 text-sm mb-2">These cookies are necessary for our website to function properly.</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Session management and security</li>
                    <li>Form submission and user preferences</li>
                    <li>Basic website functionality</li>
                  </ul>
                </div>

                <div className="bg-cyan-900/20 border border-cyan-600/50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300 text-sm mb-2">Help us understand how visitors interact with our website.</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Google Analytics for usage statistics</li>
                    <li>Page performance monitoring</li>
                    <li>User behavior analysis (anonymized)</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-600/50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-300 mb-2">Functional Cookies</h3>
                  <p className="text-gray-300 text-sm mb-2">Enhance your experience by remembering your choices.</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Language and region preferences</li>
                    <li>Theme and display settings</li>
                    <li>Form auto-fill information</li>
                  </ul>
                </div>

                <div className="bg-orange-900/20 border border-orange-600/50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-300 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-300 text-sm mb-2">Used to deliver relevant advertisements and measure their effectiveness.</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Targeted advertising preferences</li>
                    <li>Social media integration</li>
                    <li>Marketing campaign tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may allow selected third parties to place cookies on our website to provide enhanced services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                <li><strong>Social Media Platforms:</strong> Social sharing and integration features</li>
                <li><strong>Marketing Partners:</strong> Advertising and retargeting campaigns</li>
                <li><strong>Customer Support Tools:</strong> Live chat and help desk functionality</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 text-cyan-400 mr-3" />
                Managing Your Cookie Preferences
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Browser Settings</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    You can control cookies through your browser settings:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Block all cookies (may affect website functionality)</li>
                    <li>Delete existing cookies from your device</li>
                    <li>Set preferences for different types of cookies</li>
                    <li>Receive notifications when cookies are set</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Opt-Out Options</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    For specific services, you can opt out directly:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Google Analytics: <span className="text-cyan-400">Google Analytics Opt-out Browser Add-on</span></li>
                    <li>Advertising cookies: <span className="text-cyan-400">Your Online Choices (EU)</span></li>
                    <li>Social media cookies: Adjust privacy settings on respective platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookie Retention</h2>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Session Cookies:</span>
                    <span className="text-white">Deleted when browser closes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Functional Cookies:</span>
                    <span className="text-white">Up to 1 year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Analytics Cookies:</span>
                    <span className="text-white">Up to 2 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Marketing Cookies:</span>
                    <span className="text-white">Up to 1 year</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                Your Privacy Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Under various privacy regulations (GDPR, CCPA, etc.), you have rights regarding cookies:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Right to be informed about cookie usage</li>
                <li>Right to withdraw consent for non-essential cookies</li>
                <li>Right to access data collected through cookies</li>
                <li>Right to request deletion of cookie data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Mobile Applications</h2>
              <p className="text-gray-300 leading-relaxed">
                Our mobile applications may use similar tracking technologies. You can control these through your device settings or app preferences. We will request appropriate permissions before accessing device features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy to reflect changes in technology, legal requirements, or our practices. We will notify users of significant changes through our website or direct communication.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about our use of cookies or this policy, please contact us:
              </p>
              <div className="bg-black/40 p-4 rounded-lg">
                <p className="text-white">Email: seranexdigital@gmail.com</p>
                <p className="text-white">WhatsApp: 0728382638</p>
                <p className="text-white">Location: Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;