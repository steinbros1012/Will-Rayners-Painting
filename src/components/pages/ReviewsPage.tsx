import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CustomerReviews } from '@/entities';
import { customerReviews } from '@/data/site-content';

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
      <section className="bg-primary pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
              What Customers Say
            </p>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-4">
              Five-Star Reviews
            </h1>
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent-gold fill-accent-gold" />
              ))}
              <span className="font-paragraph text-lg text-white/70 ml-2">5.0 on Google</span>
            </div>
            <p className="font-paragraph text-base text-white/70 max-w-2xl">
              Real feedback from homeowners who trusted Will with their homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED REVIEW ─── */}
      {featuredReview && (
        <section className="py-16 lg:py-20 bg-muted">
          <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border-l-4 border-accent-gold p-8 lg:p-12 rounded-r"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                ))}
              </div>
              <blockquote className="font-heading text-3xl lg:text-4xl text-foreground italic leading-snug mb-6 max-w-4xl">
                "{featuredReview.reviewText}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-paragraph text-sm font-bold text-white">
                    {featuredReview.customerName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-paragraph text-base font-semibold text-foreground">
                    {featuredReview.customerName}
                  </p>
                  {featuredReview.reviewSource && (
                    <p className="font-paragraph text-sm text-secondary">{featuredReview.reviewSource}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── REVIEWS GRID ─── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restReviews.map((review, index) => (
              <motion.div
                key={review._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-muted p-7 rounded group hover:bg-primary transition-colors duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                  ))}
                </div>
                <p className="font-paragraph text-base text-foreground group-hover:text-white leading-relaxed mb-6 transition-colors">
                  "{review.reviewText}"
                </p>
                <div className="border-t border-gray-200 group-hover:border-white/20 pt-4 transition-colors">
                  <p className="font-paragraph text-sm font-semibold text-foreground group-hover:text-white transition-colors">
                    {review.customerName}
                  </p>
                  {review.reviewSource && (
                    <p className="font-paragraph text-xs text-secondary group-hover:text-white/60 mt-0.5 transition-colors">
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
      <section className="py-20 lg:py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-5xl lg:text-6xl text-white mb-4">
                Join our satisfied customers.
              </h2>
              <p className="font-paragraph text-base text-white/70">
                Experience the careful prep, clear communication, and quality finish that keeps customers coming back.
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
