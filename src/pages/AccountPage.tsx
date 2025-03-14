import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CreditCard, Building2, Mail, Phone, Globe, MapPin, AlertCircle } from 'lucide-react';
import { useAccount } from '../contexts/AccountContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

type TabType = 'business' | 'address' | 'payment';

interface TabButtonProps {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ active, icon, label, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      active
        ? 'bg-indigo-100 text-indigo-700'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

const AccountPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { accountDetails, updateBusinessInfo, updateAddressInfo, updateAccountDetails, updateTermsAgreement } = useAccount();
  const [activeTab, setActiveTab] = useState<TabType>('business');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    businessName: accountDetails.businessInfo.businessName,
    businessType: accountDetails.businessInfo.businessType,
    website: accountDetails.businessInfo.website,
    email: accountDetails.businessInfo.email,
    phone: accountDetails.businessInfo.phone,
    address: accountDetails.addressInfo.address,
    city: accountDetails.addressInfo.city,
    country: accountDetails.addressInfo.country,
    agreeToTerms: accountDetails.agreeToTerms
  });

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const formData = new URLSearchParams();
        formData.append('amount', '100');
        formData.append('currency', 'gbp');

        const response = await fetch('https://api.stripe.com/v1/payment_intents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${import.meta.env.VITE_STRIPE_SECRET_KEY}`
          },
          body: formData.toString()
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || 'Failed to create payment intent');
        }

        const data = await response.json();
        setClientSecret(data.client_secret);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize payment');
      }
    };

    createPaymentIntent();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: checked !== undefined ? checked : value
    }));

    // Update terms agreement in context immediately when checkbox changes
    if (name === 'agreeToTerms' && checked !== undefined) {
      updateTermsAgreement(checked);
    }
  };

  const handleSaveSection = async (section: TabType) => {
    setLoading(true);
    setError(null);

    try {
      // Save section data to context
      if (section === 'business') {
        updateBusinessInfo({
          businessName: formData.businessName,
          businessType: formData.businessType,
          website: formData.website,
          email: formData.email,
          phone: formData.phone,
        });
      } else if (section === 'address') {
        updateAddressInfo({
          address: formData.address,
          city: formData.city,
          country: formData.country,
        });
      }

      // Show success message
      alert(`${section.charAt(0).toUpperCase() + section.slice(1)} information updated successfully!`);
    } catch (err) {
      setError(`Failed to update ${section} information. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    updateAccountDetails({ hasPaymentMethod: true });
    navigate('/playground');
  };

  const handlePaymentError = (errorMessage: string) => {
    setError(errorMessage);
    updateAccountDetails({ hasPaymentMethod: false });
  };

  const handleSaveAndRedirect = () => {
    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms and Conditions before saving');
      return;
    }

    // Save all form data to context
    updateBusinessInfo({
      businessName: formData.businessName,
      businessType: formData.businessType,
      website: formData.website,
      email: formData.email,
      phone: formData.phone,
    });

    updateAddressInfo({
      address: formData.address,
      city: formData.city,
      country: formData.country,
    });

    updateTermsAgreement(formData.agreeToTerms);

    // Always redirect to playground page if terms are agreed
    navigate('/playground');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="p-4 flex space-x-4">
                <TabButton
                  active={activeTab === 'business'}
                  icon={<Building2 className="h-5 w-5" />}
                  label="Business Information"
                  onClick={() => setActiveTab('business')}
                />
                <TabButton
                  active={activeTab === 'address'}
                  icon={<MapPin className="h-5 w-5" />}
                  label="Address"
                  onClick={() => setActiveTab('address')}
                />
                <TabButton
                  active={activeTab === 'payment'}
                  icon={<CreditCard className="h-5 w-5" />}
                  label="Payment"
                  onClick={() => setActiveTab('payment')}
                />
              </div>
            </div>

            <div className="p-6">
              {/* Business Information Tab */}
              {activeTab === 'business' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">Select a type</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="technology">Technology</option>
                        <option value="retail">Retail</option>
                        <option value="finance">Financial Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                        Website
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                          <Globe className="h-4 w-4" />
                        </span>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="block w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Business Email *
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number *
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                          <Phone className="h-4 w-4" />
                        </span>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => handleSaveSection('business')}
                      disabled={loading}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : 'Save Business Information'}
                    </button>
                  </div>
                </div>
              )}

              {/* Address Tab */}
              {activeTab === 'address' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">Select a country</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => handleSaveSection('address')}
                      disabled={loading}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : 'Save Address'}
                    </button>
                  </div>
                </div>
              )}

              {/* Payment Tab */}
              {activeTab === 'payment' && (
                <div className="space-y-6">
                  {clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                      <PaymentForm
                        onSuccess={handlePaymentSuccess}
                        onError={handlePaymentError}
                      />
                    </Elements>
                  )}
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeToTerms"
                      name="agreeToTerms"
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                      I agree to the{' '}
                      <Link to="/terms" className="text-indigo-600 hover:text-indigo-500">
                        Terms and Conditions
                      </Link>
                    </label>
                    <p className="text-gray-500">
                      By checking this box, you agree to our terms of service, including usage fees and data handling policies.
                    </p>
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveAndRedirect}
                    disabled={loading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;