import React from 'react';
import { Shield, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
            <p className="mt-4 text-lg text-gray-600">
              Please read these terms carefully before using our services
            </p>
          </div>

          {/* Pricing Information */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-indigo-600" />
                Pricing and Charges
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">API Usage Charges</p>
                    <p className="text-gray-600 mt-1">
                      Users will be charged £0.059 per record and £0.099 per API call when using the playground's search by address functionality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">Registration Fee</p>
                    <p className="text-gray-600 mt-1">
                      A one-time fee of £1.00 will be charged for account registration and verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Rules */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-indigo-600" />
                Usage Rules and Restrictions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Permitted Use</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Use of the API for integration into your applications and services</li>
                    <li>Caching of results for up to 24 hours</li>
                    <li>Display of results on web, mobile, and desktop applications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Prohibited Use</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Redistributing raw data or creating derivative databases</li>
                    <li>Scraping, crawling, or using automated means to access the service</li>
                    <li>Reverse engineering the API or attempting to extract source code</li>
                    <li>Using the service for spam or malicious purposes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Rate Limits</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>100 requests per second per user</li>
                    <li>100,000 requests per day per user</li>
                    <li>Additional quota can be purchased for enterprise users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Important Notes</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>All charges are in British Pounds (GBP)</li>
                    <li>Charges are calculated and billed monthly</li>
                    <li>You are responsible for all charges incurred under your account</li>
                    <li>We reserve the right to modify pricing with 30 days notice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Updates to Terms */}
          <div className="text-sm text-gray-600">
            <p>Last updated: March 15, 2025</p>
            <p className="mt-2">
              We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;