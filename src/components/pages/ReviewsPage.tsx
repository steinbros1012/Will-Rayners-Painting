import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Quote, Star } from 'lucide-react';
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

      <section className="bg-primary pb-20 pt-32 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-paragraph text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              What Customers Say
            </p>
            <h1 className="mb-4 font-heading text-6xl leading-none text-white lg:text-8xl">
              Five-Star Reviews
            </h1>
            <div className="mb-6 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent-gold text-accent-gold" />
              ))}
              <span className="ml-2 font-paragraph text-lg text-white/70">5.0 on Google</span>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[2rem] bg-[#0f1720] text-white shadow-[0_30px_90px_rgba(15,23,32,0.18)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.25fr_0.95fr]">
                <div className="p-8 md:p-10 lg:p-14">
                  <div className="mb-5 flex items-center gap-3 text-[#f0c27b]">
                    <Quote className="h-8 w-8" />
                    <span className="font-paragraph text-sm font-semibold uppercase tracking-[0.3em]">
                      Featured Review
                    </span>
                  </div>
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-[#f0c27b] text-[#f0c27b]" />
                    ))}
                  </div>
                  <h2 className="mb-4 font-heading text-4xl leading-tight text-white lg:text-6xl">
                    {featuredReview.customerName}
                  </h2>
                  <p className="mb-8 max-w-3xl font-paragraph text-lg leading-8 text-white/84">
                    "{featuredReview.reviewText}"
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f0c27b]" />
                      <span className="font-paragraph text-sm text-white/84">
                        Quick turnaround from the first call to the on-site walkthrough and estimate.
                      </span>
                    </div>
                    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f0c27b]" />
                      <span className="font-paragraph text-sm text-white/84">
                        The project included painting plus carpentry work and a replacement fiberglass door.
                      </span>
                    </div>
                    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f0c27b]" />
                      <span className="font-paragraph text-sm text-white/84">
                        Strong communication on pricing, schedule, colors, and scope before work began.
                      </span>
                    </div>
                    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f0c27b]" />
                      <span className="font-paragraph text-sm text-white/84">
                        Finished result earned an emphatic five-star recommendation from the homeowner.
                      </span>
                    </div>
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
                      <div key={photo} className="overflow-hidden rounded-2xl border border-[#16202a]/10 bg-white/20">
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
                </div>
              </div>
              <div className="grid gap-4 border-t border-white/10 bg-[#111a23] p-6 md:grid-cols-3 md:p-8 lg:grid-cols-5">
                {nickCapponyProject.photos.slice(4).map((photo, index) => (
                  <div key={photo} className="overflow-hidden rounded-2xl border border-white/10">
                    <div className="aspect-[4/3]">
                      <Image
                        src={photo}
                        alt={`Nick Cappony detail photo ${index + 5}`}
                        width={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
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

      <section className="bg-primary py-20 lg:py-24">
        <div className="mx-auto grid max-w-[100rem] items-center gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div>
            <h2 className="mb-4 font-heading text-5xl text-white lg:text-6xl">
              Join our satisfied customers.
            </h2>
            <p className="font-paragraph text-base text-white/70">
              Experience the careful prep, clear communication, and quality finish that keeps customers coming back.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded bg-accent-gold px-8 py-4 font-paragraph font-semibold text-foreground transition-colors hover:bg-accent-gold/90"
            >
              Get Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:6012600061"
              className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/30 px-8 py-4 font-paragraph font-semibold text-white transition-colors hover:border-white"
            >
              <Phone className="h-4 w-4" />
              (601) 260-0061
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
