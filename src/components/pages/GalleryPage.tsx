import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ProjectGallery } from '@/entities';
import { projectGallery, siteImages } from '@/data/site-content';
import { format } from 'date-fns';

export default function GalleryPage() {
  const [projects, setProjects] = useState<ProjectGallery[]>([]);

  useEffect(() => {
    setProjects(projectGallery);
  }, []);

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
              Our Work
            </p>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-6">
              Before &amp; After
            </h1>
            <p className="font-paragraph text-base lg:text-lg text-white/70 max-w-2xl">
              Real projects, real results. Every transformation starts with thorough prep and ends with a finish built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECTS — Full before/after rows ─── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="flex flex-col gap-16 lg:gap-24">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Project meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-4xl text-accent-gold italic">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-heading text-2xl lg:text-3xl text-foreground">
                      {project.projectTitle}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 font-paragraph text-sm text-secondary">
                    {project.projectLocation && <span>{project.projectLocation}</span>}
                    {project.dateCompleted && (
                      <>
                        <span>·</span>
                        <span>{format(new Date(project.dateCompleted), 'MMMM yyyy')}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Before / After images */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <Image
                        src={project.beforePhoto || siteImages.galleryFallback}
                        alt={`${project.projectTitle} — Before`}
                        width={800}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute top-3 left-3 font-paragraph text-xs font-semibold uppercase tracking-widest bg-foreground/80 text-white px-3 py-1.5">
                      Before
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <Image
                        src={project.afterPhoto || siteImages.galleryFallback}
                        alt={`${project.projectTitle} — After`}
                        width={800}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute top-3 right-3 font-paragraph text-xs font-semibold uppercase tracking-widest bg-accent-gold text-foreground px-3 py-1.5">
                      After
                    </span>
                  </div>
                </div>

                {/* Description */}
                {project.projectDescription && (
                  <p className="font-paragraph text-sm text-secondary leading-relaxed max-w-2xl">
                    {project.projectDescription}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-24 bg-accent-gold">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-5xl lg:text-6xl text-foreground mb-4">
                Your project could be next.
              </h2>
              <p className="font-paragraph text-base text-foreground/70">
                Request a free estimate and let Will walk you through what the transformation will look like.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-paragraph font-semibold px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:6012600061"
                className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 text-foreground font-paragraph font-semibold px-8 py-4 rounded hover:border-foreground transition-colors"
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
