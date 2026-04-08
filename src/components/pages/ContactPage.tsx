import { motion } from 'framer-motion';
import { Phone, MapPin, CheckCircle } from 'lucide-react';
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
      if (!response.ok) {
        throw new Error('Failed to send contact request');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send your request. Please try again or call us directly at (601) 260-0061.');
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
        address: '',
        serviceNeeded: '',
        projectDetails: '',
        preferredTimeline: '',
      });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
              Get Your Free Estimate
            </h1>
            <p className="font-paragraph text-lg lg:text-xl text-secondary max-w-3xl mx-auto">
              Fill out the form below or give us a call. We'll respond promptly with a straightforward estimate for your painting project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 lg:p-12 rounded-lg"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-3xl text-foreground mb-4">
                    Thank You!
                  </h2>
                  <p className="font-paragraph text-lg text-secondary">
                    We've received your estimate request and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-paragraph text-base text-foreground mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="font-paragraph text-base text-foreground mb-2 block">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-paragraph text-base text-foreground mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="font-paragraph text-base text-foreground mb-2 block">
                      Property Address *
                    </Label>
                    <Input
                      id="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceNeeded" className="font-paragraph text-base text-foreground mb-2 block">
                      Service Needed *
                    </Label>
                    <Select
                      value={formData.serviceNeeded}
                      onValueChange={(value) => handleChange('serviceNeeded', value)}
                      required
                    >
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
                    <Label htmlFor="projectDetails" className="font-paragraph text-base text-foreground mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="projectDetails"
                      required
                      value={formData.projectDetails}
                      onChange={(e) => handleChange('projectDetails', e.target.value)}
                      className="w-full min-h-[120px]"
                      placeholder="Please describe your project (rooms, square footage, colors, etc.)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredTimeline" className="font-paragraph text-base text-foreground mb-2 block">
                      Preferred Timeline
                    </Label>
                    <Select
                      value={formData.preferredTimeline}
                      onValueChange={(value) => handleChange('preferredTimeline', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="As soon as possible">As soon as possible</SelectItem>
                        <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                        <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                        <SelectItem value="2-3 months">2-3 months</SelectItem>
                        <SelectItem value="Flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground font-paragraph font-semibold px-8 py-6 text-lg rounded transition-colors hover:opacity-90"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Free Estimate'}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="font-paragraph text-base lg:text-lg text-secondary mb-8 leading-relaxed">
                  Prefer to call or email? We're here to help answer any questions you have about your painting project.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-paragraph text-lg font-semibold text-foreground mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:6012600061"
                      className="font-paragraph text-base text-secondary hover:text-primary transition-colors"
                    >
                      (601) 260-0061
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-paragraph text-lg font-semibold text-foreground mb-2">
                      Address
                    </h3>
                    <p className="font-paragraph text-base text-secondary">
                      116 Stockton Dr<br />
                      Flowood, MS 39232
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg mt-8">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Service Area
                </h3>
                <p className="font-paragraph text-base text-secondary leading-relaxed">
                  We proudly serve Flowood, Brandon, Jackson, Pearl, Madison, and nearby areas. Not sure if we cover your location? Give us a call and we'll let you know.
                </p>
              </div>

              <div className="bg-primary p-8 rounded-lg">
                <h3 className="font-heading text-2xl text-primary-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 font-paragraph text-base text-primary-foreground">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex gap-3 font-paragraph text-base text-primary-foreground">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Detailed, transparent estimate</span>
                  </li>
                  <li className="flex gap-3 font-paragraph text-base text-primary-foreground">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>No obligation or pressure</span>
                  </li>
                  <li className="flex gap-3 font-paragraph text-base text-primary-foreground">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Professional consultation</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
