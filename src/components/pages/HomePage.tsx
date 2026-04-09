import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Phone, ArrowRight, CheckCircle2, MapPin, Award } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EstimateSection from '@/components/EstimateSection';
import { PaintingServices, ProjectGallery, CustomerReviews } from '@/entities';
import {
  customerReviews,
  paintingServices,
  projectGallery,
  siteImages,
} from '@/data/site-content';

export default function HomePage() {
  const [services, setServices] = useState<PaintingServices[]>([]);
  const [galleryProjects, setGalleryProjects] = useState<ProjectGallery[]>([]);
  const [featuredReview, setFeaturedReview] = useState<CustomerReviews | null>(null);

  useEffect(() => {
    setServices(paintingServices.filter((s) => s.isFeatured));
    setGalleryProjects(projectGallery.slice(0, 3));
    setFeaturedReview(customerReviews[0] || null);
  }, []);

  const projectViewLabels: Record<string, { left: string; right: string }> = {
    'wr-project-nick-cappony': { left: 'View 1', right: 'View 2' },
    'wr-project-brick-wall-retaining': { left: 'View 1', right: 'View 2' },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO — Split Layout ─── */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left: navy panel */}
        <div className="bg-primary flex items-center px-8 lg:px-16 py-32 lg:py-0">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-6"
            >
              Flowood, Mississippi
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-6"
            >
              Painting Done With Pride.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-paragraph text-base lg:text-lg text-white/70 mb-10 leading-relaxed max-w-md"
            >
              Careful prep, clean finishes, and five-star service for homes across Flowood, Pearl, Brandon, Ridgeland, Madison, Gluckstadt, Crystal Springs, Jackson, and nearby communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-gold text-foreground font-paragraph font-semibold px-8 py-4 rounded hover:bg-accent-gold/90 transition-colors"
              >
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:6012600061"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-paragraph font-semibold px-8 py-4 rounded hover:border-white/60 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (601) 260-0061
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative min-h-[50vh] lg:min-h-0">
          <Image
            src={siteImages.hero}
            alt="Will Rayners Custom Painting"
            width={1200}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle amber accent bar on left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-gold" />
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { value: '500+', label: 'Projects Completed', icon: <Award className="w-5 h-5" /> },
              { value: '5.0 ★', label: 'Google Rating', icon: <Star className="w-5 h-5" /> },
              { value: 'FREE', label: 'Estimates', icon: <CheckCircle2 className="w-5 h-5" /> },
              { value: 'LOCAL', label: 'Flowood-Based', icon: <MapPin className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center py-10 px-6 gap-2"
              >
                <span className="text-accent-gold">{stat.icon}</span>
                <span className="font-heading text-3xl lg:text-4xl text-white">{stat.value}</span>
                <span className="font-paragraph text-xs uppercase tracking-widest text-white/50">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">What We Do</p>
              <h2 className="font-heading text-5xl lg:text-6xl text-foreground">Our Services</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-paragraph text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service grid — numbered cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="bg-white p-8 group hover:bg-primary transition-colors duration-300"
              >
                <span className="font-heading text-5xl text-accent-gold leading-none italic">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-2xl text-foreground group-hover:text-white mt-4 mb-3 transition-colors">
                  {service.serviceName}
                </h3>
                <p className="font-paragraph text-sm text-secondary group-hover:text-white/70 leading-relaxed transition-colors">
                  {service.shortSummary}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY — Project Highlights ─── */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">Our Work</p>
              <h2 className="font-heading text-5xl lg:text-6xl text-foreground">Project Highlights</h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-paragraph text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {galleryProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-2 gap-2"
              >
                {(() => {
                  const labels = projectViewLabels[project._id] ?? {
                    left: 'Before',
                    right: 'After',
                  };

                  return (
                    <>
                {/* Before */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3]">
                    <Image
                      src={project.beforePhoto || siteImages.galleryFallback}
                      alt={`${project.projectTitle} — ${labels.left}`}
                      width={700}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute top-3 left-3 font-paragraph text-xs font-semibold uppercase tracking-widest bg-foreground/80 text-white px-3 py-1.5">
                    {labels.left}
                  </span>
                </div>

                {/* Second image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3]">
                    <Image
                      src={project.afterPhoto || siteImages.galleryFallback}
                      alt={`${project.projectTitle} — ${labels.right}`}
                      width={700}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute top-3 right-3 font-paragraph text-xs font-semibold uppercase tracking-widest bg-accent-gold text-foreground px-3 py-1.5">
                    {labels.right}
                  </span>
                </div>

                {/* Project label */}
                <div className="col-span-2 flex items-center justify-between pt-1 pb-3 border-b border-gray-200">
                  <p className="font-heading text-xl text-foreground">{project.projectTitle}</p>
                  <p className="font-paragraph text-sm text-secondary">{project.projectLocation}</p>
                </div>
                    </>
                  );
                })()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED REVIEW (Amber background) ─── */}
      {featuredReview && (
        <section className="py-20 lg:py-28 bg-accent-gold">
          <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-foreground fill-foreground" />
                ))}
              </div>
              <blockquote className="font-heading text-3xl lg:text-5xl text-foreground italic leading-snug mb-8">
                "{featuredReview.reviewText}"
              </blockquote>
              <p className="font-paragraph text-sm font-semibold uppercase tracking-widest text-foreground/70">
                — {featuredReview.customerName}, {featuredReview.reviewSource}
              </p>

              <div className="mt-10">
                <Link
                  to="/reviews"
                  className="inline-flex items-center gap-2 font-paragraph text-sm font-semibold text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors"
                >
                  Read All Reviews <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── WHY CHOOSE WILL ─── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">Why Will?</p>
              <h2 className="font-heading text-5xl lg:text-6xl text-foreground mb-8">
                A painter you can actually trust.
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { title: 'Thorough prep & cleanup', desc: 'Surfaces are cleaned, sanded, and primed before a single coat goes on. Job site stays tidy throughout.' },
                  { title: 'Clear communication', desc: 'You know the price, the timeline, and the scope before work begins — no surprises.' },
                  { title: 'Local & reliable', desc: 'Based in Flowood and serving homeowners across the Jackson metro and nearby communities.' },
                  { title: 'Five-star reputation', desc: 'Backed by real homeowner reviews on Google and Facebook.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                      <CheckCircle2 className="w-6 h-6 text-accent-gold" />
                    </div>
                    <div>
                      <p className="font-paragraph text-base font-semibold text-foreground mb-1">{item.title}</p>
                      <p className="font-paragraph text-sm text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded">
                <Image
                  src={siteImages.aboutWork}
                  alt="Will Rayners Painting craftsmanship"
                  width={700}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Amber accent block */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-gold -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ESTIMATE SECTION ─── */}
      <EstimateSection />

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl lg:text-7xl text-white mb-6"
          >
            Ready to refresh your home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-paragraph text-base text-white/70 mb-10"
          >
            No pressure — just clear advice, careful work, and a finish you'll love.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-accent-gold text-foreground font-paragraph font-semibold px-10 py-4 rounded hover:bg-accent-gold/90 transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:6012600061"
              className="flex items-center justify-center gap-2 border-2 border-white/30 text-white font-paragraph font-semibold px-10 py-4 rounded hover:border-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              (601) 260-0061
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
