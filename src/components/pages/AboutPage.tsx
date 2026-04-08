import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteImages } from '@/data/site-content';

const values = [
  {
    number: '01',
    title: 'Quality Craftsmanship',
    desc: 'Every surface gets the prep it needs. Clean lines, smooth finish, built to hold up.',
  },
  {
    number: '02',
    title: 'Hard Work',
    desc: 'Will takes pride in the work that bears his name — no shortcuts, no rush jobs.',
  },
  {
    number: '03',
    title: 'Trust',
    desc: 'Clear communication, honest pricing, and showing up when he says he will.',
  },
  {
    number: '04',
    title: 'Customer Focus',
    desc: 'Your home is personal. Every project is treated with the care that reflects that.',
  },
];

export default function AboutPage() {
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
              Who We Are
            </p>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none">
              About Will Rayners
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ─── STORY SECTION ─── */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
                A local painter who does things the right way.
              </h2>
              <div className="space-y-5 font-paragraph text-base text-secondary leading-relaxed">
                <p>
                  Will Rayners Custom Painting is a local business proudly serving Flowood, Mississippi and the surrounding communities. Every project is approached with the kind of care, consistency, and respect homeowners want when they invite someone into their space.
                </p>
                <p>
                  Will has built his reputation on doing solid work, communicating clearly, and taking the time to get the details right. Whether the project is a quick repaint or a more involved transformation, the goal stays the same: deliver results the customer feels proud of when the job is done.
                </p>
                <p>
                  From the first estimate to the final coat, the process is built around clear communication and quality that shows. If you're in the Flowood area and looking for dependable painting professionals, Will Rayners Custom Painting would be honored to help.
                </p>
              </div>

              {/* Quick facts */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: 'Based in', value: 'Flowood, MS' },
                  { label: 'Service Area', value: 'Jackson Metro' },
                  { label: 'Specialties', value: 'Interior & Exterior' },
                  { label: 'Estimates', value: 'Always Free' },
                ].map((fact) => (
                  <div key={fact.label} className="bg-muted p-5 rounded">
                    <p className="font-paragraph text-xs uppercase tracking-widest text-accent-gold font-semibold mb-1">{fact.label}</p>
                    <p className="font-heading text-xl text-foreground">{fact.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded">
                <Image
                  src={siteImages.aboutWork}
                  alt="Will Rayners Painting work"
                  width={700}
                  className="w-full h-full object-cover"
                  originWidth={1080}
                  originHeight={1636}
                  focalPointX={47.712962962962955}
                  focalPointY={30.751833740831298}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-accent-gold -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 lg:py-28 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="mb-14">
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">Our Values</p>
            <h2 className="font-heading text-5xl lg:text-6xl text-white">What drives every project.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-foreground p-8 lg:p-10"
              >
                <span className="font-heading text-5xl text-accent-gold italic leading-none block mb-4">
                  {v.number}
                </span>
                <h3 className="font-heading text-2xl text-white mb-3">{v.title}</h3>
                <p className="font-paragraph text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
            <div>
              <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">Why Choose Will?</p>
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-10">The difference you'll notice.</h2>

              <div className="flex flex-col gap-6">
                {[
                  { title: 'Local & Accountable', desc: 'Based in Flowood — Will is invested in the community he lives and works in.' },
                  { title: 'Proven Track Record', desc: 'Consistent five-star reviews pointing to quality work and a smooth experience.' },
                  { title: 'Clean & Respectful', desc: 'Work areas stay tidy. Your home is treated with care throughout the job.' },
                  { title: 'Transparent Pricing', desc: 'Detailed estimates with no hidden fees or surprise charges at the end.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-paragraph text-base font-semibold text-foreground mb-1">{item.title}</p>
                      <p className="font-paragraph text-sm text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Service area card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="bg-primary rounded p-8 lg:p-10 text-white mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-accent-gold" />
                  <h3 className="font-heading text-2xl text-white">Service Area</h3>
                </div>
                <p className="font-paragraph text-sm text-white/70 leading-relaxed mb-4">
                  Proudly serving homeowners across Flowood, Brandon, Jackson, Pearl, Madison, and nearby communities throughout the Jackson metro.
                </p>
                <p className="font-paragraph text-sm text-white/50">
                  116 Stockton Dr, Flowood, MS 39232
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent-gold text-foreground font-paragraph font-semibold px-8 py-4 rounded hover:bg-accent-gold/90 transition-colors"
                >
                  Get Free Estimate <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:6012600061"
                  className="inline-flex items-center justify-center gap-2 border-2 border-foreground/20 text-foreground font-paragraph font-semibold px-8 py-4 rounded hover:border-foreground/50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (601) 260-0061
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
