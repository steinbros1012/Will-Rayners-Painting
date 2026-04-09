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
import { useCountUp } from '@/hooks/useCountUp';

function StatCounter({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  const isWholeNumberStat = /^\d+\+?$/.test(value);
  const numericPart = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/^\d+/, '') || '';
  const { count, ref } = useCountUp(isWholeNumberStat ? numericPart : 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center py-10 px-6 gap-2"
    >
      <span className="text-accent-gold mb-1">{icon}</span>
      <span className="font-heading text-3xl lg:text-4xl text-white">
        {isWholeNumberStat ? `${count}${suffix}` : value}
      </span>
      <span className="font-paragraph text-xs uppercase tracking-widest text-white/50">{label}</span>
    </motion.div>
  );
}

export default function HomePage() {
  const [services, setServices] = useState<PaintingServices[]>([]);
  const [galleryProjects, setGalleryProjects] = useState<ProjectGallery[]>([]);
  const [featuredReview, setFeaturedReview] = useState<CustomerReviews | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    setServices(paintingServices.filter((s) => s.isFeatured));
    setGalleryProjects(projectGallery.slice(0, 3));
    setFeaturedReview(customerReviews[0] || null);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % siteImages.heroSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const projectViewLabels: Record<string, { left: string; right: string }> = {
    'wr-project-nick-cappony': { left: 'View 1', right: 'View 2' },
    'wr-project-brick-wall-retaining': { left: 'View 1', right: 'View 2' },
  };

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <Award className="w-5 h-5" /> },
    { value: '5.0 ★', label: 'Google Rating', icon: <Star className="w-5 h-5" /> },
    { value: 'FREE', label: 'Estimates', icon: <CheckCircle2 className="w-5 h-5" /> },
    { value: 'LOCAL', label: 'Flowood-Based', icon: <MapPin className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── HERO — Full-Bleed Background ─── */}
      <section className="relative isolate min-h-screen overflow-hidden bg-primary">
        <div className="absolute inset-0">
          {siteImages.heroSlides.map((src, index) => (
            <motion.div
              key={src}
              initial={false}
              animate={{ opacity: index === heroIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
              aria-hidden={index !== heroIndex}
            >
              <Image
                src={src}
                alt=""
                width={1600}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,33,0.10)_0%,rgba(7,18,33,0.06)_35%,rgba(7,18,33,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,rgba(8,22,41,0.28),transparent_34%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-[100rem] items-end px-6 pb-12 pt-32 lg:px-16 lg:pb-16 lg:pt-40">
          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.25fr)_22rem] lg:items-end">
            <div className="max-w-4xl py-4 sm:py-6">
              <p className="mb-6 font-paragraph text-xs font-semibold uppercase tracking-[0.32em] text-accent-gold">
                Flowood, Mississippi
              </p>

              <h1
                className="mb-6 max-w-4xl font-heading text-4xl leading-[0.96] text-white sm:text-5xl lg:text-6xl xl:text-[4.9rem]"
                style={{ textShadow: '0 10px 28px rgba(7,18,33,0.42)' }}
              >
                High-end painting work for homes that deserve a cleaner finish.
              </h1>

              <p
                className="mb-10 max-w-2xl font-paragraph text-base leading-relaxed text-white lg:text-lg"
                style={{ textShadow: '0 6px 20px rgba(7,18,33,0.36)' }}
              >
                Careful prep, crisp lines, and dependable service for homeowners across Flowood, Pearl, Brandon, Ridgeland, Madison, Gluckstadt, Crystal Springs, Jackson, and nearby communities.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded bg-accent-gold px-8 py-4 font-paragraph font-semibold text-foreground transition-colors hover:bg-accent-gold/90"
                >
                  Get Free Estimate <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:6012600061"
                  className="inline-flex items-center justify-center gap-2 rounded border border-white/24 bg-primary/22 px-8 py-4 font-paragraph font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-primary/30"
                >
                  <Phone className="h-4 w-4" />
                  (601) 260-0061
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid gap-3 rounded-[1.5rem] border border-white/18 bg-primary/18 p-4 shadow-[0_18px_45px_rgba(10,24,43,0.10)] backdrop-blur-md"
            >
              {[
                'Interior and exterior painting',
                'Sheet rock repair and pressure washing',
                'Free estimates and five-star local service',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-black/10 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-gold" />
                  <p className="font-paragraph text-sm leading-relaxed text-white">{item}</p>
                </div>
              ))}

              <div className="flex items-center gap-2 px-2 pt-1">
                {siteImages.heroSlides.map((_, index) => (
                  <button
                    key={`hero-dot-${index}`}
                    type="button"
                    onClick={() => setHeroIndex(index)}
                    className="cursor-pointer p-1"
                    aria-label={`Show hero image ${index + 1}`}
                  >
                    <span
                      className={`block h-2.5 rounded-full transition-all duration-300 ${
                        index === heroIndex ? 'w-8 bg-accent-gold' : 'w-2.5 bg-white/28 hover:bg-white/60'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <StatCounter value={stat.value} label={stat.label} icon={stat.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">What We Do</p>
              <h2 className="font-heading text-5xl lg:text-6xl text-foreground">Our Services</h2>
            </motion.div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-paragraph text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-8 group hover:bg-primary transition-all duration-400 cursor-default relative overflow-hidden"
              >
                {/* Hover shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(240,180,41,0.08) 0%, transparent 70%)' }}
                />
                <span className="font-heading text-5xl text-accent-gold leading-none italic">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-2xl text-foreground group-hover:text-white mt-4 mb-3 transition-colors duration-300">
                  {service.serviceName}
                </h3>
                <p className="font-paragraph text-sm text-secondary group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                  {service.shortSummary}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                >
                  <span className="font-paragraph text-xs uppercase tracking-widest text-accent-gold font-semibold">Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent-gold" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY — Project Highlights ─── */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">Our Work</p>
              <h2 className="font-heading text-5xl lg:text-6xl text-foreground">Project Highlights</h2>
            </motion.div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-paragraph text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {galleryProjects.map((project, index) => {
              const labels = projectViewLabels[project._id] ?? { left: 'Before', right: 'After' };
              return (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-2 gap-2"
                >
                  {/* Before */}
                  <div className="relative overflow-hidden group">
                    <div className="aspect-[4/3]">
                      <Image
                        src={project.beforePhoto || siteImages.galleryFallback}
                        alt={`${project.projectTitle} — ${labels.left}`}
                        width={700}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                    <span className="absolute top-3 left-3 font-paragraph text-xs font-semibold uppercase tracking-widest bg-foreground/80 text-white px-3 py-1.5 backdrop-blur-sm">
                      {labels.left}
                    </span>
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden group">
                    <div className="aspect-[4/3]">
                      <Image
                        src={project.afterPhoto || siteImages.galleryFallback}
                        alt={`${project.projectTitle} — ${labels.right}`}
                        width={700}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                    <span className="absolute top-3 right-3 font-paragraph text-xs font-semibold uppercase tracking-widest bg-accent-gold text-foreground px-3 py-1.5">
                      {labels.right}
                    </span>
                  </div>

                  {/* Project label */}
                  <div className="col-span-2 flex items-center justify-between pt-2 pb-3 border-b border-gray-200">
                    <p className="font-heading text-xl text-foreground">{project.projectTitle}</p>
                    <p className="font-paragraph text-sm text-secondary">{project.projectLocation}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── REVIEW STRIP ─── */}
      {featuredReview && (
        <section className="bg-[#f6efe2] py-20 lg:py-24">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-8 rounded-[2rem] border border-[#e5d8ba] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(28,53,87,0.08)] lg:grid-cols-[minmax(0,1.2fr)_17rem] lg:px-10 lg:py-10"
            >
              <div>
                <p className="mb-3 font-paragraph text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
                  From Local Homeowners
                </p>
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <blockquote className="mb-5 max-w-4xl font-heading text-2xl leading-snug text-foreground lg:text-4xl">
                  "{featuredReview.reviewText}"
                </blockquote>
                <p className="font-paragraph text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  {featuredReview.customerName} · {featuredReview.reviewSource}
                </p>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-[1.5rem] bg-muted p-5">
                <div>
                  <p className="mb-2 font-paragraph text-xs font-semibold uppercase tracking-[0.24em] text-primary/60">
                    Need painting, repairs, or cleanup?
                  </p>
                  <p className="font-paragraph text-sm leading-relaxed text-secondary">
                    We keep the process simple with clear estimates, steady communication, and work that respects your home.
                  </p>
                </div>
                <Link
                  to="/reviews"
                  className="inline-flex cursor-pointer items-center gap-2 font-paragraph text-sm font-semibold text-primary transition-colors hover:text-primary/70"
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">Why Will?</p>
                <h2 className="font-heading text-5xl lg:text-6xl text-foreground mb-10">
                  A painter you can actually trust.
                </h2>
              </motion.div>
              <div className="flex flex-col gap-0">
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
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-5 py-5 border-b border-gray-100 last:border-0 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/10 group-hover:bg-accent-gold/20 flex items-center justify-center transition-colors duration-300 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-gold" />
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
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={siteImages.aboutWork}
                  alt="Will Rayners Painting craftsmanship"
                  width={700}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Gold accent block */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-gold rounded-lg -z-10" />
              {/* Secondary accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-accent-gold/30 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ESTIMATE SECTION ─── */}
      <EstimateSection />

      {/* ─── BOTTOM CTA ─── */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C3557 0%, #0d2240 50%, #1C3557 100%)' }}
      >
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(240,180,41,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl lg:text-7xl text-white mb-6"
          >
            Ready to refresh your home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-paragraph text-base text-white/70 mb-10"
          >
            No pressure — just clear advice, careful work, and a finish you'll love.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-accent-gold text-foreground font-paragraph font-semibold px-10 py-4 rounded-full hover:bg-accent-gold/90 hover:shadow-[0_6px_28px_rgba(240,180,41,0.45)] transition-all duration-300"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:6012600061"
              className="flex items-center justify-center gap-2 border-2 border-white/30 text-white font-paragraph font-semibold px-10 py-4 rounded-full hover:border-white/70 hover:bg-white/5 transition-all duration-300"
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
