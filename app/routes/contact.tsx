import type { Route } from "./+types/contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Destiny Driven Finance" },
    { name: "description", content: "Get in touch with Destiny Driven Finance. Visit our offices in Bindura or contact us for financial solutions across Zimbabwe." },
  ];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage('Message sent successfully! We will get back to you soon.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          loanType: '',
          message: ''
        });
      } else {
        setSubmitMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">Contact Destiny Driven Finance</h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                Ready to Build Your Wealth for Generations?
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get in touch with us today and let's discuss how our tailor-made financial solutions can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Type of Interest
                    </label>
                    <select
                      id="loanType"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a loan type</option>
                      <option value="business">Business Loans</option>
                      <option value="salary">Salary Based Loans</option>
                      <option value="asset">Asset Finance Loans</option>
                      <option value="agric">Agric-Loans</option>
                      <option value="order">Order Loans</option>
                      <option value="school">School Fees Loans</option>
                      <option value="funeral">Funeral Cash Plan</option>
                      <option value="advisory">Financial Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your financial needs and how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {submitMessage && (
                    <div className={`mt-4 p-4 rounded-lg ${submitMessage.includes('Success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                {/* Head Office */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
                    Head Office - Bindura
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-gray-400 mr-3">📍</span>
                      <div>
                        <p className="font-semibold text-slate-800">Destiny Driven Finance</p>
                        <p className="text-gray-600">767 York Street, Zimta House</p>
                        <p className="text-gray-600">Bindura, Mashonaland Central, Zimbabwe</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-3">📞</span>
                      <a href="tel:0714635258" className="text-orange-500 hover:text-orange-600 font-medium">
                        0714635258
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-3">📧</span>
                      <a href="mailto:destinydrivenf@gmail.com" className="text-orange-500 hover:text-orange-600 font-medium">
                        destinydrivenf@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Contact Options</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/263714635258" 
                      className="flex items-center bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
                    >
                      <span className="mr-3">💬</span>
                      <span className="font-medium">WhatsApp: 0714635258</span>
                    </a>
                    <a 
                      href="tel:0714635258" 
                      className="flex items-center bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                    >
                      <span className="mr-3">📞</span>
                      <span className="font-medium">Call Now: 0714635258</span>
                    </a>
                    <a 
                      href="mailto:destinydrivenf@gmail.com" 
                      className="flex items-center bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <span className="mr-3">📧</span>
                      <span className="font-medium">Email Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branch Network */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Branch Network</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We proudly serve clients across Zimbabwe through our strategic branch locations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Harare Branch", status: "Coming Soon" },
                { name: "Bindura Branch", status: "Head Office", isHeadOffice: true },
                { name: "Centenary Branch", status: "Open" },
                { name: "Muzarabani Branch", status: "Open" },
                { name: "Guruve Branch", status: "Open" }
              ].map((branch, index) => (
                <div key={index} className={`p-6 rounded-lg border-2 ${
                  branch.isHeadOffice 
                    ? 'bg-orange-50 border-orange-200' 
                    : 'bg-white border-gray-200'
                }`}>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{branch.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      branch.status === 'Head Office' 
                        ? 'bg-orange-100 text-orange-800' 
                        : branch.status === 'Open'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-slate-100 text-slate-800'
                    }`}>
                      {branch.status}
                    </span>
                    {branch.isHeadOffice && (
                      <p className="text-sm text-gray-600 mt-2">767 York Street, Zimta House</p>
                    )}
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">📞 0714635258</p>
                      <p className="text-sm text-gray-600">📧 destinydrivenf@gmail.com</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Application Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Loan Application Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined process makes it easy to apply for the financial assistance you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description: "Call, email, or visit any of our branches to discuss your financial needs.",
                  icon: "📞"
                },
                {
                  step: "2", 
                  title: "Documentation",
                  description: "Submit required documents based on your loan type.",
                  icon: "📋"
                },
                {
                  step: "3",
                  title: "Assessment",
                  description: "Our team reviews your application and conducts necessary assessments.",
                  icon: "🔍"
                },
                {
                  step: "4",
                  title: "Approval & Disbursement", 
                  description: "Once approved, funds are disbursed quickly to your account.",
                  icon: "💰"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Office Directions - Head Office</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Easy directions to find our head office in Bindura.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <span className="mr-2">🚗</span>
                  From Harare
                </h3>
                <p className="text-gray-600">
                  Take the Bindura Road (A1) north for approximately 88km. In Bindura town, turn onto York Street. 
                  Zimta House is located at number 767.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <span className="mr-2">🛣️</span>
                  From Centenary
                </h3>
                <p className="text-gray-600">
                  Take the main road south to Bindura. Upon entering town, navigate to York Street. 
                  Look for Zimta House at 767 York Street.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <span className="mr-2">🚌</span>
                  Public Transport
                </h3>
                <p className="text-gray-600">
                  Regular buses and combis operate between Harare and Bindura. Zimta House is walking distance 
                  from the main bus terminus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">Start Your Financial Journey Today</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join #TeamDestiny and take the first step towards building wealth for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0714635258" 
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Call Now: 0714635258
              </a>
              <a 
                href="/services" 
                className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors duration-200"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}