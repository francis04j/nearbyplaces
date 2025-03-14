import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code, Server, Database, Globe, Smartphone, Laptop, Gamepad2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const IntegrationPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('javascript');

  const handlePlaygroundClick = () => {
    if (currentUser) {
      navigate('/playground');
    } else {
      navigate('/signup', { state: { from: '/playground' } });
    }
  };

  const codeSnippets = {
    javascript: `// Install the CloseBy SDK
// npm install closeby-sdk

import { CloseBy } from 'closeby-sdk';

// Initialize with your API key
const closeby = new CloseBy('YOUR_API_KEY');

// Get nearby points of interest
async function getNearbyPlaces() {
  try {
    const places = await closeby.nearby({
      latitude: 37.7749,
      longitude: -122.4194,
      radius: 1000,
      categories: ['restaurant', 'cafe']
    });
    
    console.log('Nearby places:', places);
  } catch (error) {
    console.error('Error fetching nearby places:', error);
  }
}

getNearbyPlaces();`,

    python: `# Install the CloseBy SDK
# pip install closeby-sdk

from closeby import CloseBy

# Initialize with your API key
closeby = CloseBy('YOUR_API_KEY')

# Get nearby points of interest
def get_nearby_places():
    try:
        places = closeby.nearby(
            latitude=37.7749,
            longitude=-122.4194,
            radius=1000,
            categories=['restaurant', 'cafe']
        )
        
        print('Nearby places:', places)
    except Exception as e:
        print('Error fetching nearby places:', e)

get_nearby_places()`,

    java: `// Add the CloseBy SDK to your project
// Maven: com.closeby:closeby-sdk:1.0.0

import com.closeby.CloseBy;
import com.closeby.models.NearbyRequest;
import com.closeby.models.Place;
import java.util.Arrays;
import java.util.List;

public class NearbyExample {
    public static void main(String[] args) {
        // Initialize with your API key
        CloseBy closeby = new CloseBy("YOUR_API_KEY");
        
        // Get nearby points of interest
        try {
            NearbyRequest request = new NearbyRequest.Builder()
                .latitude(37.7749)
                .longitude(-122.4194)
                .radius(1000)
                .categories(Arrays.asList("restaurant", "cafe"))
                .build();
                
            List<Place> places = closeby.nearby(request);
            System.out.println("Nearby places: " + places);
        } catch (Exception e) {
            System.err.println("Error fetching nearby places: " + e.getMessage());
        }
    }
}`,

    csharp: `// Install the CloseBy SDK
// Install-Package CloseBy.SDK

using CloseBy;
using CloseBy.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        // Initialize with your API key
        var closeby = new CloseByClient("YOUR_API_KEY");
        
        // Get nearby points of interest
        try
        {
            var places = await closeby.NearbyAsync(new NearbyRequest
            {
                Latitude = 37.7749,
                Longitude = -122.4194,
                Radius = 1000,
                Categories = new List<string> { "restaurant", "cafe" }
            });
            
            Console.WriteLine("Nearby places: " + string.Join(", ", places));
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error fetching nearby places: " + ex.Message);
        }
    }
}`
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Integrate CloseBy Into Your Application</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our flexible APIs and SDKs make it easy to add powerful location services to any application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handlePlaygroundClick}
              className="bg-indigo-500 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-600 transition flex items-center gap-2"
            >
              <Gamepad2 className="h-5 w-5" />
              Try Playground
            </button>
            <a href="#sdks" className="bg-white text-indigo-900 px-6 py-3 rounded-md font-medium hover:bg-indigo-100 transition">
              Explore SDKs
            </a>
            <a href="#api-docs" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition">
              API Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Integration Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Integration, Powerful Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CloseBy offers multiple integration options to fit your development workflow and technology stack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <Code className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">RESTful APIs</h3>
              <p className="text-gray-600 mb-4">
                Our comprehensive REST APIs provide access to all CloseBy services with consistent, well-documented endpoints.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>JSON-based request/response format</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Secure authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Rate limiting with clear headers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <Server className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Native SDKs</h3>
              <p className="text-gray-600 mb-4">
                Our SDKs provide native integration for popular programming languages and platforms, simplifying development.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>JavaScript/TypeScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Python, Java, C#, Ruby</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>iOS and Android</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                <Database className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Webhooks</h3>
              <p className="text-gray-600 mb-4">
                Receive real-time notifications for location events with our configurable webhook system.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Custom event triggers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Secure payload delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Retry mechanisms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section id="sdks" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SDK Integration Examples</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with our SDKs. Here's how to implement a simple nearby search in different languages.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="flex overflow-x-auto border-b">
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'javascript' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
                onClick={() => setActiveTab('javascript')}
              >
                JavaScript
              </button>
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'python' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
                onClick={() => setActiveTab('python')}
              >
                Python
              </button>
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'java' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
                onClick={() => setActiveTab('java')}
              >
                Java
              </button>
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'csharp' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
                onClick={() => setActiveTab('csharp')}
              >
                C#
              </button>
            </div>
            <div className="p-6 bg-gray-900 text-white overflow-x-auto">
              <pre className="text-sm">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold">Web Integration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Integrate CloseBy into your web applications using our JavaScript SDK or REST APIs.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                Learn more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Smartphone className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold">Mobile Integration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Add location services to your iOS and Android apps with our native mobile SDKs.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                Learn more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Laptop className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold">Server Integration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Implement CloseBy on your backend services using our server-side SDKs and APIs.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section id="api-docs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive API Documentation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our detailed API documentation provides everything you need to integrate CloseBy into your applications.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Interactive API Explorer</h4>
                    <p className="text-gray-600">Test API endpoints directly from your browser with our interactive console.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Code Samples</h4>
                    <p className="text-gray-600">Ready-to-use code examples in multiple programming languages.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">API Reference</h4>
                    <p className="text-gray-600">Detailed documentation for all endpoints, parameters, and response formats.</p>
                  </div>
                </li>
              </ul>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View Documentation
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="API Documentation" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Support */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you successfully integrate CloseBy into your applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Developer Community</h3>
              <p className="text-gray-600 mb-6">
                Join our active developer community to ask questions, share ideas, and get help from other developers.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                Join Community →
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
              <p className="text-gray-600 mb-6">
                Our technical support team is available to help you with any integration challenges you may face.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                Contact Support →
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Integration Consulting</h3>
              <p className="text-gray-600 mb-6">
                Need expert help? Our integration specialists can provide personalized guidance for your project.
              </p>
              <Link to="/demo" className="text-indigo-600 font-medium hover:text-indigo-800">
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to integrate CloseBy into your application?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get started today with our comprehensive SDKs and APIs, or talk to our team about your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="bg-white text-indigo-900 px-6 py-3 rounded-md font-medium text-center hover:bg-indigo-100 transition">
                Get API Key
              </a>
              <Link to="/demo" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white/10 transition">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationPage;