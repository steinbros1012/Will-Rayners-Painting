import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo / Wordmark */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-paragraph text-[0.6rem] uppercase tracking-[0.35em] text-accent-gold font-semibold">
              Custom Painting
            </span>
            <span className="font-heading text-2xl lg:text-3xl text-primary leading-none group-hover:text-primary/80 transition-colors">
              Will Rayners
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 font-paragraph text-sm transition-colors rounded ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:6012600061"
              className="flex items-center gap-2 font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(601) 260-0061</span>
            </a>
            <Link
              to="/contact"
              className="bg-accent-gold text-foreground font-paragraph font-semibold text-sm px-5 py-2.5 rounded hover:bg-accent-gold/90 transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-primary z-40 lg:hidden">
          <nav className="flex flex-col px-8 pt-10 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-heading text-4xl py-3 border-b border-white/10 transition-colors ${
                  isActive(link.path) ? 'text-accent-gold' : 'text-white hover:text-accent-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:6012600061"
              className="mt-8 flex items-center gap-3 font-paragraph text-base text-white/80"
            >
              <Phone className="w-5 h-5" />
              (601) 260-0061
            </a>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-accent-gold text-foreground font-paragraph font-semibold px-8 py-4 text-center rounded"
            >
              Get Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
