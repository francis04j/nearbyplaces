import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

const DemoPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phoneNumber: '',
    companySize: '',
    useCase: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Book a Personalized Demo</h1>
              <p className="text-xl mb-8">
                See how CloseBy can transform your business with powerful location data and analytics. Our team will walk you through our platform and answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 mr-3 flex-shrink-0" />
                  <p>30-minute personalized demo with our product specialists</p>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-3 flex-shrink-0" />
                  <p>Flexible scheduling to fit your calendar</p>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 mr-3 flex-shrink-0" />
                  <p>Bring your team members for a collaborative session</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Demo session" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Your Demo</h2>
                  <p className="text-xl text-gray-600">
                    Fill out the form below and our team will contact you to schedule your personalized demo.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="">Select...</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Use Case *
                      </label>
                      <select
                        id="useCase"
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select...</option>
                        <option value="retail">Retail Analytics</option>
                        <option value="logistics">Logistics & Delivery</option>
                        <option value="marketing">Location-based Marketing</option>
                        <option value="realestate">Real Estate</option>
                        <option value="smartcity">Smart City Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Tell us about your specific needs or questions..."
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-start">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          required
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                        />
                        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                          I agree to CloseBy's <a href="#" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</a> and consent to being contacted about CloseBy products and services.
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 transition"
                      >
                        Request Demo
                      </button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Your demo request has been submitted successfully. One of our product specialists will contact you shortly to schedule your personalized demo.
                </p>
                <p className="text-gray-600 mb-8">
                  In the meantime, you can explore our documentation and resources to learn more about CloseBy.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium text-center hover:bg-indigo-700 transition">
                    Explore Documentation
                  </a>
                  <a href="#" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium text-center hover:bg-gray-300 transition">
                    Return to Home
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our demo process? Find answers to common questions below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens after I request a demo?</h3>
              <p className="text-gray-600">
                After submitting your request, one of our product specialists will contact you within 1 business day to schedule a time that works for you and understand your specific needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How long is the demo session?</h3>
              <p className="text-gray-600">
                Our standard demo sessions are 30 minutes, but we can adjust based on your needs and questions. We want to ensure you get all the information you need.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I invite my team members to the demo?</h3>
              <p className="text-gray-600">
                Absolutely! We encourage you to invite relevant team members to the demo session. Just let us know in advance so we can prepare accordingly.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Is there any cost for the demo?</h3>
              <p className="text-gray-600">
                No, our demo sessions are completely free of charge. We want to show you how CloseBy can benefit your business without any obligation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Will the demo be customized to my industry?</h3>
              <p className="text-gray-600">
                Yes, we tailor each demo to your industry and specific use cases. That's why we ask for information about your company and needs in the request form.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What if I need to reschedule?</h3>
              <p className="text-gray-600">
                No problem! You can reschedule your demo by replying to your confirmation email or contacting your assigned product specialist directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with CloseBy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-bold text-xl">R</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <p className="text-gray-600 text-sm">CTO, RetailPlus</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The demo session was incredibly valuable. The CloseBy team took the time to understand our specific challenges and showed us exactly how their platform could help. We implemented their solution within weeks and saw immediate results."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-bold text-xl">S</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Williams</h4>
                  <p className="text-gray-600 text-sm">Marketing Director, Urban Logistics</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I was impressed by how well the CloseBy team understood our industry. The demo was tailored to our specific use cases, and they answered all our technical questions. Their location data has been a game-changer for our delivery optimization."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-bold text-xl">M</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">CEO, TechInnovate</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "After seeing the CloseBy demo, we knew we had found the right partner for our location intelligence needs. Their platform is powerful yet intuitive, and their team has been incredibly supportive throughout our implementation journey."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;