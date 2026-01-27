import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo image */}
              <div className="relative">
                <img
                  src="/images/logo.jpg"
                  alt="Destiny Driven Finance Logo"
                  className="h-10 w-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Destiny Driven Finance</h3>
                <p className="text-orange-400 text-sm font-medium">Building Wealth For Generations</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Zimbabwe's trusted financial partner specializing in loans and financial advisory services.
              Building sustainable wealth for generations with integrity and excellence.
            </p>
            <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 inline-block px-4 py-2 rounded-full">
              <span className="font-semibold">#TeamDestiny</span>
              <span className="text-green-400/50">|</span>
              <span className="text-green-300">Join thousands building their financial future</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>Business Loans</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Salary Based Loans</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Asset Finance</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Tobacco Farmers Loans</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>School Fees Loans</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Financial Advisory</li>
            </ul>
          </div>
        </div>

        {/* Contact & Location Info */}
        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Head Office */}
            <div>
              <h5 className="font-bold mb-4 text-white flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                Head Office
              </h5>
              <p className="text-gray-400 text-sm leading-relaxed pl-7">
                767 York Street, Zimta House<br />
                Bindura, Mashonaland Central<br />
                Zimbabwe
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-bold mb-4 text-white flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Contact Info
              </h5>
              <div className="text-gray-400 text-sm space-y-3 pl-7">
                <p className="flex items-center">
                  <span className="w-20 text-gray-500">Phone:</span>
                  <a href="tel:+263786573967" className="hover:text-green-400 transition-colors">0786573967 / 0714635258</a>
                </p>
                <p className="flex items-center">
                  <span className="w-20 text-gray-500">Email:</span>
                  <a href="mailto:destinydrivenf@gmail.com" className="hover:text-green-400 transition-colors">destinydrivenf@gmail.com</a>
                </p>
                <p className="flex items-center">
                  <span className="w-20 text-gray-500">WhatsApp:</span>
                  <a href="https://wa.me/263786573967" className="hover:text-green-400 transition-colors">0786573967</a>
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h5 className="font-bold mb-4 text-white flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Business Hours
              </h5>
              <div className="text-gray-400 text-sm space-y-2 pl-7">
                <div className="flex justify-between max-w-[200px]">
                  <span>Mon - Fri:</span>
                  <span className="text-gray-300">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between max-w-[200px]">
                  <span>Saturday:</span>
                  <span className="text-gray-300">8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between max-w-[200px]">
                  <span>Sunday:</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h5 className="font-bold mb-6 text-white text-center md:text-left">Our Branch Network</h5>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {['Harare', 'Bindura (Head Office)', 'Centenary', 'Muzarabani', 'Guruve', 'Domboshava'].map((branch) => (
              <span key={branch} className="flex items-center bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700 transition-colors border border-gray-700">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {branch}
              </span>
            ))}
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © 2024 Destiny Driven Finance. All Rights Reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              All loans are subject to approval. Terms and conditions apply.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://www.facebook.com/share/1CCTgH9bbQ/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors duration-200" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/destiny-driven-foundation" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}