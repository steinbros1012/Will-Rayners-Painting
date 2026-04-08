import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { PaintingServices } from '@/entities';
import { paintingServices } from '@/data/site-content';

export default function ServicesPage() {
  const [services, setServices] = useState<PaintingServices[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = () => {
    setIsLoading(true);
    try {
      setServices(paintingServices);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-20 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
              Professional Painting Services
            </h1>
            <p className="font-paragraph text-lg lg:text-xl text-secondary max-w-3xl mx-auto mb-8">
              Interior, exterior, cabinet, trim, and prep services tailored for homeowners who want clean workmanship and clear communication from start to finish.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground font-paragraph font-semibold px-8 py-4 rounded transition-colors hover:opacity-90"
            >
              Get Free Estimate
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
          <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 ${isLoading ? 'min-h-[600px]' : ''}`}>
            {isLoading ? null : services.length > 0 ? (
              services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden"
                >

                  <div className="p-8">
                    <h2 className="font-heading text-3xl text-foreground mb-4">
                      {service.serviceName}
                    </h2>
                    {service.shortSummary && (
                      <p className="font-paragraph text-lg text-secondary mb-4 font-semibold">
                        {service.shortSummary}
                      </p>
                    )}
                    {service.description && (
                      <p className="font-paragraph text-base text-secondary mb-4 leading-relaxed">
                        {service.description}
                      </p>
                    )}

                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="font-paragraph text-lg text-secondary">
                  No services available at this time.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 lg:py-32 bg-primary">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl lg:text-6xl text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-paragraph text-lg lg:text-xl text-primary-foreground mb-8 max-w-3xl mx-auto">
              Contact Will today for a free estimate and straightforward guidance on your painting project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-primary font-paragraph font-semibold px-8 py-4 rounded transition-colors hover:opacity-90"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:6012600061"
                className="inline-block bg-transparent text-primary-foreground border-2 border-primary-foreground font-paragraph font-semibold px-8 py-4 rounded transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                Call (601) 260-0061
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
