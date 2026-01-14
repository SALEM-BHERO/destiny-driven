import type { Route } from "./+types/contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export function meta({ }: Route.MetaArgs) {
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
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500 tracking-tight">Contact Destiny Driven Finance</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                Ready to Build Your Wealth for Generations?
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Get in touch with us today and let's discuss how our tailormade financial solutions can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow outline-none"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow outline-none"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow outline-none"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow outline-none"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow outline-none"
                    >
                      <option value="">Select a loan type</option>
                      <option value="business">Business Loans</option>
                      <option value="tobacco">Tobacco Farmers Loans</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow outline-none"
                      placeholder="Tell us about your financial needs and how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-slate-900 text-white py-4 px-6 rounded-lg font-bold hover:bg-slate-800 transition-colors duration-200 shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitMessage && (
                    <div className={`mt-4 p-4 rounded-lg ${submitMessage.includes('Success') ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                {/* Head Office */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
                    Head Office - Bindura
                  </h3>
                  <div className="space-y-4 pl-14">
                    <div className="flex items-start">
                      <div className="flex-grow">
                        <p className="font-bold text-slate-800">Destiny Driven Finance</p>
                        <p className="text-gray-600">767 York Street, Zimta House</p>
                        <p className="text-gray-600">Bindura, Mashonaland Central, Zimbabwe</p>
                      </div>
                    </div>
                    <div className="flex items-center pt-2">
                      <a href="tel:0714635258" className="text-slate-600 hover:text-amber-600 font-medium transition-colors flex items-center">
                        <span className="mr-3 text-lg">📞</span> 0714635258
                      </a>
                    </div>
                    <div className="flex items-center">
                      <a href="mailto:destinydrivenf@gmail.com" className="text-slate-600 hover:text-amber-600 font-medium transition-colors flex items-center">
                        <span className="mr-3 text-lg">📧</span> destinydrivenf@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Business Hours
                  </h3>
                  <div className="space-y-3 text-gray-600 pl-14">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Monday - Friday:</span>
                      <span className="font-medium text-slate-900">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Saturday:</span>
                      <span className="font-medium text-slate-900">8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-amber-600">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-slate-900 rounded-2xl p-8 text-center text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-6">Quick Contact Options</h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/263714635258"
                      className="flex items-center justify-center bg-emerald-600 text-white p-4 rounded-xl hover:bg-emerald-500 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1"
                    >
                      <span className="mr-3 text-xl">💬</span>
                      <span className="font-bold">WhatsApp Us</span>
                    </a>
                    <a
                      href="tel:0714635258"
                      className="flex items-center justify-center bg-amber-500 text-white p-4 rounded-xl hover:bg-amber-400 transition-all duration-200 shadow-lg hover:shadow-amber-500/25 transform hover:-translate-y-1"
                    >
                      <span className="mr-3 text-xl">📞</span>
                      <span className="font-bold">Call Now</span>
                    </a>
                    <a
                      href="mailto:destinydrivenf@gmail.com"
                      className="flex items-center justify-center bg-slate-700 text-white p-4 rounded-xl hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-slate-500/25 transform hover:-translate-y-1"
                    >
                      <span className="mr-3 text-xl">📧</span>
                      <span className="font-bold">Email Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branch Network */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Branch Network</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We proudly serve clients across Zimbabwe through our strategic branch locations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Harare Branch", status: "Coming Soon" },
                { name: "Bindura Branch", status: "Head Office", isHeadOffice: true },
                { name: "Centenary Branch", status: "Open" },
                { name: "Muzarabani Branch", status: "Open" },
                { name: "Guruve Branch", status: "Open" }
              ].map((branch, index) => (
                <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${branch.isHeadOffice
                    ? 'bg-amber-50 border-amber-200'
                    : 'bg-white border-gray-100'
                  }`}>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{branch.name}</h3>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${branch.status === 'Head Office'
                        ? 'bg-amber-100 text-amber-800'
                        : branch.status === 'Open'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-800'
                      }`}>
                      {branch.status}
                    </span>
                    {branch.isHeadOffice && (
                      <p className="text-sm text-gray-600 mt-4 leading-relaxed">767 York Street, Zimta House</p>
                    )}
                    <div className="mt-6 flex justify-center space-x-4">
                      <span className="text-sm text-gray-500 hover:text-amber-600 cursor-pointer">📞 Call</span>
                      <span className="text-sm text-gray-200">|</span>
                      <span className="text-sm text-gray-500 hover:text-amber-600 cursor-pointer">📍 Map</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Application Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Loan Application Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our streamlined process makes it easy to apply for the financial assistance you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gray-100 -z-10"></div>

              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description: "Call, email, or visit any of our branches.",
                  icon: "📞"
                },
                {
                  step: "2",
                  title: "Documentation",
                  description: "Submit required documents.",
                  icon: "📋"
                },
                {
                  step: "3",
                  title: "Assessment",
                  description: "We review your application quickly.",
                  icon: "🔍"
                },
                {
                  step: "4",
                  title: "Disbursement",
                  description: "Funds are sent to your account.",
                  icon: "💰"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8 inline-block">
                    <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:border-amber-100 group-hover:bg-amber-50 transition-all duration-300">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed px-4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directions */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Finding Our Head Office</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Easy directions to visit our Zimta House HQ in Bindura.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <span className="mr-3 text-2xl">🚗</span>
                  From Harare
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Take the Bindura Road (A1) north for approximately 88km. In Bindura town, turn onto York Street.
                  Zimta House is located at number 767.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <span className="mr-3 text-2xl">🛣️</span>
                  From Centenary
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Take the main road south to Bindura. Upon entering town, navigate to York Street.
                  Look for Zimta House at 767 York Street.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <span className="mr-3 text-2xl">🚌</span>
                  Public Transport
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Regular buses and combis operate between Harare and Bindura. Zimta House is walking distance
                  from the main bus terminus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] opacity-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-amber-500">Start Your Financial Journey Today</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join #TeamDestiny and take the first step towards building wealth for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:0714635258"
                className="bg-amber-500 text-white px-10 py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors duration-200 shadow-lg shadow-amber-500/20"
              >
                Call Now: 0714635258
              </a>
              <a
                href="/services"
                className="border-2 border-emerald-500 text-emerald-400 px-10 py-4 rounded-xl font-bold hover:bg-emerald-500 hover:text-white transition-all duration-200"
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