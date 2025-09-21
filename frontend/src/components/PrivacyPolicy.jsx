import React from 'react';
import { Button } from "./ui/button";
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
              <Shield className="w-6 h-6 text-white" />
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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Protecting your privacy and personal information
            </p>
            <p className="text-gray-400">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-purple-400 mr-3" />
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                SERANEX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using our services, you consent to the data practices described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business information and project requirements</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Device and operating system details</li>
                    <li>Usage data and website analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 text-green-400 mr-3" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Providing and improving our digital services</li>
                <li>Communicating with you about projects and updates</li>
                <li>Processing payments and managing accounts</li>
                <li>Analyzing website usage to enhance user experience</li>
                <li>Sending marketing communications (with consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>With service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-black/40 p-4 rounded-lg">
                <p className="text-white">Email: seranexdigital@gmail.com</p>
                <p className="text-white">WhatsApp: 0728382638</p>
                <p className="text-white">Location: Sri Lanka</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on this page with an updated date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;