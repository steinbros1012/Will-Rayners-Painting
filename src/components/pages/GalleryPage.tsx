import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { format } from 'date-fns';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ProjectGallery } from '@/entities';
import { nickCapponyProject, projectGallery, siteImages } from '@/data/site-content';

export default function GalleryPage() {
  const [projects, setProjects] = useState<ProjectGallery[]>([]);

  useEffect(() => {
    setProjects(projectGallery);
  }, []);

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
              Our Work
            </p>
            <h1 className="mb-6 font-heading text-6xl leading-none text-white lg:text-8xl">
              Project Gallery
            </h1>
            <p className="max-w-2xl font-paragraph text-base text-white/70 lg:text-lg">
              Real projects, real results. Browse recent work, detail shots, and finished exteriors from Will Rayners Custom Painting.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-8 pt-12 lg:pb-12 lg:pt-16">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,32,0.08)]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#0f1720] p-8 text-white md:p-10 lg:p-14">
                <p className="mb-4 font-paragraph text-sm font-semibold uppercase tracking-[0.28em] text-[#f0c27b]">
                  Featured Job
                </p>
                <h2 className="mb-4 font-heading text-4xl leading-tight lg:text-6xl">
                  {nickCapponyProject.title}
                </h2>
                <p className="mb-6 font-paragraph text-lg leading-8 text-white/82">
                  {nickCapponyProject.summary}
                </p>
                <p className="mb-8 font-paragraph text-sm uppercase tracking-[0.22em] text-white/55">
                  {nickCapponyProject.location}
                </p>
                <div className="space-y-3 font-paragraph text-sm text-white/82">
                  <p>Nick&apos;s review called out fast response time, a clear estimate, strong communication, and a crew that delivered excellent work.</p>
                  <p>This project now anchors the gallery as a real Will Rayners job, showing the exterior from multiple angles and the detail work around trim, windows, garage, and doors.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 bg-[#efe7db] p-4 md:grid-cols-3 md:p-5">
                {nickCapponyProject.photos.map((photo, index) => (
                  <div
                    key={photo}
                    className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} overflow-hidden rounded-2xl bg-white`}
                  >
                    <div className={index === 0 ? 'aspect-[4/3] md:aspect-[8/6]' : 'aspect-[4/3]'}>
                      <Image
                        src={photo}
                        alt={`Nick Cappony project gallery photo ${index + 1}`}
                        width={900}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
          <div className="flex flex-col gap-16 lg:gap-24">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-4xl italic text-accent-gold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-heading text-2xl text-foreground lg:text-3xl">
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

                <div className="mb-4 grid grid-cols-2 gap-2">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <Image
                        src={project.beforePhoto || siteImages.galleryFallback}
                        alt={`${project.projectTitle} — View 1`}
                        width={800}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="absolute left-3 top-3 bg-foreground/80 px-3 py-1.5 font-paragraph text-xs font-semibold uppercase tracking-widest text-white">
                      View 1
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <Image
                        src={project.afterPhoto || siteImages.galleryFallback}
                        alt={`${project.projectTitle} — View 2`}
                        width={800}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="absolute right-3 top-3 bg-accent-gold px-3 py-1.5 font-paragraph text-xs font-semibold uppercase tracking-widest text-foreground">
                      View 2
                    </span>
                  </div>
                </div>

                {project.projectDescription && (
                  <p className="max-w-2xl font-paragraph text-sm leading-relaxed text-secondary">
                    {project.projectDescription}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-gold py-20 lg:py-24">
        <div className="mx-auto grid max-w-[100rem] items-center gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div>
            <h2 className="mb-4 font-heading text-5xl text-foreground lg:text-6xl">
              Your project could be next.
            </h2>
            <p className="font-paragraph text-base text-foreground/70">
              Request a free estimate and let Will walk you through what the transformation will look like.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded bg-primary px-8 py-4 font-paragraph font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Get Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:6012600061"
              className="inline-flex items-center justify-center gap-2 rounded border-2 border-foreground/30 px-8 py-4 font-paragraph font-semibold text-foreground transition-colors hover:border-foreground"
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
