import type { Route } from "./+types/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Destiny Driven Finance - Building Wealth For Generations" },
    { name: "description", content: "Zimbabwe's trusted financial partner specializing in loans and financial advisory services. Building sustainable wealth for generations." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-slate-800 text-white py-24 overflow-hidden">
          {/* Background Gradient/Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-green-900 opacity-50 z-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
                Destiny Driven <span className="text-orange-500">Finance</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-green-400 mb-8">
                Building Wealth For Generations
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Zimbabwe's trusted financial partner specializing in loans and financial advisory services.
                We drive individuals into sustainable wealth for generations through unique tailor-made financial solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/contact"
                  className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1"
                >
                  Apply for a Loan
                </Link>
                <a
                  href="tel:0714635258"
                  className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-xl font-bold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Call: 0714635258
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Loan Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Loan Products</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financial solutions tailored to meet your unique needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Business Loans */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Business Loans</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fuel your business growth with flexible financing options designed for entrepreneurs.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Salary Based Loans */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Salary Based Loans</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quick, hassle-free loans based on your monthly salary to cover immediate needs.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Asset Finance Loans */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Asset Finance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Acquire vehicles, equipment, or property with our specialized asset financing solutions.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Tobacco Farmers Loans - Featured */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100 group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  100% Trusted
                </div>
                <div className="mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Tobacco Farmers Loans</h3>
                  <p className="text-green-600 font-medium mb-2 text-sm">Innovative Solutions For Modern Farming</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Crop cultivation loans, equipment purchase, and funeral cash plans optimized for your farm's potential.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* School Fees Loans */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">School Fees Loans</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Invest in your children's future with our dedicated school fees assistance packages.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Financial Advisory */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Financial Advisory</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expert guidance and strategic planning to help you build and protect sustainable wealth.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Destiny Driven Finance?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your trusted financial partner in Zimbabwe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">Tailored Financial Services</h3>
                <p className="text-gray-600 text-sm">Solutions designed specifically for your unique needs.</p>
              </div>

              <div className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">Quick Turnaround</h3>
                <p className="text-gray-600 text-sm">Effective and fast processing to get you funded sooner.</p>
              </div>

              <div className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">Expert Advice</h3>
                <p className="text-gray-600 text-sm">Professional support to guide your financial decisions.</p>
              </div>

              <div className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 011 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">Affordable Pricing</h3>
                <p className="text-gray-600 text-sm">Transparent and competitive rates you can trust.</p>
              </div>
            </div>


          </div>
        </section>

        {/* Team Destiny */}
        <section className="py-24 bg-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-green-900 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">#TeamDestiny</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients building their financial future with Zimbabwe's most trusted financial partner.
            </p>
            <div className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg">
              Building Wealth For Generations
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your financial needs and take the first step towards your financial destiny.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
              <a
                href="tel:0714635258"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call: 0714635258
              </a>
              <Link
                to="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all duration-300 shadow-lg"
              >
                Apply Now
              </Link>
            </div>
            <div className="flex items-center justify-center text-gray-500">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>767 York Street, Zimta House, Bindura</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
