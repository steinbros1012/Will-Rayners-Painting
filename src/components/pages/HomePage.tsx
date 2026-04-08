import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, MapPin, Calendar, Sparkles, ArrowRight, CheckCircle2, Phone, Paintbrush } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import EstimateSection from '@/components/EstimateSection';
import { PaintingServices, ProjectGallery, CustomerReviews, TrustIndicators } from '@/entities';
import {
  customerReviews,
  paintingServices,
  projectGallery,
  siteImages,
  trustIndicators as trustIndicatorItems,
} from '@/data/site-content';

const customStyles = `
  .clip-diagonal {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
  .text-stroke {
    -webkit-text-stroke: 1px rgba(119, 136, 153, 0.3);
    color: transparent;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function HomePage() {
  const [services, setServices] = useState<PaintingServices[]>([]);
  const [galleryProjects, setGalleryProjects] = useState<ProjectGallery[]>([]);
  const [reviews, setReviews] = useState<CustomerReviews[]>([]);
  const [trustIndicators, setTrustIndicators] = useState<TrustIndicators[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsLoading(true);
    try {
      setServices(paintingServices.filter((service) => service.isFeatured));
      setGalleryProjects(projectGallery.slice(0, 4));
      setReviews(customerReviews.filter((review) => review.rating === 5).slice(0, 3));
      setTrustIndicators(
        [...trustIndicatorItems]
          .filter((indicator) => indicator.isActive)
          .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
      );
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-clip selection:bg-primary selection:text-white">
      <style>{customStyles}</style>
      <Header />
      <section ref={heroRef} className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-foreground/10 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-foreground/10 to-transparent z-10" />
          <Image
            src={siteImages.hero}
            alt="Will Rayners Custom Painting Hero Background"
            width={1920}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 w-full max-w-[120rem] mx-auto px-6 lg:px-20 pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-accent-gold" />
              <span className="font-paragraph text-sm uppercase tracking-widest text-accent-gold font-semibold">
                Flowood's Custom Painting Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-heading text-6xl lg:text-8xl leading-[0.95] mb-8 text-primary-foreground"
            >
              Interior & Exterior <br />
              <span className="text-primary italic">Painting Done Right</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-paragraph text-lg lg:text-xl max-w-xl mb-10 leading-relaxed text-primary-foreground"
            >Will Rayners Custom Painting helps homeowners upgrade interiors, exteriors, cabinets, and trim with careful prep, clean finishes, and service people feel good recommending.</motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-primary text-primary-foreground font-paragraph font-medium px-10 py-5 rounded-sm transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Estimate <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
              <a
                href="tel:6012600061"
                className="group flex items-center justify-center gap-2 bg-white border border-secondary/20 text-foreground font-paragraph font-medium px-10 py-5 rounded-sm transition-all hover:border-primary hover:text-primary"
              >
                <Phone className="w-4 h-4" />
                <span>(601) 260-0061</span>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-paragraph text-xs text-secondary/60 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-secondary/60 to-transparent" />
        </motion.div>
      </section>

      <section className="w-full bg-white border-b border-secondary/10 relative z-20">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {isLoading ? (
              [...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-3 animate-pulse">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full" />
                  <div className="h-4 w-24 bg-secondary/10 rounded" />
                </div>
              ))
            ) : trustIndicators.length > 0 ? (
              trustIndicators.map((indicator, index) => (
                <TrustItem key={indicator._id} indicator={indicator} index={index} />
              ))
            ) : (
              <>
                <StaticTrustItem icon={<Star className="w-6 h-6 text-accent-gold fill-accent-gold" />} title="5.0 Rating" subtitle="21 Google Reviews" index={0} />
                <StaticTrustItem icon={<MapPin className="w-6 h-6 text-primary" />} title="Local Service" subtitle="Flowood / Jackson Metro" index={1} />
                <StaticTrustItem icon={<Sparkles className="w-6 h-6 text-primary" />} title="Clean Job Sites" subtitle="Respect Your Home" index={2} />
                <StaticTrustItem icon={<Calendar className="w-6 h-6 text-primary" />} title="Reliable" subtitle="On Time, Every Time" index={3} />
              </>
            )}
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-32 bg-background relative">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4 relative">
              <div className="lg:sticky lg:top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="block font-paragraph text-sm text-accent-gold uppercase tracking-widest mb-4 font-semibold">
                    Our Expertise
                  </span>
                  <h2 className="font-heading text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                    Comprehensive <br />
                    <span className="text-secondary/40">Painting Services</span>
                  </h2>
                  <p className="font-paragraph text-lg text-secondary mb-8 leading-relaxed">From wall prep and trim work to cabinet updates and full exterior repaints, every project is built around careful workmanship and a finish that lasts.</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary font-paragraph font-medium hover:text-primary/80 transition-colors"
                  >
                    View All Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-12 lg:gap-20">
              {isLoading ? (
                <div className="h-96 bg-secondary/5 rounded animate-pulse" />
              ) : services.length > 0 ? (
                services.map((service, index) => (
                  <ServiceCard key={service._id} service={service} index={index} />
                ))
              ) : (
                <div className="p-12 border border-dashed border-secondary/30 rounded text-center text-secondary">
                  Services content loading...
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="w-full py-32 bg-white overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-20 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-5xl lg:text-6xl text-foreground mb-4"
            >
              Transformation Gallery
            </motion.h2>
            <p className="font-paragraph text-lg text-secondary">
              A look at the kind of clean, detail-focused transformation Will is known for.
            </p>
          </div>
          <Link
            to="/gallery"
            className="px-8 py-4 border border-secondary/20 rounded-sm font-paragraph text-foreground hover:bg-foreground hover:text-white transition-all duration-300"
          >
            View Full Portfolio
          </Link>
        </div>

        <div className="w-full px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              [...Array(4)].map((_, i) => <div key={i} className="aspect-[3/4] bg-secondary/10 animate-pulse rounded-sm" />)
            ) : galleryProjects.length > 0 ? (
              galleryProjects.map((project, index) => (
                <GalleryCard key={project._id} project={project} index={index} />
              ))
            ) : null}
          </div>
        </div>
      </section>

      <section className="w-full py-32 bg-background relative">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-20">
          <div className="mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="block font-paragraph text-sm text-accent-gold uppercase tracking-widest mb-4 font-semibold">
                  What Our Customers Say
                </span>
                <h2 className="font-heading text-5xl lg:text-6xl text-foreground mb-4">
                  5-Star <br />
                  <span className="text-secondary/40">Testimonials</span>
                </h2>
                <p className="font-paragraph text-lg text-secondary max-w-xl leading-relaxed">
                  Real feedback from homeowners who trusted Will with their painting projects.
                </p>
              </motion.div>
            </div>
            <Link
              to="/reviews"
              className="px-8 py-4 border border-secondary/20 rounded-sm font-paragraph text-foreground hover:bg-foreground hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              View All Reviews
            </Link>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isLoading ? 'min-h-[400px]' : ''}`}>
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-8 rounded-lg animate-pulse">
                  <div className="h-4 w-24 bg-secondary/10 rounded mb-4" />
                  <div className="h-20 bg-secondary/10 rounded mb-4" />
                  <div className="h-4 w-32 bg-secondary/10 rounded" />
                </div>
              ))
            ) : reviews.length > 0 ? (
              reviews.map((review, index) => (
                <FiveStarReviewCard key={review._id} review={review} index={index} />
              ))
            ) : null}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <EstimateSection />

      <section className="w-full py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white/20" />
           <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border-[40px] border-white/20" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl lg:text-7xl text-white mb-8"
          >
            Ready to Refresh Your Home?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-paragraph text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Schedule your free estimate today. No pressure, just clear advice, careful prep, and a beautiful finish for your home.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white text-primary font-paragraph font-bold px-10 py-5 rounded-sm hover:bg-secondary-foreground hover:text-primary transition-colors shadow-xl"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:6012600061"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-paragraph font-bold px-10 py-5 rounded-sm hover:bg-white hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (601) 260-0061
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function TrustItem({ indicator, index }: { indicator: TrustIndicators; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-12 h-12 mb-4 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
        {indicator.indicatorImage ? (
          <Image src={indicator.indicatorImage} alt="" width={48} className="w-full h-full object-contain" />
        ) : (
          <CheckCircle2 className="w-8 h-8 text-primary" />
        )}
      </div>
      <h3 className="font-heading text-xl text-foreground mb-1">{indicator.title}</h3>
      <p className="font-paragraph text-sm text-secondary">{indicator.shortDescription}</p>
    </motion.div>
  );
}

function StaticTrustItem({ icon, title, subtitle, index }: { icon: React.ReactNode; title: string; subtitle: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-12 h-12 mb-4 flex items-center justify-center bg-background rounded-full border border-secondary/10 transition-all group-hover:border-primary/30 group-hover:shadow-md">
        {icon}
      </div>
      <h3 className="font-heading text-xl text-foreground mb-1">{title}</h3>
      <p className="font-paragraph text-sm text-secondary">{subtitle}</p>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: PaintingServices; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg border border-secondary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/5 group overflow-hidden flex flex-col lg:flex-row"
    >

      <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
        <h3 className="font-heading text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
          {service.serviceName}
        </h3>
        <p className="font-paragraph text-secondary mb-6 leading-relaxed">
          {service.description || service.shortSummary}
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-accent-gold">
          <Paintbrush className="w-4 h-4" />
          <span>Professional Service</span>
        </div>
      </div>
    </motion.div>
  );
}

function GalleryCard({ project, index }: { project: ProjectGallery; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative overflow-hidden rounded-lg ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
    >
      <div className="aspect-[3/4] w-full overflow-hidden bg-secondary/10">
        <Image
          src={project.beforePhoto || siteImages.galleryFallback}
          alt={project.projectTitle || 'Gallery Project'}
          width={500}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-center">
          <p className="text-white font-heading text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {project.projectTitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function FiveStarReviewCard({ review, index }: { review: CustomerReviews; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-lg border border-secondary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-accent-gold fill-accent-gold"
          />
        ))}
      </div>

      <p className="font-paragraph text-base text-foreground mb-6 leading-relaxed">
        "{review.reviewText}"
      </p>

      <div className="border-t border-secondary/10 pt-4">
        <p className="font-paragraph text-base text-foreground font-semibold mb-1">
          {review.customerName}
        </p>
        {review.reviewSource && (
          <p className="font-paragraph text-sm text-secondary">
            {review.reviewSource}
          </p>
        )}
      </div>
    </motion.div>
  );
}
