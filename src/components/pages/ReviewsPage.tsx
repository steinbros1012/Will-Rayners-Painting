import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Star } from 'lucide-react';
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

      {/* ─── PAGE HEADER ─── */}
      <section
        className="bg-primary pb-20 pt-32 lg:pb-24 lg:pt-40 relative overflow-hidden"
        style={{ backgroundImage: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(240,180,41,0.06) 0%, transparent 70%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16 relative z-10">
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
            {/* Animated gold underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-0.5 w-20 bg-accent-gold mb-6"
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

      {/* ─── FEATURED REVIEW ─── */}
      {featuredReview && (
        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[2rem] bg-[#0f1720] text-white shadow-[0_30px_90px_rgba(15,23,32,0.18)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.25fr_0.95fr]">
                <div className="p-8 md:p-10 lg:p-14 relative overflow-hidden">
                  {/* Large decorative quote mark */}
                  <div
                    className="absolute top-4 right-6 font-heading text-[10rem] text-white/[0.04] leading-none select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    &#8220;
                  </div>
                  <div className="mb-5 flex items-center gap-3 text-[#f0c27b]">
                    <span className="font-paragraph text-sm font-semibold uppercase tracking-[0.3em]">
                      Featured Review
                    </span>
                  </div>
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#f0c27b] text-[#f0c27b]" />
                    ))}
                  </div>
                  <h2 className="mb-4 font-heading text-4xl leading-tight text-white lg:text-6xl">
                    {featuredReview.customerName}
                  </h2>
                  <p className="mb-8 max-w-3xl font-paragraph text-lg leading-8 text-white/84">
                    "{featuredReview.reviewText}"
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      'Quick turnaround from the first call to the on-site walkthrough and estimate.',
                      'The project included painting plus carpentry work and a replacement fiberglass door.',
                      'Strong communication on pricing, schedule, colors, and scope before work began.',
                      'Finished result earned an emphatic five-star recommendation from the homeowner.',
                    ].map((text, i) => (
                      <div key={i} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/[0.08] transition-colors duration-200">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f0c27b]" />
                        <span className="font-paragraph text-sm text-white/84">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/10 bg-[linear-gradient(180deg,#d8a35d_0%,#b66a3c_100%)] p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-14">
                  <p className="mb-4 font-paragraph text-sm font-semibold uppercase tracking-[0.28em] text-[#16202a]">
                    Project Story
                  </p>
                  <h3 className="mb-6 font-heading text-3xl leading-tight text-[#16202a] lg:text-5xl">
                    A whole-home exterior refresh with trim, doors, and carpentry details.
                  </h3>
                  <div className="space-y-4 font-paragraph text-base leading-7 text-[#16202a]/85">
                    <p>
                      Nick&apos;s review paints a full picture of the experience: fast response, a clear estimate, help coordinating colors, and a crew that delivered professionally.
                    </p>
                    <p>
                      This is exactly the kind of story homeowners want to see when they are deciding whether to trust someone with a large exterior job.
                    </p>
                    <p>
                      This featured review is now backed by a real photo set from the job, showing the exterior, entry details, garage, doors, and side elevations.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {nickCapponyProject.photos.slice(0, 4).map((photo, index) => (
                      <div key={photo} className="overflow-hidden rounded-2xl border border-[#16202a]/10 bg-white/20 group">
                        <div className="aspect-[4/3]">
                          <Image
                            src={photo}
                            alt={`Nick Cappony project photo ${index + 1}`}
                            width={600}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-4 border-t border-white/10 bg-[#111a23] p-6 md:grid-cols-3 md:p-8 lg:grid-cols-5">
                {nickCapponyProject.photos.slice(4).map((photo, index) => (
                  <div key={photo} className="overflow-hidden rounded-2xl border border-white/10 group">
                    <div className="aspect-[4/3]">
                      <Image
                        src={photo}
                        alt={`Nick Cappony detail photo ${index + 5}`}
                        width={600}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── OTHER REVIEWS ─── */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">More Reviews</p>
            <h2 className="font-heading text-4xl lg:text-5xl text-foreground">More happy customers.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restReviews.map((review, index) => (
              <motion.div
                key={review._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl bg-muted p-7 transition-all duration-400 hover:bg-primary hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(28,53,87,0.18)] overflow-hidden"
              >
                {/* Background quote decoration */}
                <div
                  className="absolute top-3 right-5 font-heading text-[7rem] text-foreground/[0.05] group-hover:text-white/[0.06] leading-none select-none pointer-events-none transition-colors duration-300"
                  aria-hidden="true"
                >
                  &#8220;
                </div>

                <div className="mb-5 flex gap-1">
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <p className="mb-6 font-paragraph text-base leading-relaxed text-foreground transition-colors duration-300 group-hover:text-white relative z-10">
                  "{review.reviewText}"
                </p>
                <div className="border-t border-gray-200 group-hover:border-white/20 pt-4 transition-colors duration-300">
                  <p className="font-paragraph text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-white">
                    {review.customerName}
                  </p>
                  {review.reviewSource && (
                    <p className="mt-0.5 font-paragraph text-xs text-secondary transition-colors duration-300 group-hover:text-white/60">
                      {review.reviewSource}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C3557 0%, #0d2240 50%, #1C3557 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(240,180,41,0.06) 0%, transparent 70%)' }}
        />
        <div className="mx-auto grid max-w-[100rem] items-center gap-10 px-6 lg:grid-cols-2 lg:px-16 relative z-10">
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
