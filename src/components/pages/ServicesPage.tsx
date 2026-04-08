import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PaintingServices } from '@/entities';
import { paintingServices } from '@/data/site-content';

export default function ServicesPage() {
  const [services, setServices] = useState<PaintingServices[]>([]);

  useEffect(() => {
    setServices(paintingServices);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── PAGE HEADER ─── */}
      <section className="bg-primary pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
              What We Offer
            </p>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-6">
              Our Services
            </h1>
            <p className="font-paragraph text-base lg:text-lg text-white/70 max-w-2xl">
              Interior, exterior, cabinets, trim, and prep — every service is built around careful workmanship and a finish that lasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES LIST — Numbered rows ─── */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group border-t border-gray-100 py-10 lg:py-14"
            >
              <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${index % 2 !== 0 ? '' : ''}`}>
                {/* Number */}
                <div className="lg:col-span-1 hidden lg:block">
                  <span className="font-heading text-6xl text-accent-gold italic leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-1 lg:hidden">
                    <span className="font-heading text-3xl text-accent-gold italic">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.serviceName}
                  </h2>
                  {service.shortSummary && (
                    <p className="font-paragraph text-base font-semibold text-accent-gold mb-3">
                      {service.shortSummary}
                    </p>
                  )}
                  {service.description && (
                    <p className="font-paragraph text-base text-secondary leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  )}
                  {service.serviceAreaContext && (
                    <p className="font-paragraph text-sm text-secondary/60 mt-4">
                      Serving: {service.serviceAreaContext}
                    </p>
                  )}
                </div>

                {/* Image */}
                <div className="lg:col-span-5">
                  {service.serviceImage ? (
                    <div className="aspect-[16/9] overflow-hidden rounded">
                      <Image
                        src={service.serviceImage}
                        alt={service.serviceName}
                        width={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] bg-muted rounded flex items-center justify-center">
                      <span className="font-heading text-5xl text-accent-gold italic">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-28 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-5xl lg:text-6xl text-white mb-4">
                Not sure which service you need?
              </h2>
              <p className="font-paragraph text-base text-white/70">
                Call Will directly or fill out the estimate form — he'll talk through the project and recommend the right approach.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-gold text-foreground font-paragraph font-semibold px-8 py-4 rounded hover:bg-accent-gold/90 transition-colors"
              >
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:6012600061"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-paragraph font-semibold px-8 py-4 rounded hover:border-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                (601) 260-0061
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
