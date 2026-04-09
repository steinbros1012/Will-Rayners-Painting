import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white">
      {/* Gold gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent" />

      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 py-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div>
            <p className="font-paragraph text-[0.6rem] uppercase tracking-[0.35em] text-accent-gold font-semibold mb-1">
              Custom Painting
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-white leading-none">
              Will Rayners
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-accent-gold text-foreground font-paragraph font-semibold px-7 py-3 rounded-full hover:bg-accent-gold/90 hover:shadow-[0_4px_20px_rgba(240,180,41,0.35)] transition-all duration-300"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[100rem] mx-auto px-6 lg:px-16 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-paragraph text-sm text-white/60 leading-relaxed">
            Interior and exterior painting, sheet rock repair, pressure washing, cabinets, and detail work for homeowners across Flowood, Pearl, Gluckstadt, Brandon, Ridgeland, Madison, Crystal Springs, Jackson, and nearby communities.
          </p>
        </div>

        <div>
          <h4 className="font-paragraph text-xs uppercase tracking-widest text-accent-gold font-semibold mb-5">
            Pages
          </h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: '/services', label: 'Services' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/reviews', label: 'Reviews' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-paragraph text-sm text-white/60 hover:text-accent-gold transition-colors duration-200 w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-paragraph text-xs uppercase tracking-widest text-accent-gold font-semibold mb-5">
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href="tel:6012600061"
              className="flex items-center gap-3 font-paragraph text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              (601) 260-0061
            </a>
            <div className="flex items-start gap-3 font-paragraph text-sm text-white/60">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                116 Stockton Dr
                <br />
                Flowood, MS 39232
              </span>
            </div>
            <p className="font-paragraph text-sm text-white/60">
              Serving Flowood, Pearl, Gluckstadt, Brandon, Ridgeland, Madison, Crystal Springs, Jackson & surrounding communities.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 py-5">
          <p className="font-paragraph text-xs text-white/40">
            © {new Date().getFullYear()} Will Rayners Custom Painting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
