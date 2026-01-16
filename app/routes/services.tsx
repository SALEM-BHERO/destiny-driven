import type { Route } from "./+types/services";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Our Services - Destiny Driven Finance" },
    { name: "description", content: "Comprehensive lending solutions and financial advisory services including business loans, salary-based loans, and more." },
  ];
}

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">Our Financial Products & Services</h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                Comprehensive Lending Solutions and Financial Advisory
              </p>
            </div>
          </div>
        </section>

        {/* Lending Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Lending Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tailored financial solutions designed to meet your specific needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tobacco Farmers Loans - Featured */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-green-500 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  FEATURED
                </div>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-green-600">🌿</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Tobacco Farmers Loans</h3>
                  <p className="text-green-600 font-medium">Innovative Solutions For Modern Farming</p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Crop cultivation loans</li>
                  <li>• Equipment purchase</li>
                  <li>• Funeral cash plan included</li>
                  <li>• Expert agricultural advice</li>
                </ul>
                <a href="/contact" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Apply Now
                </a>
              </div>

              {/* Business Loans */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Business Loans</h3>
                  <p className="text-orange-400 font-medium">Fuel Your Business Growth</p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Working capital financing</li>
                  <li>• Equipment purchase loans</li>
                  <li>• Business expansion funding</li>
                  <li>• Quick approval process</li>
                </ul>
                <a href="/contact" className="block w-full bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                  Apply Now
                </a>
              </div>

              {/* Salary Based Loans */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Salary Based Loans</h3>
                  <p className="text-green-500 font-medium">Personal Financing Made Easy</p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Loans based on monthly salary</li>
                  <li>• No collateral required</li>
                  <li>• Quick processing and approval</li>
                  <li>• Flexible repayment periods</li>
                </ul>
                <a href="/contact" className="block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors duration-200">
                  Apply Now
                </a>
              </div>

              {/* Asset Finance Loans */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Asset Finance Loans</h3>
                  <p className="text-orange-400 font-medium">Acquire Assets with Ease</p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Vehicle financing</li>
                  <li>• Machinery and equipment loans</li>
                  <li>• Property financing</li>
                  <li>• Flexible down payment options</li>
                </ul>
                <a href="/contact" className="block w-full bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                  Apply Now
                </a>
              </div>

              {/* Agric-Loans */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌾</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Agric-Loans</h3>
                  <p className="text-green-500 font-medium">Supporting Zimbabwe's Farmers</p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Seasonal crop financing</li>
                  <li>• Livestock financing</li>
                  <li>• Farm equipment loans</li>
                  <li>• Input financing (seeds, fertilizer)</li>
                </ul>
                <a href="/contact" className="block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors duration-200">
                  Apply Now
                </a>
              </div>

              {/* Order Loans */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📋</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Order Loans</h3>
                  <p className="text-orange-400 font-medium">Bridge Your Business Opportunities</p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Pre-shipment financing</li>
                  <li>• Purchase order financing</li>
                  <li>• Contract financing</li>
                  <li>• Quick turnaround for urgent orders</li>
                </ul>
                <a href="/contact" className="block w-full bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                  Apply Now
                </a>
              </div>

              {/* School Fees Loans */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">School Fees Loans</h3>
                  <p className="text-green-500 font-medium">Invest in Education</p>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Primary and secondary school fees</li>
                  <li>• University and college fees</li>
                  <li>• Boarding fees coverage</li>
                  <li>• Flexible payment terms</li>
                </ul>
                <a href="/contact" className="block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors duration-200">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance & Protection */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Insurance & Protection</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Protecting you and your family when you need it most.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">⚰️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Funeral Cash Plan (FCP)</h3>
                  <p className="text-orange-400 font-medium">Dignity When You Need It Most</p>
                </div>
                <ul className="text-gray-600 space-y-3 mb-8">
                  <li>• Comprehensive funeral cover</li>
                  <li>• Immediate cash payout</li>
                  <li>• Family protection</li>
                  <li>• Affordable premiums</li>
                  <li>• No waiting periods for natural deaths</li>
                  <li>• Additional benefits for families</li>
                </ul>
                <a href="/contact" className="block w-full bg-slate-800 text-white text-center py-3 rounded-lg hover:bg-slate-900 transition-colors duration-200 font-medium">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Advisory Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expert guidance for building sustainable wealth.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-slate-800 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Financial Advisory Services</h3>
                  <p className="text-green-400 font-medium">Expert Guidance for Wealth Building</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <ul className="text-gray-100 space-y-2">
                    <li>• Personal financial planning</li>
                    <li>• Business financial planning</li>
                    <li>• Investment advice</li>
                    <li>• Debt management counseling</li>
                  </ul>
                  <ul className="text-gray-100 space-y-2">
                    <li>• Cash flow management</li>
                    <li>• Retirement planning</li>
                    <li>• Estate planning guidance</li>
                    <li>• Wealth preservation strategies</li>
                  </ul>
                </div>

                <a href="/contact" className="block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Requirements & Processing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* General Requirements */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-4">General Requirements</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Valid national ID</li>
                  <li>• Proof of income</li>
                  <li>• Bank statements</li>
                  <li>• Collateral (for certain loan types)</li>
                  <li>• Character references</li>
                </ul>
              </div>

              {/* Processing Time */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Processing Time</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Salary-based loans: <span className="font-semibold text-green-500">24-48 hours</span></li>
                  <li>• Business loans: <span className="font-semibold text-orange-500">3-7 working days</span></li>
                  <li>• Asset finance: <span className="font-semibold text-green-500">5-10 working days</span></li>
                </ul>
              </div>

              {/* Interest Rates */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Interest Rates</h3>
                <p className="text-gray-600 mb-4">
                  Competitive rates starting from competitive percentages per annum.
                </p>
                <a href="/contact" className="text-orange-500 hover:text-orange-600 font-medium">
                  Contact us for specific rates based on your loan type and profile.
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">Ready to Get Started?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Choose the financial product that's right for you and take the first step towards building wealth for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Apply for a Loan
              </a>
              <a
                href="tel:+263786573967"
                className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors duration-200"
              >
                Call Now: 0786573967 / 0714635258
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}