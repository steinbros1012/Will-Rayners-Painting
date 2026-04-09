import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { format } from 'date-fns';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ProjectGallery } from '@/entities';
import {
  ceilingWallRepairProject,
  nickCapponyProject,
  postFrameBuildingProject,
  projectGallery,
  siteImages,
} from '@/data/site-content';

type InteractiveProject = {
  title: string;
  location: string;
  summary: string;
  photos: readonly string[];
};

type InteractiveProjectCardProps = {
  eyebrow: string;
  highlights: string[];
  project: InteractiveProject;
};

function InteractiveProjectCard({ eyebrow, highlights, project }: InteractiveProjectCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = project.photos[activeIndex] || siteImages.galleryFallback;

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? project.photos.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === project.photos.length - 1 ? 0 : current + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,32,0.08)]"
    >
      <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
        <div
          className="bg-[#0f1720] p-8 text-white md:p-10 lg:p-12 relative overflow-hidden"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 10% 80%, rgba(240,180,41,0.06) 0%, transparent 70%)' }}
        >
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
          <div className="relative z-10">
            <p className="mb-4 font-paragraph text-sm font-semibold uppercase tracking-[0.28em] text-[#f0c27b]">
              {eyebrow}
            </p>
            <h2 className="mb-4 font-heading text-4xl leading-tight lg:text-5xl">
              {project.title}
            </h2>
            <p className="mb-5 font-paragraph text-lg leading-8 text-white/82">
              {project.summary}
            </p>
            <p className="mb-8 font-paragraph text-sm uppercase tracking-[0.22em] text-white/55">
              {project.location}
            </p>
            <div className="space-y-3 font-paragraph text-sm leading-7 text-white/82">
              {highlights.map((highlight) => (
                <p key={highlight} className="flex gap-2">
                  <span className="text-[#f0c27b] flex-shrink-0 mt-1">—</span>
                  <span>{highlight}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#efe7db] p-4 md:p-5">
          <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_40px_rgba(15,23,32,0.08)] group">
            <div className="aspect-[4/3] overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full"
              >
                <Image
                  src={activePhoto}
                  alt={`${project.title} gallery view ${activeIndex + 1}`}
                  width={1200}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="font-paragraph text-sm font-medium uppercase tracking-[0.2em] text-[#2c4468]">
              Photo {String(activeIndex + 1).padStart(2, '0')} / {String(project.photos.length).padStart(2, '0')}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrevious}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d1c1a7] bg-white text-foreground transition-all duration-200 hover:bg-accent-gold hover:border-accent-gold hover:text-foreground hover:shadow-[0_4px_16px_rgba(240,180,41,0.35)]"
                aria-label={`Previous ${project.title} photo`}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d1c1a7] bg-white text-foreground transition-all duration-200 hover:bg-accent-gold hover:border-accent-gold hover:text-foreground hover:shadow-[0_4px_16px_rgba(240,180,41,0.35)]"
                aria-label={`Next ${project.title} photo`}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3 md:grid-cols-5 xl:grid-cols-7">
            {project.photos.map((photo, index) => (
              <button
                key={photo}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                  activeIndex === index
                    ? 'border-accent-gold shadow-[0_8px_24px_rgba(240,194,123,0.4)] scale-95'
                    : 'border-transparent hover:border-[#d1c1a7] hover:scale-95'
                }`}
                aria-label={`Show ${project.title} photo ${index + 1}`}
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={photo}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    width={220}
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const projects: ProjectGallery[] = projectGallery.filter(
    (project) =>
      project._id !== 'wr-project-nick-cappony' &&
      project._id !== 'wr-project-ceiling-wall-repair',
  );

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
              Our Work
            </p>
            <h1 className="mb-4 font-heading text-6xl leading-none text-white lg:text-8xl">
              Project Gallery
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-0.5 w-20 bg-accent-gold mb-6"
            />
            <p className="max-w-2xl font-paragraph text-base text-white/70 lg:text-lg">
              Real projects, real results. Browse recent work, detail shots, and finished exteriors from Will Rayners Custom Painting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── INTERACTIVE CASE STUDIES ─── */}
      <section className="pb-6 pt-12 lg:pb-8 lg:pt-16">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="mb-3 font-paragraph text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              Interactive Case Studies
            </p>
            <h2 className="max-w-3xl font-heading text-4xl leading-tight text-foreground lg:text-6xl">
              A closer look at recent work.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-8 lg:gap-10">
            <InteractiveProjectCard
              eyebrow="Featured Job"
              project={nickCapponyProject}
              highlights={[
                'Exterior repaint with carpentry updates, fresh trim work, and detailed finishing around doors, windows, and the garage.',
                'Multiple views show the finished home from the front, side, and entry areas.',
              ]}
            />
            <InteractiveProjectCard
              eyebrow="Repair & Repaint"
              project={ceilingWallRepairProject}
              highlights={[
                'Ceiling repair, wall patching, skim work, and repaint brought the room back to a clean finished look.',
                'The gallery shows the repair process along with the final result from several angles.',
              ]}
            />
            <InteractiveProjectCard
              eyebrow="Build Progress"
              project={postFrameBuildingProject}
              highlights={[
                'Post layout, framing, roof progress, and metal skin installation are shown from start to finish.',
                'The final photos show the completed shell from both the side and front opening.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─── MORE TRANSFORMATIONS ─── */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 max-w-3xl"
          >
            <p className="mb-3 font-paragraph text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              More Transformations
            </p>
            <h2 className="font-heading text-4xl leading-tight text-foreground lg:text-5xl">
              Before-and-after projects from the rest of the portfolio.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-16 lg:gap-24">
            {projects.map((project, index) => {
              const leftLabel = 'Before';
              const rightLabel = 'After';

              return (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                    <div className="relative overflow-hidden rounded-xl group">
                      <div className="aspect-[4/3]">
                        <Image
                          src={project.beforePhoto || siteImages.galleryFallback}
                          alt={`${project.projectTitle} — ${leftLabel}`}
                          width={800}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300" />
                      <span className="absolute left-3 top-3 bg-foreground/80 backdrop-blur-sm px-3 py-1.5 font-paragraph text-xs font-semibold uppercase tracking-widest text-white">
                        {leftLabel}
                      </span>
                    </div>
                    <div className="relative overflow-hidden rounded-xl group">
                      <div className="aspect-[4/3]">
                        <Image
                          src={project.afterPhoto || siteImages.galleryFallback}
                          alt={`${project.projectTitle} — ${rightLabel}`}
                          width={800}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300" />
                      <span className="absolute right-3 top-3 bg-accent-gold px-3 py-1.5 font-paragraph text-xs font-semibold uppercase tracking-widest text-foreground">
                        {rightLabel}
                      </span>
                    </div>
                  </div>

                  {project.projectDescription && (
                    <p className="max-w-2xl font-paragraph text-sm leading-relaxed text-secondary">
                      {project.projectDescription}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-accent-gold py-20 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, #16202a 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="mx-auto grid max-w-[100rem] items-center gap-10 px-6 lg:grid-cols-2 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-4 font-heading text-5xl text-foreground lg:text-6xl">
              Your project could be next.
            </h2>
            <p className="font-paragraph text-base text-foreground/70">
              Request a free estimate and let Will walk you through what the transformation will look like.
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-paragraph font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_6px_28px_rgba(28,53,87,0.35)]"
            >
              Get Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:6012600061"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/30 px-8 py-4 font-paragraph font-semibold text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground/5"
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
