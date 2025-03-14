import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('Business');

  const plans = [
    {
      name: "Pay as you go",
      title: "Perfect for Small Projects",
      description: "Get started with essential location data for your application",
      monthlyPrice: 29,
      annualPrice: 19,
      features: [
        "Pay-as-you-go with no bounded commitment",
        "Up to 1,000 location queries per month",
        "Basic analytics dashboard",
        "Standard API access",
        "Email support",
        "1 project",
        "7-day data retention"
      ],
      notIncluded: [
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees"
      ]
    },
    {
      name: "Growth",
      title: "Scale with Confidence",
      description: "Advanced features and support for growing businesses",
      monthlyPrice: 199,
      annualPrice: 149,
      popular: false,
      features: [
        "Up to 10,000 location queries per month",
        "Advanced analytics dashboard",
        "Full API access",
        "Priority email & chat support",
        "5 projects",
        "30-day data retention",
        "Tailored for teams looking to scale their operations"
      ],
      notIncluded: [
        "Dedicated account manager",
        "SLA guarantees"
      ]
    },
    {
      name: "Business",
      title: "Customised to deliver value for your business",
      description: "Designed for large teams with extensive operational needs",
      monthlyPrice: 299,
      annualPrice: 249,
      popular: true,
      features: [
        "Up to 10,000 location queries per month",
        "Advanced analytics dashboard",
        "Full API access",
        "Priority email & chat support",
        "5 projects",
        "30-day data retention",
        "Custom integrations"
      ],
      notIncluded: [
        "Dedicated account manager",
        "SLA guarantees"
      ]
    },
    {
      name: "Enterprise",
      title: "Ultimate Power & Control",
      description: "Advanced support and features for critical operations",
      features: [
        "Unlimited location queries",
        "Enterprise analytics suite",
        "Full API access with higher rate limits",
        "24/7 priority support",
        "Unlimited projects",
        "1-year data retention",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "On-premise deployment options"
      ],
      notIncluded: []
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Flexible Pricing for Every Business</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include access to our core location data services.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isAnnual ? 'font-semibold' : ''}`}>Monthly</span>
            <button 
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-indigo-300"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-semibold' : ''}`}>
              Annual <span className="text-indigo-300 text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                onClick={() => setSelectedPlan(plan.name)}
                className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedPlan === plan.name 
                    ? 'ring-2 ring-indigo-600 transform scale-105' 
                    : 'hover:shadow-xl hover:transform hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="bg-indigo-600 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <h4 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2">{plan.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{plan.description}</p>
                  </div>
                  <div className="mb-6 text-center">
                    {plan.monthlyPrice ? (
                      <>
                        <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-600">/month</span>
                        {isAnnual && (
                          <p className="text-sm text-indigo-600 mt-1">Billed annually</p>
                        )}
                      </>
                    ) : (
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">Custom Pricing</span>
                    )}
                  </div>
                  
                  <Link 
                    to={plan.name === "Enterprise" ? "/contact-sales" : "/signup"} 
                    className={`block w-full text-center py-3 rounded-md font-medium mb-6 transition-colors duration-200 ${
                      selectedPlan === plan.name
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start free trial"}
                  </Link>
                  
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-900">Includes:</p>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <>
                        <p className="text-sm font-semibold text-gray-900 mt-6">Not included:</p>
                        {plan.notIncluded.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a custom solution?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We offer tailored enterprise solutions for organizations with specific requirements. Our team will work with you to create a custom package that meets your unique needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                    <span>Custom data retention policies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                    <span>Dedicated infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                    <span>Custom SLAs and support agreements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                    <span>Advanced security and compliance features</span>
                  </li>
                </ul>
                <Link 
                  to="/contact-sales" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Enterprise solutions" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our pricing? Find answers to common questions below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">What counts as a location query?</h3>
              <p className="text-gray-600">
                A location query is any API call that requests location data, such as geocoding, reverse geocoding, or proximity searches. Each API endpoint has its own query count.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Yes, you can change your plan at any time. When upgrading, the new pricing takes effect immediately. When downgrading, the new pricing takes effect at the start of your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens if I exceed my monthly query limit?</h3>
              <p className="text-gray-600">
                If you exceed your monthly query limit, you'll be charged for additional queries at a per-query rate based on your plan. We'll notify you when you reach 80% of your limit.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer a free trial?</h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial of our Professional plan for new customers. No credit card is required to start your trial.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, including Visa, Mastercard, and American Express. Enterprise customers can also pay by invoice.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">
                No, there are no setup fees for our standard plans. Enterprise customers may have custom onboarding fees depending on their specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started with CloseBy?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Choose the plan that's right for you and start leveraging the power of location data today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/demo" className="bg-white text-indigo-900 px-6 py-3 rounded-md font-medium text-center hover:bg-indigo-100 transition">
                Book a Demo
              </Link>
              <Link to="/contact-sales" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white/10 transition">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;