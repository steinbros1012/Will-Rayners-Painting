import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function EstimateSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    propertyType: '',
    timeline: '',
    projectDetails: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.phone.trim()) e.phone = 'Phone is required';
    if (!formData.serviceType) e.serviceType = 'Select a service';
    if (!formData.propertyType) e.propertyType = 'Select a property type';
    if (!formData.timeline) e.timeline = 'Select a timeline';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.serviceType,
          propertyType: formData.propertyType,
          squareFootage: '',
          timeline: formData.timeline,
          description: formData.projectDetails,
        }),
      });
      if (!response.ok) throw new Error('Failed');
      setIsSubmitted(true);
    } catch {
      alert('Failed to submit. Please call us at (601) 260-0061.');
    } finally {
      setIsSubmitting(false);
    }
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', serviceType: '', propertyType: '', timeline: '', projectDetails: '' });
      setErrors({});
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full bg-foreground py-20 lg:py-28">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-paragraph text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
              Free Estimates
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-white mb-6">
              Get a quote for your project.
            </h2>
            <p className="font-paragraph text-base text-white/60 mb-10 leading-relaxed">
              Fast response, clear pricing, and detail-focused work for homes across Flowood, Pearl, Gluckstadt, Brandon, Ridgeland, Madison, Crystal Springs, Jackson, and nearby communities.
            </p>

            <a
              href="tel:6012600061"
              className="inline-flex items-center gap-3 bg-accent-gold text-foreground font-paragraph font-semibold px-8 py-4 rounded-full hover:bg-accent-gold/90 hover:shadow-[0_6px_28px_rgba(240,180,41,0.4)] transition-all duration-300 mb-10"
            >
              <Phone className="w-5 h-5" />
              Call Now: (601) 260-0061
            </a>

            <div className="flex flex-col gap-3">
              {[
                'Response within 24 hours',
                'Clear, transparent pricing',
                'No obligation or pressure',
                'Professional consultation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
                  <span className="font-paragraph text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_16px_60px_rgba(0,0,0,0.08)]"
          >
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto mb-5 bg-accent-gold rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-heading text-3xl text-foreground mb-3">Thank You!</h3>
                <p className="font-paragraph text-sm text-secondary">We've received your request and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="est-name" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">Name *</Label>
                  <Input id="est-name" type="text" required value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className={`w-full ${errors.name ? 'border-red-500' : ''}`} />
                  {errors.name && <p className="font-paragraph text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="est-phone" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">Phone *</Label>
                    <Input id="est-phone" type="tel" required value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="(601) 000-0000"
                      className={`w-full ${errors.phone ? 'border-red-500' : ''}`} />
                    {errors.phone && <p className="font-paragraph text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Label htmlFor="est-email" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">Email *</Label>
                    <Input id="est-email" type="email" required value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className={`w-full ${errors.email ? 'border-red-500' : ''}`} />
                    {errors.email && <p className="font-paragraph text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="est-service" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">Service Type *</Label>
                  <Select value={formData.serviceType} onValueChange={(v) => handleChange('serviceType', v)} required>
                    <SelectTrigger className={`w-full ${errors.serviceType ? 'border-red-500' : ''}`}>
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
                  {errors.serviceType && <p className="font-paragraph text-xs text-red-600 mt-1">{errors.serviceType}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="est-property" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">Property Type *</Label>
                    <Select value={formData.propertyType} onValueChange={(v) => handleChange('propertyType', v)} required>
                      <SelectTrigger className={`w-full ${errors.propertyType ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Residential Home">Residential Home</SelectItem>
                        <SelectItem value="Commercial Building">Commercial Building</SelectItem>
                        <SelectItem value="Apartment/Condo">Apartment/Condo</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.propertyType && <p className="font-paragraph text-xs text-red-600 mt-1">{errors.propertyType}</p>}
                  </div>
                  <div>
                    <Label htmlFor="est-timeline" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">Timeline *</Label>
                    <Select value={formData.timeline} onValueChange={(v) => handleChange('timeline', v)} required>
                      <SelectTrigger className={`w-full ${errors.timeline ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="As soon as possible">ASAP</SelectItem>
                        <SelectItem value="1-2 weeks">1–2 weeks</SelectItem>
                        <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                        <SelectItem value="Flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.timeline && <p className="font-paragraph text-xs text-red-600 mt-1">{errors.timeline}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="est-details" className="font-paragraph text-sm text-foreground mb-1.5 block font-medium">Project Details</Label>
                  <textarea
                    id="est-details"
                    value={formData.projectDetails}
                    onChange={(e) => handleChange('projectDetails', e.target.value)}
                    placeholder="Tell us more about your project..."
                    rows={3}
                    className="w-full px-3 py-2.5 font-paragraph text-sm border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-gold text-foreground font-paragraph font-semibold py-5 text-sm rounded-full hover:bg-accent-gold/90 hover:shadow-[0_6px_28px_rgba(240,180,41,0.4)] transition-all duration-300"
                >
                  {isSubmitting ? 'Sending…' : 'Get Free Estimate'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
