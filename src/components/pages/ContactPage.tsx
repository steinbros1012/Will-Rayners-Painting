import { motion } from 'framer-motion';
import { Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceNeeded: '',
    projectDetails: '',
    preferredTimeline: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to send');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send your request. Please try again or call us at (601) 260-0061.');
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', address: '', serviceNeeded: '', projectDetails: '', preferredTimeline: '' });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── SPLIT LAYOUT ─── */}
      <div className="min-h-screen grid lg:grid-cols-[1fr_1.2fr] pt-[65px]">

        {/* Left: Navy info panel */}
        <div
          className="bg-primary px-8 lg:px-14 py-16 lg:py-24 flex flex-col justify-center relative overflow-hidden"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(240,180,41,0.07) 0%, transparent 70%)' }}
        >
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
              Contact
            </p>
            <h1 className="font-heading text-5xl lg:text-6xl text-white leading-none mb-4">
              Let's talk about your project.
            </h1>
            {/* Gold accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-0.5 w-16 bg-accent-gold mb-8"
            />
            <p className="font-paragraph text-base text-white/70 mb-12 leading-relaxed">
              Fill out the form, or give Will a call. You'll get a clear, no-pressure estimate and straightforward answers about painting, sheet rock repair, pressure washing, and other home projects.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {[
                {
                  href: 'tel:6012600061',
                  icon: <Phone className="w-5 h-5" />,
                  label: 'Phone',
                  value: '(601) 260-0061',
                  isLink: true,
                },
                {
                  href: undefined,
                  icon: <MapPin className="w-5 h-5" />,
                  label: 'Address',
                  value: '116 Stockton Dr\nFlowood, MS 39232',
                  isLink: false,
                },
                {
                  href: undefined,
                  icon: <Clock className="w-5 h-5" />,
                  label: 'Response Time',
                  value: 'Within 24 hours',
                  isLink: false,
                },
              ].map((item, i) => {
                const content = (
                  <div className="flex items-center gap-4 group">
                    <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold transition-all duration-300">
                      <span className="text-white group-hover:text-foreground transition-colors duration-300">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-paragraph text-xs uppercase tracking-widest text-white/50 mb-0.5">{item.label}</p>
                      <p className="font-paragraph text-base text-white font-semibold whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                );

                return item.isLink ? (
                  <a key={i} href={item.href}>{content}</a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            {/* Expectations */}
            <div className="mt-12 border-t border-white/10 pt-10">
              <p className="font-paragraph text-xs uppercase tracking-widest text-accent-gold font-semibold mb-5">What to expect</p>
              <div className="flex flex-col gap-3">
                {[
                  'Fast response within 24 hours',
                  'Clear, detailed estimate',
                  'No obligation or pressure',
                  'Professional consultation',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-gold/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                    </div>
                    <span className="font-paragraph text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: White form panel */}
        <div className="bg-background px-8 lg:px-14 py-16 lg:py-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl w-full mx-auto"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-gold rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(240,180,41,0.4)]">
                  <CheckCircle2 className="w-8 h-8 text-foreground" />
                </div>
                <h2 className="font-heading text-4xl text-foreground mb-4">Thank You!</h2>
                <p className="font-paragraph text-base text-secondary">
                  We've received your request and will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-2">Request a Free Estimate</h2>
                <p className="font-paragraph text-sm text-secondary mb-8">All fields marked * are required.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full rounded-xl focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full rounded-xl focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all duration-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full rounded-xl focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Property Address *
                    </Label>
                    <Input
                      id="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      className="w-full rounded-xl focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all duration-200"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceNeeded" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Service Needed *
                    </Label>
                    <Select value={formData.serviceNeeded} onValueChange={(v) => handleChange('serviceNeeded', v)} required>
                      <SelectTrigger className="w-full rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Interior Painting">Interior Painting</SelectItem>
                        <SelectItem value="Exterior Painting">Exterior Painting</SelectItem>
                        <SelectItem value="Interior & Exterior">Interior & Exterior</SelectItem>
                        <SelectItem value="Cabinet Painting">Cabinet Painting</SelectItem>
                        <SelectItem value="Sheet Rock / Drywall Repair">Sheet Rock / Drywall Repair</SelectItem>
                        <SelectItem value="Pressure Washing">Pressure Washing</SelectItem>
                        <SelectItem value="Deck Staining">Deck Staining</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="projectDetails" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Project Details *
                    </Label>
                    <Textarea
                      id="projectDetails"
                      required
                      value={formData.projectDetails}
                      onChange={(e) => handleChange('projectDetails', e.target.value)}
                      className="w-full min-h-[110px] rounded-xl focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all duration-200"
                      placeholder="Rooms, square footage, colors, conditions — anything that helps."
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredTimeline" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Preferred Timeline
                    </Label>
                    <Select value={formData.preferredTimeline} onValueChange={(v) => handleChange('preferredTimeline', v)}>
                      <SelectTrigger className="w-full rounded-xl">
                        <SelectValue placeholder="Select a timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="As soon as possible">As soon as possible</SelectItem>
                        <SelectItem value="1-2 weeks">1–2 weeks</SelectItem>
                        <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                        <SelectItem value="2-3 months">2–3 months</SelectItem>
                        <SelectItem value="Flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-gold text-foreground font-paragraph font-semibold py-6 text-base rounded-full hover:bg-accent-gold/90 hover:shadow-[0_6px_28px_rgba(240,180,41,0.4)] transition-all duration-300 disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending…' : 'Request Free Estimate'}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
