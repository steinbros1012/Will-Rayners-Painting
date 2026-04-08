import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { CustomerReviews } from '@/entities';
import { format } from 'date-fns';
import { customerReviews } from '@/data/site-content';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<CustomerReviews[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = () => {
    setIsLoading(true);
    try {
      setReviews(customerReviews);
    } catch (error) {
      console.error('Error loading reviews:', error);
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
              Customer Reviews
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-accent-gold fill-accent-gold" />
              ))}
              <span className="font-paragraph text-2xl text-foreground ml-2">5.0</span>
            </div>
            <p className="font-paragraph text-lg lg:text-xl text-secondary max-w-3xl mx-auto mb-8">
              Read what customers have to say about Will Rayners Custom Painting. These are five-star reviews shared on Google.
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

      {/* Reviews Grid */}
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 ${isLoading ? 'min-h-[600px]' : ''}`}>
            {isLoading ? null : reviews.length > 0 ? (
              reviews.map((review, index) => (
                <motion.div
                  key={review._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg"
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < (review.rating || 5)
                            ? 'text-accent-gold fill-accent-gold'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-paragraph text-base text-foreground mb-6 leading-relaxed">
                    "{review.reviewText}"
                  </p>

                  {/* Customer Info */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-paragraph text-base text-foreground font-semibold mb-1">
                      {review.customerName}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-secondary">
                      {review.reviewDate && (
                        <span>
                          {format(new Date(review.reviewDate), 'MMMM d, yyyy')}
                        </span>
                      )}
                      {review.reviewSource && (
                        <>
                          <span>•</span>
                          <span>{review.reviewSource}</span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="font-paragraph text-lg text-secondary">
                  No reviews available at this time.
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
              Join Our Satisfied Customers
            </h2>
            <p className="font-paragraph text-lg lg:text-xl text-primary-foreground mb-8 max-w-3xl mx-auto">
              Experience the careful prep, strong communication, and quality finish that customers keep mentioning.
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
