import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { ProjectGallery } from '@/entities';
import { projectGallery, siteImages } from '@/data/site-content';

export default function GalleryPage() {
  const [projects, setProjects] = useState<ProjectGallery[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    setIsLoading(true);
    try {
      setProjects(projectGallery);
    } catch (error) {
      console.error('Error loading projects:', error);
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
              Project Gallery
            </h1>
            <p className="font-paragraph text-lg lg:text-xl text-secondary max-w-3xl mx-auto mb-8">
              Explore the kind of before-and-after improvements Will Rayners Custom Painting helps homeowners create.
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

      {/* Featured Before/After */}
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-2 text-center">
              Featured Project
            </h2>
            <p className="font-paragraph text-lg text-secondary text-center mb-12">
              Complete Home Exterior Transformation
            </p>
            
            {/* Side-by-side before/after */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 flex-1">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/images/meadowlark/gallery/featured-1-before.png"
                      alt="Before - Home exterior"
                      width={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl text-foreground mb-2">Before</h3>
                  <p className="font-paragraph text-sm text-secondary">Original condition</p>
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 flex-1">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/images/meadowlark/gallery/featured-1-after.png"
                      alt="After - Home exterior"
                      width={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl text-foreground mb-2">After</h3>
                  <p className="font-paragraph text-sm text-secondary">Professional transformation</p>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center max-w-3xl mx-auto"
            >
              <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                This beautiful home received a complete exterior makeover with a fresh coat of professional-grade paint, new trim work, and enhanced curb appeal. The transformation showcases our attention to detail and commitment to quality craftsmanship.
              </p>
            </motion.div>
          </motion.div>

          {/* Second Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-20 border-t border-gray-200"
          >
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-2 text-center">
              Another Success Story
            </h2>
            <p className="font-paragraph text-lg text-secondary text-center mb-12">
              Complete Home Exterior Renovation
            </p>
            
            {/* Side-by-side before/after */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 flex-1">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/images/meadowlark/gallery/featured-2-before.png"
                      alt="Before - Home exterior renovation"
                      width={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl text-foreground mb-2">Before</h3>
                  <p className="font-paragraph text-sm text-secondary">Original condition</p>
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 flex-1">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/images/meadowlark/gallery/featured-2-after.png"
                      alt="After - Home exterior renovation"
                      width={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl text-foreground mb-2">After</h3>
                  <p className="font-paragraph text-sm text-secondary">Professional transformation</p>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center max-w-3xl mx-auto"
            >
              <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                This stunning home exterior renovation demonstrates our expertise in transforming properties. With fresh paint, updated finishes, and meticulous attention to detail, we've created a dramatic improvement that enhances both the beauty and value of this home.
              </p>
            </motion.div>
          </motion.div>

          {/* Third Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-20 border-t border-gray-200"
          >
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-2 text-center">
              Garage Door Transformation
            </h2>
            <p className="font-paragraph text-lg text-secondary text-center mb-12">
              Professional Garage Door Painting
            </p>
            
            {/* Side-by-side before/after */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 flex-1">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/images/meadowlark/gallery/featured-3-before.png"
                      alt="Before - Garage doors"
                      width={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl text-foreground mb-2">Before</h3>
                  <p className="font-paragraph text-sm text-secondary">Original condition</p>
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 flex-1">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/images/meadowlark/gallery/featured-3-after.png"
                      alt="After - Garage doors"
                      width={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl text-foreground mb-2">After</h3>
                  <p className="font-paragraph text-sm text-secondary">Professional transformation</p>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center max-w-3xl mx-auto"
            >
              <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
                These garage doors received a stunning professional paint job, transforming them from faded white to a sleek black finish. The new color dramatically enhances the home's curb appeal and creates a modern, polished appearance that complements the property perfectly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
              More Projects
            </h2>
            <p className="font-paragraph text-lg text-secondary">
              Browse our portfolio of completed work
            </p>
          </div>
          <div className={`space-y-16 lg:space-y-24 ${isLoading ? 'min-h-[600px]' : ''}`}>
            {isLoading ? null : projects.length > 0 ? (
              projects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <div className="grid lg:grid-cols-1 gap-0">
                    {/* Photo */}
                    {project.beforePhoto && (
                      <div className="relative">
                        <div className="aspect-[4/3]">
                          <Image
                            src={project.beforePhoto || siteImages.galleryFallback}
                            alt={`${project.projectTitle}`}
                            width={800}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-8 lg:p-12">
                    <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
                      {project.projectTitle}
                    </h2>
                    {project.projectDescription && (
                      <p className="font-paragraph text-base lg:text-lg text-secondary mb-4 leading-relaxed">
                        {project.projectDescription}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="font-paragraph text-lg text-secondary">
                  No additional projects available at this time.
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
              Your Project Could Be Next
            </h2>
            <p className="font-paragraph text-lg lg:text-xl text-primary-foreground mb-8 max-w-3xl mx-auto">
              Let us transform your home with professional painting services.
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
