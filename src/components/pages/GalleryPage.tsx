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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,32,0.08)]"
    >
      <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="bg-[#0f1720] p-8 text-white md:p-10 lg:p-12">
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
              <p key={highlight}>{highlight}</p>
            ))}
          </div>
        </div>

        <div className="bg-[#efe7db] p-4 md:p-5">
          <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_40px_rgba(15,23,32,0.08)]">
            <div className="aspect-[4/3]">
              <Image
                src={activePhoto}
                alt={`${project.title} gallery view ${activeIndex + 1}`}
                width={1200}
                className="h-full w-full object-cover"
              />
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d1c1a7] bg-white text-foreground transition-colors hover:bg-[#f8f1e7]"
                aria-label={`Previous ${project.title} photo`}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d1c1a7] bg-white text-foreground transition-colors hover:bg-[#f8f1e7]"
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
                className={`overflow-hidden rounded-2xl border-2 transition-all ${
                  activeIndex === index
                    ? 'border-accent-gold shadow-[0_12px_30px_rgba(240,194,123,0.35)]'
                    : 'border-transparent hover:border-[#d1c1a7]'
                }`}
                aria-label={`Show ${project.title} photo ${index + 1}`}
              >
                <div className="aspect-square">
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

      <section className="pb-6 pt-12 lg:pb-8 lg:pt-16">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
          <div className="mb-8">
            <p className="mb-3 font-paragraph text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              Interactive Case Studies
            </p>
            <h2 className="max-w-3xl font-heading text-4xl leading-tight text-foreground lg:text-6xl">
              Click through Will&apos;s featured work without scrolling through oversized photo walls.
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:gap-10">
            <InteractiveProjectCard
              eyebrow="Featured Job"
              project={nickCapponyProject}
              highlights={[
                "Nick's review called out fast response time, a clear estimate, strong communication, and a crew that delivered excellent work.",
                'This exterior project shows the home from multiple finished angles, plus detail work around trim, windows, garage, and doors.',
              ]}
            />

            <InteractiveProjectCard
              eyebrow="Repair & Repaint"
              project={ceilingWallRepairProject}
              highlights={[
                'This job moved from visible ceiling and wall damage into patched, blended, and repainted surfaces that feel clean again.',
                'I focused the gallery on the strongest progress and finished-room shots so visitors can click through the story without the page getting too heavy.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-16">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-paragraph text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
              More Transformations
            </p>
            <h2 className="font-heading text-4xl leading-tight text-foreground lg:text-5xl">
              Before-and-after projects from the rest of the portfolio.
            </h2>
          </div>
          <div className="flex flex-col gap-16 lg:gap-24">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {(() => {
                  const isProjectViews = project._id === 'wr-project-brick-wall-retaining';
                  const leftLabel = isProjectViews ? 'View 1' : 'Before';
                  const rightLabel = isProjectViews ? 'View 2' : 'After';
                  const leftAlt = `${project.projectTitle} — ${leftLabel}`;
                  const rightAlt = `${project.projectTitle} — ${rightLabel}`;

                  return (
                    <>
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
                        alt={leftAlt}
                        width={800}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="absolute left-3 top-3 bg-foreground/80 px-3 py-1.5 font-paragraph text-xs font-semibold uppercase tracking-widest text-white">
                      {leftLabel}
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <Image
                        src={project.afterPhoto || siteImages.galleryFallback}
                        alt={rightAlt}
                        width={800}
                        className="h-full w-full object-cover"
                      />
                    </div>
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
                    </>
                  );
                })()}
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
