import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-20 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl text-foreground mb-4">
              Will Rayners Custom Painting
            </h3>
            <p className="font-paragraph text-base text-secondary mb-4">
              Interior, exterior, cabinet, and detail painting for homeowners across Flowood and the Jackson metro.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:6012600061"
                className="flex items-center gap-2 font-paragraph text-base text-secondary hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(601) 260-0061</span>
              </a>
              <div className="flex items-start gap-2 font-paragraph text-base text-secondary">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>116 Stockton Dr<br />Flowood, MS 39232</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <Link
                to="/services"
                className="block font-paragraph text-base text-secondary hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="block font-paragraph text-base text-secondary hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/reviews"
                className="block font-paragraph text-base text-secondary hover:text-primary transition-colors"
              >
                Reviews
              </Link>
              <Link
                to="/about"
                className="block font-paragraph text-base text-secondary hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block font-paragraph text-base text-secondary hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">
              Service Area
            </h4>
            <p className="font-paragraph text-base text-secondary mb-4">
              Proudly serving Flowood, Brandon, Jackson, Pearl, Madison, and nearby communities.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground font-paragraph font-semibold px-6 py-3 rounded transition-colors hover:opacity-90"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="font-paragraph text-sm text-secondary text-center">
            © {new Date().getFullYear()} Will Rayners Custom Painting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
