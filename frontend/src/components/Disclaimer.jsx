import React from 'react';
import { Button } from "./ui/button";
import { ArrowLeft, AlertTriangle, Info, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Disclaimer = () => {
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
              <AlertTriangle className="w-6 h-6 text-white" />
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
              Disclaimer
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Important legal information and limitations
            </p>
            <p className="text-gray-400">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 space-y-8">
            <div className="bg-orange-900/20 border border-orange-600/50 p-4 rounded-lg">
              <h2 className="text-xl font-bold text-orange-200 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Important Notice
              </h2>
              <p className="text-orange-100 text-sm">
                Please read this disclaimer carefully before using our website or services. By accessing this site, you acknowledge and agree to the terms outlined below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Info className="w-6 h-6 text-purple-400 mr-3" />
                General Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The information on this website is provided for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Professional Disclaimer</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Digital Services</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our digital marketing, web development, and design services are provided based on industry best practices and our professional experience. However, we cannot guarantee specific results, rankings, or business outcomes as these depend on numerous external factors beyond our control.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Market Variability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Digital marketing results can vary significantly based on market conditions, competition, algorithm changes by platforms (Google, Facebook, etc.), and other factors outside our direct influence. Past performance does not guarantee future results.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In no event shall SERANEX, its owners, employees, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Use or inability to use our website or services</li>
                <li>Any errors or omissions in content or materials</li>
                <li>Business losses or missed opportunities</li>
                <li>Technical failures or service interruptions</li>
                <li>Actions taken based on information from our website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <ExternalLink className="w-6 h-6 text-yellow-400 mr-3" />
                External Links Disclaimer
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our website may contain links to external websites that are not under our control. We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Content, privacy policies, or practices of external websites</li>
                <li>Accuracy or reliability of information on linked sites</li>
                <li>Any damages or losses from using external websites</li>
                <li>Products or services offered by third-party sites</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Technology Disclaimers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Website Performance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    While we strive for optimal website performance, we cannot guarantee 100% uptime, complete security, or freedom from technical issues. Users access our website at their own risk.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Data Accuracy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Information on our website, including pricing, service descriptions, and availability, may change without notice. We reserve the right to correct errors and update information at any time.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Affiliate Relationships</h2>
              <p className="text-gray-300 leading-relaxed">
                SERANEX may participate in affiliate programs or have business relationships with recommended tools, platforms, or services. We may receive compensation for referrals, but this does not influence our professional recommendations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Jurisdiction</h2>
              <p className="text-gray-300 leading-relaxed">
                This disclaimer is governed by the laws of Sri Lanka. Any disputes arising from the use of this website or our services will be subject to the jurisdiction of Sri Lankan courts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to update this disclaimer at any time without prior notice. Users are encouraged to review this page periodically for any changes. Continued use of our website constitutes acceptance of any modifications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this disclaimer, please contact us:
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

export default Disclaimer;