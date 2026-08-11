import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { NavItem } from '../../types/navigation';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-xl tracking-wider shadow-sm group-hover:bg-slate-800 transition-colors">
              K
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Kuenrix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-500 font-medium hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Primary Action */}
          <div className="hidden md:flex items-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all group"
            >
              <span>Explore Products</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 bg-white">
            <nav className="flex flex-col space-y-3 pb-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-base transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-slate-900 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="pt-2 border-t border-slate-100">
              <Link
                to="/products"
                className="w-full flex items-center justify-center px-5 py-3 rounded-full bg-slate-900 text-white text-base font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
              >
                <span>Explore Products</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
