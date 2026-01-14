import type { Route } from "./+types/about";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About Us - Destiny Driven Finance" },
    { name: "description", content: "Learn about Destiny Driven Finance - Your partner in building sustainable wealth for generations in Zimbabwe." },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <svg className="w-64 h-64 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L2 22l10-5 10 5 .001-8.5-5-2.5-5 2.5z" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-500 tracking-tight">About Destiny Driven Finance</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                Your Trusted Partner in Building Sustainable Wealth
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-4">Our History</div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Building Wealth, <br /><span className="text-emerald-600">One Client at a Time</span></h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Located in Bindura, Destiny Driven Finance is a leading provider of financial solutions
                  across Mashonaland Central and beyond. We understand Zimbabwe's unique financial challenges
                  and have crafted our products to meet these specific needs.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">Head Office Address:</h3>
                  <p className="text-slate-600">
                    767 York Street, Zimta House<br />
                    Bindura, Mashonaland Central
                  </p>
                </div>
              </div>
              <div className="bg-slate-900 rounded-2xl p-10 text-center text-white relative shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center opacity-20"></div>
                <div className="w-24 h-24 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3 hover:rotate-0 transition-all">
                  <span className="text-white font-bold text-4xl">D</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Destiny Driven Finance</h3>
                <p className="text-emerald-400 font-bold tracking-wider mb-6">#TeamDestiny</p>
                <p className="text-gray-300 italic text-lg">"Building Wealth For Generations"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-center text-lg leading-relaxed">
                  To be leading players in the building of sustainable wealth for generations.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-emerald-500">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-center text-lg leading-relaxed">
                  To drive individuals into sustainable and predetermined wealth for generations through
                  unique tailor-made financial products and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">What We Stand For</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Our Core Values</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Professionalism */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                  <svg className="w-10 h-10 text-amber-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Professionalism</h3>
                <p className="text-gray-600 leading-relaxed">
                  Highest standards of professional conduct in all business dealings.
                </p>
              </div>

              {/* Integrity */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <svg className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete honesty, transparency, and ethical behavior in everything we do.
                </p>
              </div>

              {/* Innovation */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                  <svg className="w-10 h-10 text-amber-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuously creating unique financial solutions for evolving market needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Motto & Impact */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute left-0 top-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Commitment</h2>
              <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
                <p className="text-amber-500 font-bold text-3xl md:text-4xl mb-6">"Building Wealth For Generations"</p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  This isn't just our tagline; it's our commitment to creating financial solutions that transform
                  lives and build lasting wealth across generations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-emerald-500 mb-2">5+</div>
                <div className="text-gray-400 font-medium">Branch Locations</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-amber-500 mb-2">1k+</div>
                <div className="text-gray-400 font-medium">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-emerald-500 mb-2">8+</div>
                <div className="text-gray-400 font-medium">Financial Products</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-amber-500 mb-2">24/7</div>
                <div className="text-gray-400 font-medium">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-emerald-700 text-white relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-600"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Financial Future?</h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Join #TeamDestiny and thousands of other clients who are building wealth for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-emerald-800 px-10 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors duration-200 shadow-lg"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="border-2 border-emerald-300 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors duration-200"
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