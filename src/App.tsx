import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AccountProvider } from './contexts/AccountContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import IntegrationPage from './pages/IntegrationPage';
import DemoPage from './pages/DemoPage';
import DayCareDataPage from './pages/DayCareDataPage';
import ContactSalesPage from './pages/ContactSalesPage';
import ErrorPage from './pages/ErrorPage';
import SignUpPage from './pages/SignUpPage';
import PlaygroundPage from './pages/PlaygroundPage';
import AccountPage from './pages/AccountPage';
import TermsPage from './pages/TermsPage';

const App = () => {
  return (
    <AuthProvider>
      <AccountProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/integration" element={<IntegrationPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/product/amenities/daycare" element={<DayCareDataPage />} />
                <Route path="/contact-sales" element={<ContactSalesPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route
                  path="/playground"
                  element={
                    <ProtectedRoute>
                      <PlaygroundPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <ProtectedRoute>
                      <AccountPage />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AccountProvider>
    </AuthProvider>
  );
};

export default App;