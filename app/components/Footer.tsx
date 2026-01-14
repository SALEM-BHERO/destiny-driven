import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo image */}
              <div className="relative">
                <img 
                  src="/images/logo.jpg" 
                  alt="Destiny Driven Finance Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-400">Destiny Driven Finance</h3>
                <p className="text-green-400 text-sm font-medium">Building Wealth For Generations</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Zimbabwe's trusted financial partner specializing in loans and financial advisory services. 
              Building sustainable wealth for generations.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <span className="font-semibold">#TeamDestiny</span>
              <span className="text-gray-400">-</span>
              <span className="text-gray-300">Join thousands building their financial future</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>💼 Business Loans</li>
              <li>💰 Salary Based Loans</li>
              <li>🏠 Asset Finance</li>
              <li>🌾 Agric-Loans</li>
              <li>🎓 School Fees Loans</li>
              <li>📊 Financial Advisory</li>
            </ul>
          </div>
        </div>

        {/* Contact & Location Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Head Office */}
            <div>
              <h5 className="font-semibold mb-2 text-orange-400">Head Office</h5>
              <p className="text-gray-300 text-sm">
                767 York Street, Zimta House<br />
                Bindura, Mashonaland Central<br />
                Zimbabwe
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-semibold mb-2 text-orange-400">Contact Info</h5>
              <div className="text-gray-300 text-sm space-y-1">
                <p>📞 <a href="tel:0714635258" className="hover:text-orange-400">0714635258</a></p>
                <p>📧 <a href="mailto:destinydrivenf@gmail.com" className="hover:text-orange-400">destinydrivenf@gmail.com</a></p>
                <p>💬 <a href="https://wa.me/263714635258" className="hover:text-orange-400">WhatsApp: 0714635258</a></p>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h5 className="font-semibold mb-2 text-orange-400">Business Hours</h5>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h5 className="font-semibold mb-4 text-orange-400">Our Branch Network</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-gray-300 text-sm">
            <div>📍 Harare Branch</div>
            <div>📍 Bindura Branch (Head Office)</div>
            <div>📍 Centenary Branch</div>
            <div>📍 Muzarabani Branch</div>
            <div>📍 Guruve Branch</div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 Destiny Driven Finance. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              All loans are subject to approval. Terms and conditions apply.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}