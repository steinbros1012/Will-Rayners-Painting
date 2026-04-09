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
      <section
        className="bg-primary pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden"
        style={{ backgroundImage: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(240,180,41,0.06) 0%, transparent 70%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
              What We Offer
            </p>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-4">
              Our Services
            </h1>
            {/* Animated gold underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-0.5 w-20 bg-accent-gold mb-6"
            />
            <p className="font-paragraph text-base lg:text-lg text-white/70 max-w-2xl">
              Interior, exterior, cabinets, trim, sheet rock repair, pressure washing, and prep work — every service is built around careful workmanship and a finish that lasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES LIST ─── */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
              className="group border-t border-gray-100 py-10 lg:py-14 relative"
            >
              {/* Gold left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pl-0 group-hover:pl-4 transition-all duration-500">
                {/* Number */}
                <div className="lg:col-span-1 hidden lg:block">
                  <span className="font-heading text-6xl text-accent-gold italic leading-none group-hover:scale-110 inline-block transition-transform duration-300">
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
                  <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
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
                  {/* Hover arrow */}
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex cursor-pointer items-center gap-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <span className="font-paragraph text-xs uppercase tracking-widest text-accent-gold font-semibold">Get estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent-gold" />
                  </Link>
                </div>

                {/* Image */}
                <div className="lg:col-span-5">
                  {service.serviceImage ? (
                    <div className="aspect-[16/9] overflow-hidden rounded-xl">
                      <Image
                        src={service.serviceImage}
                        alt={service.serviceName}
                        width={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] bg-muted rounded-xl flex items-center justify-center">
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
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f1923 0%, #1a2e44 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-heading text-5xl lg:text-6xl text-white mb-4">
                Not sure which service you need?
              </h2>
              <p className="font-paragraph text-base text-white/70">
                Call Will directly or fill out the estimate form — he'll talk through the project and recommend the right approach.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row lg:justify-end gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-gold text-foreground font-paragraph font-semibold px-8 py-4 rounded-full hover:bg-accent-gold/90 hover:shadow-[0_6px_28px_rgba(240,180,41,0.4)] transition-all duration-300"
              >
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:6012600061"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-paragraph font-semibold px-8 py-4 rounded-full hover:border-white/70 hover:bg-white/5 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                (601) 260-0061
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
