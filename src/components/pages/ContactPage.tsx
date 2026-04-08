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
        <div className="bg-primary px-8 lg:px-14 py-16 lg:py-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
              Contact
            </p>
            <h1 className="font-heading text-5xl lg:text-6xl text-white leading-none mb-6">
              Let's talk about your project.
            </h1>
            <p className="font-paragraph text-base text-white/70 mb-12 leading-relaxed">
              Fill out the form, or give Will a call. You'll get a clear, no-pressure estimate and straightforward answers about your painting project.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-7">
              <a href="tel:6012600061" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-white/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold transition-colors">
                  <Phone className="w-5 h-5 text-white group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-paragraph text-xs uppercase tracking-widest text-white/50 mb-0.5">Phone</p>
                  <p className="font-paragraph text-base text-white font-semibold">(601) 260-0061</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-paragraph text-xs uppercase tracking-widest text-white/50 mb-0.5">Address</p>
                  <p className="font-paragraph text-base text-white">
                    116 Stockton Dr<br />Flowood, MS 39232
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-paragraph text-xs uppercase tracking-widest text-white/50 mb-0.5">Response Time</p>
                  <p className="font-paragraph text-base text-white">Within 24 hours</p>
                </div>
              </div>
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
                    <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl w-full mx-auto"
          >
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-gold rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-foreground" />
                </div>
                <h2 className="font-heading text-4xl text-foreground mb-4">Thank You!</h2>
                <p className="font-paragraph text-base text-secondary">
                  We've received your request and will be in touch shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-8">Request a Free Estimate</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Full Name *
                    </Label>
                    <Input id="name" type="text" required value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)} className="w-full" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                        Phone *
                      </Label>
                      <Input id="phone" type="tel" required value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)} className="w-full" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                        Email *
                      </Label>
                      <Input id="email" type="email" required value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)} className="w-full" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Property Address *
                    </Label>
                    <Input id="address" type="text" required value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)} className="w-full" />
                  </div>

                  <div>
                    <Label htmlFor="serviceNeeded" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Service Needed *
                    </Label>
                    <Select value={formData.serviceNeeded} onValueChange={(v) => handleChange('serviceNeeded', v)} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Interior Painting">Interior Painting</SelectItem>
                        <SelectItem value="Exterior Painting">Exterior Painting</SelectItem>
                        <SelectItem value="Interior & Exterior">Interior & Exterior</SelectItem>
                        <SelectItem value="Cabinet Painting">Cabinet Painting</SelectItem>
                        <SelectItem value="Deck Staining">Deck Staining</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="projectDetails" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Project Details *
                    </Label>
                    <Textarea id="projectDetails" required value={formData.projectDetails}
                      onChange={(e) => handleChange('projectDetails', e.target.value)}
                      className="w-full min-h-[110px]"
                      placeholder="Rooms, square footage, colors, conditions — anything that helps." />
                  </div>

                  <div>
                    <Label htmlFor="preferredTimeline" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">
                      Preferred Timeline
                    </Label>
                    <Select value={formData.preferredTimeline} onValueChange={(v) => handleChange('preferredTimeline', v)}>
                      <SelectTrigger className="w-full">
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
                    className="w-full bg-accent-gold text-foreground font-paragraph font-semibold py-6 text-base rounded hover:bg-accent-gold/90 transition-colors"
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
