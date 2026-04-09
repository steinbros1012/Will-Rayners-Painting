import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { CustomerReviews } from '@/entities';
import { customerReviews, nickCapponyProject } from '@/data/site-content';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<CustomerReviews[]>([]);

  useEffect(() => {
    setReviews(customerReviews);
  }, []);

  const featuredReview = reviews[0];
  const restReviews = reviews.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section
        className="relative overflow-hidden bg-primary pb-20 pt-32 lg:pb-24 lg:pt-40"
        style={{ backgroundImage: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(240,180,41,0.06) 0%, transparent 70%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 mx-auto max-w-[100rem] px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 font-paragraph text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              What Customers Say
            </p>
            <h1 className="mb-4 font-heading text-6xl leading-none text-white lg:text-8xl">
              Five-Star Reviews
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 h-0.5 w-20 origin-left bg-accent-gold"
            />
            <div className="mb-6 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-gold text-accent-gold" />
              ))}
              <span className="ml-2 font-paragraph text-base text-white/70">5.0 on Google</span>
            </div>
            <p className="max-w-2xl font-paragraph text-base text-white/70">
              Real feedback from homeowners who trusted Will with their homes.
            </p>
          </motion.div>
        </div>
      </section>

      {featuredReview && (
        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 rounded-[2rem] border border-[#e6ebf2] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,32,0.08)] lg:grid-cols-[0.95fr_1.2fr] lg:p-8"
            >
              <div className="flex flex-col justify-between gap-6 rounded-[1.5rem] bg-muted p-5 lg:p-6">
                <div>
                  <p className="mb-3 font-paragraph text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
                    Review Spotlight
                  </p>
                  <div className="mb-5 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <h2 className="mb-4 font-heading text-3xl leading-tight text-foreground lg:text-5xl">
                    {featuredReview.customerName}
                  </h2>
                  <p className="mb-4 font-paragraph text-base leading-8 text-secondary lg:text-lg">
                    "{featuredReview.reviewText}"
                  </p>
                  <p className="font-paragraph text-xs font-semibold uppercase tracking-[0.22em] text-primary/60">
                    {featuredReview.reviewSource}
                  </p>
                </div>
                <Link
                  to="/gallery"
                  className="inline-flex cursor-pointer items-center gap-2 font-paragraph text-sm font-semibold text-primary transition-colors hover:text-primary/70"
                >
                  View Project Gallery <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="mb-2 font-paragraph text-xs font-semibold uppercase tracking-[0.24em] text-accent-gold">
                      Project Photos
                    </p>
                    <h3 className="font-heading text-2xl text-foreground lg:text-4xl">
                      {nickCapponyProject.title}
                    </h3>
                  </div>
                  <p className="font-paragraph text-sm text-secondary">{nickCapponyProject.location}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {nickCapponyProject.photos.slice(0, 6).map((photo, index) => (
                    <div key={photo} className="overflow-hidden rounded-[1.25rem] border border-gray-200 bg-white">
                      <div className="aspect-[4/3]">
                        <Image
                          src={photo}
                          alt={`Nick Cappony project photo ${index + 1}`}
                          width={600}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 max-w-3xl font-paragraph text-sm leading-relaxed text-secondary">
                  Exterior painting, entry details, trim work, and carpentry updates brought this home together.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-paragraph text-xs font-semibold uppercase tracking-[0.28em] text-accent-gold">
                More Reviews
              </p>
              <h2 className="font-heading text-4xl text-foreground lg:text-5xl">
                What homeowners keep saying
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restReviews.map((review, index) => (
              <motion.div
                key={review._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded bg-muted p-7 transition-colors duration-300 hover:bg-primary"
              >
                <div className="mb-5 flex gap-1">
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <p className="mb-6 font-paragraph text-base leading-relaxed text-foreground transition-colors group-hover:text-white">
                  "{review.reviewText}"
                </p>
                <div className="border-t border-gray-200 pt-4 transition-colors group-hover:border-white/20">
                  <p className="font-paragraph text-sm font-semibold text-foreground transition-colors group-hover:text-white">
                    {review.customerName}
                  </p>
                  {review.reviewSource && (
                    <p className="mt-0.5 font-paragraph text-xs text-secondary transition-colors group-hover:text-white/60">
                      {review.reviewSource}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-20 lg:py-24"
        style={{ background: 'linear-gradient(135deg, #1C3557 0%, #0d2240 50%, #1C3557 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(240,180,41,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto grid max-w-[100rem] items-center gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-4 font-heading text-5xl text-white lg:text-6xl">
              Join our satisfied customers.
            </h2>
            <p className="font-paragraph text-base text-white/70">
              Experience the careful prep, clear communication, and quality finish that keeps customers coming back.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row lg:justify-end"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-gold px-8 py-4 font-paragraph font-semibold text-foreground transition-all duration-300 hover:bg-accent-gold/90 hover:shadow-[0_6px_28px_rgba(240,180,41,0.4)]"
            >
              Get Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:6012600061"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-paragraph font-semibold text-white transition-all duration-300 hover:border-white/70 hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              (601) 260-0061
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
