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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0f1720]/92 shadow-sm backdrop-blur">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between py-4 lg:py-6">
          <Link to="/" className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8a35d]/40 bg-[#d8a35d]/12 font-paragraph text-sm font-semibold uppercase tracking-[0.2em] text-[#f0c27b]">
              WR
            </div>
            <div className="flex flex-col">
              <span className="font-paragraph text-[0.65rem] uppercase tracking-[0.3em] text-[#d8a35d]">
                Custom Painting
              </span>
              <span className="font-heading text-2xl leading-none text-white lg:text-3xl">
                Will Rayners
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-base transition-colors ${
                  isActive(link.path)
                    ? 'text-[#f0c27b] font-semibold'
                    : 'text-white/72 hover:text-white'
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
              className="flex items-center gap-2 font-paragraph text-base text-white/72 transition-colors hover:text-white"
            >
              <Phone className="w-5 h-5" />
              <span>(601) 260-0061</span>
            </a>
            <Link
              to="/contact"
              className="rounded bg-primary px-6 py-3 font-paragraph font-semibold text-primary-foreground transition-colors hover:opacity-90"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-white/10 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-base py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-[#f0c27b] font-semibold'
                      : 'text-white/72 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:6012600061"
                className="flex items-center gap-2 py-2 font-paragraph text-base text-white/72 transition-colors hover:text-white"
              >
                <Phone className="w-5 h-5" />
                <span>(601) 260-0061</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="rounded bg-primary px-6 py-3 text-center font-paragraph font-semibold text-primary-foreground transition-colors hover:opacity-90"
              >
                Get Free Estimate
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
