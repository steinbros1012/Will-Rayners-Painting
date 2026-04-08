import { motion } from 'framer-motion';
import { Phone, CheckCircle } from 'lucide-react';
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

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a property type';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
      if (!response.ok) {
        throw new Error('Failed to submit estimate request');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit your request. Please try again or call us directly at (601) 260-0061.');
    } finally {
      setIsSubmitting(false);
    }

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        propertyType: '',
        timeline: '',
        projectDetails: '',
      });
      setErrors({});
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-4">
                Get a Free Painting Estimate
              </h2>
              <p className="font-paragraph text-lg text-secondary leading-relaxed">
                Fast response, clear pricing, and detail-focused work for homes across Flowood and the Jackson metro.
              </p>
            </div>

            {/* Call Button */}
            <motion.a
              href="tel:6012600061"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded font-paragraph font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-6 h-6" />
              Call Now: (601) 260-0061
            </motion.a>

            {/* Benefits */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-base text-foreground">Quick response within 24 hours</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-base text-foreground">Clear, transparent pricing</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-base text-foreground">No obligation or pressure</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-base text-foreground">Professional consultation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background p-8 lg:p-10 rounded-lg"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  Thank You!
                </h3>
                <p className="font-paragraph text-base text-secondary">
                  We've received your estimate request and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="est-name" className="font-paragraph text-sm text-foreground mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="est-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && (
                    <p className="font-paragraph text-sm text-red-600 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="est-phone" className="font-paragraph text-sm text-foreground mb-2 block">
                    Phone *
                  </Label>
                  <Input
                    id="est-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="(601) 000-0000"
                    className={`w-full ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="font-paragraph text-sm text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="est-email" className="font-paragraph text-sm text-foreground mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="est-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="font-paragraph text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="est-service" className="font-paragraph text-sm text-foreground mb-2 block">
                    Service Type *
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleChange('serviceType', value)}
                    required
                  >
                    <SelectTrigger className={`w-full ${errors.serviceType ? 'border-red-500' : ''}`}>
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
                  {errors.serviceType && (
                    <p className="font-paragraph text-sm text-red-600 mt-1">{errors.serviceType}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="est-property" className="font-paragraph text-sm text-foreground mb-2 block">
                    Property Type *
                  </Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => handleChange('propertyType', value)}
                    required
                  >
                    <SelectTrigger className={`w-full ${errors.propertyType ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select a property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residential Home">Residential Home</SelectItem>
                      <SelectItem value="Commercial Building">Commercial Building</SelectItem>
                      <SelectItem value="Apartment/Condo">Apartment/Condo</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.propertyType && (
                    <p className="font-paragraph text-sm text-red-600 mt-1">{errors.propertyType}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="est-timeline" className="font-paragraph text-sm text-foreground mb-2 block">
                    Desired Timeline *
                  </Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => handleChange('timeline', value)}
                    required
                  >
                    <SelectTrigger className={`w-full ${errors.timeline ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select a timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="As soon as possible">As soon as possible</SelectItem>
                      <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                      <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                      <SelectItem value="Flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.timeline && (
                    <p className="font-paragraph text-sm text-red-600 mt-1">{errors.timeline}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="est-details" className="font-paragraph text-sm text-foreground mb-2 block">
                    Project Details
                  </Label>
                  <textarea
                    id="est-details"
                    value={formData.projectDetails}
                    onChange={(e) => handleChange('projectDetails', e.target.value)}
                    placeholder="Tell us more about your project..."
                    rows={3}
                    className="w-full px-4 py-3 font-paragraph text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-paragraph font-semibold px-6 py-3 text-base rounded transition-colors hover:opacity-90"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Estimate'}
                </Button>

                <p className="font-paragraph text-xs text-secondary text-center">
                  * Required fields
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
