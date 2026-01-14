import type { Route } from "./+types/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Destiny Driven Finance - Building Wealth For Generations" },
    { name: "description", content: "Zimbabwe's trusted financial partner specializing in loans and financial advisory services. Building sustainable wealth for generations." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-400">
                Destiny Driven Finance
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-6">
                Building Wealth For Generations
              </h2>
              <p className="text-xl text-gray-100 mb-8 max-w-4xl mx-auto">
                Zimbabwe's trusted financial partner specializing in loans and financial advisory services. 
                We drive individuals into sustainable wealth for generations through unique tailor-made financial solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
                >
                  Apply for a Loan
                </Link>
                <a 
                  href="tel:0714635258" 
                  className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-800 transition-colors duration-200"
                >
                  Call: 0714635258
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Loan Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Loan Products</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financial solutions tailored to meet your unique needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Business Loans */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-orange-400">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Business Loans</h3>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Fuel your business growth with flexible financing options.
                </p>
                <Link 
                  to="/services" 
                  className="block w-full bg-slate-800 text-white text-center py-2 rounded-lg hover:bg-slate-900 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>

              {/* Salary Based Loans */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-green-500">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Salary Based Loans</h3>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Quick loans based on your monthly salary.
                </p>
                <Link 
                  to="/services" 
                  className="block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>

              {/* Asset Finance Loans */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-orange-500">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Asset Finance</h3>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Acquire assets with specialized financing solutions.
                </p>
                <Link 
                  to="/services" 
                  className="block w-full bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>

              {/* Agric-Loans */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-green-500">🌾</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Agric-Loans</h3>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Supporting Zimbabwe's farmers with agricultural financing.
                </p>
                <Link 
                  to="/services" 
                  className="block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>

              {/* School Fees Loans */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-orange-500">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">School Fees Loans</h3>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Invest in education with dedicated financing.
                </p>
                <Link 
                  to="/services" 
                  className="block w-full bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>

              {/* Financial Advisory */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-green-500">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Financial Advisory</h3>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Expert guidance for building sustainable wealth.
                </p>
                <Link 
                  to="/services" 
                  className="block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Destiny Driven Finance?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your trusted financial partner in Zimbabwe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Quick Processing</h3>
                <p className="text-gray-600">Fast loan approvals and disbursements</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Competitive Rates</h3>
                <p className="text-gray-600">Fair and transparent pricing</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Local Understanding</h3>
                <p className="text-gray-600">Deep knowledge of Zimbabwe's market</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Destiny */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 text-orange-400">#TeamDestiny</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients building their financial future with Zimbabwe's most trusted financial partner.
            </p>
            <div className="inline-block bg-green-500 text-slate-800 px-8 py-3 rounded-full font-semibold text-lg">
              Building Wealth For Generations
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:0714635258" 
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
              >
                📞 Call: 0714635258
              </a>
              <Link 
                to="/contact" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Apply Now
              </Link>
            </div>
            <p className="text-gray-500">
              📍 767 York Street, Zimta House, Bindura
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
