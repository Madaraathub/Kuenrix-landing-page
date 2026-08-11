import { Link } from 'react-router-dom';
import { Container } from '../common/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 shrink-0 mt-auto">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12">
          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/launchlegal" className="hover:text-white transition-colors">
                  LaunchLegal
                </Link>
              </li>
              <li>
                <Link to="/tiktok-shop-business-os" className="hover:text-white transition-colors">
                  TikTok Shop OS
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="font-bold text-lg text-white">Kuenrix</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-3 text-slate-400 font-medium">
              <span>Version v1.0.0</span>
              <span className="text-slate-700">•</span>
              <span>Last Updated August 2026</span>
            </div>
          </div>
          <p className="uppercase tracking-widest">
            &copy; {currentYear} KUENRIX. ALL RIGHTS RESERVED.
          </p>
        </div>
      </Container>
    </footer>
  );
};
