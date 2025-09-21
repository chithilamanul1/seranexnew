import React from 'react';
import { Button } from "./ui/button";
import { ArrowLeft, FileText, Scale, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
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
              <Scale className="w-6 h-6 text-white" />
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Legal terms and conditions for using our services
            </p>
            <p className="text-gray-400">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-purple-400 mr-3" />
                Agreement to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using SERANEX services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                SERANEX provides digital agency services including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Website design and development</li>
                <li>Mobile application development</li>
                <li>Graphic design services</li>
                <li>Digital marketing campaigns</li>
                <li>E-commerce solutions</li>
                <li>Cloud services and hosting</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-yellow-400 mr-3" />
                User Responsibilities
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Client Obligations</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Provide accurate information and project requirements</li>
                    <li>Timely feedback and approval of deliverables</li>
                    <li>Payment according to agreed terms</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Prohibited Activities</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Misusing our services for illegal purposes</li>
                    <li>Attempting to harm or disrupt our systems</li>
                    <li>Violating intellectual property rights</li>
                    <li>Sharing login credentials with unauthorized parties</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Payment schedules are defined in individual project agreements</li>
                <li>Late payments may result in project suspension</li>
                <li>Refunds are subject to our refund policy</li>
                <li>All prices are in USD unless otherwise specified</li>
                <li>Additional charges may apply for scope changes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Upon full payment, clients receive ownership of custom-developed materials. SERANEX retains rights to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>General methodologies and know-how</li>
                <li>Pre-existing intellectual property</li>
                <li>Third-party tools and frameworks</li>
                <li>Portfolio usage rights for completed projects</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <div className="bg-yellow-900/20 border border-yellow-600/50 p-4 rounded-lg mb-4">
                <p className="text-yellow-200 text-sm">
                  <strong>Important:</strong> Please read this section carefully as it limits our liability.
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                SERANEX shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our maximum liability is limited to the amount paid for the specific service.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We acknowledge that digital marketing results can be affected by factors beyond our control, including but not limited to platform algorithm changes, market conditions, and external competition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
              <p className="text-gray-300 leading-relaxed">
                While we strive for 99.9% uptime, we do not guarantee uninterrupted service availability. Scheduled maintenance will be communicated in advance when possible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Either party may terminate services with appropriate notice as defined in individual agreements. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Outstanding payments become due immediately</li>
                <li>Access to our systems will be revoked</li>
                <li>Completed deliverables remain client property (if paid)</li>
                <li>Confidentiality obligations continue</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms are governed by the laws of Sri Lanka. Any disputes will be resolved through binding arbitration or in the courts of Sri Lanka.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-black/40 p-4 rounded-lg">
                <p className="text-white">Email: seranexdigital@gmail.com</p>
                <p className="text-white">WhatsApp: 0728382638</p>
                <p className="text-white">Location: Sri Lanka</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Significant changes will be communicated to active clients. Continued use of our services constitutes acceptance of updated terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;