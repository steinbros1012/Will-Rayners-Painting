import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { PaintingServices } from '@/entities';
import { paintingServices } from '@/data/site-content';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  propertyType: string;
  squareFootage: string;
  timeline: string;
  description: string;
}

interface FormUIErrors {
  [key: string]: string;
}

export default function EstimateForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    propertyType: '',
    squareFootage: '',
    timeline: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormUIErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [services, setServices] = useState<PaintingServices[]>([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setServices(paintingServices);
    } catch (error) {
      console.error('Error loading services:', error);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormUIErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit estimate request');
      }

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your estimate request has been submitted. We\'ll contact you within 24 hours.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        propertyType: '',
        squareFootage: '',
        timeline: '',
        description: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('There was an error submitting your form. Please try again or call us directly at (601) 260-0061.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="font-paragraph text-sm text-green-800">{submitMessage}</p>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="font-paragraph text-sm text-red-800">{submitMessage}</p>
        </motion.div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-4 py-3 font-paragraph text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
            errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
          placeholder="John Smith"
        />
        {errors.fullName && (
          <p className="font-paragraph text-sm text-red-600 mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 font-paragraph text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="font-paragraph text-sm text-red-600 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 font-paragraph text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
            errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
          placeholder="(601) 555-0123"
        />
        {errors.phone && (
          <p className="font-paragraph text-sm text-red-600 mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
          Project Type *
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className={`w-full px-4 py-3 font-paragraph text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
            errors.projectType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a project type</option>
          {services.map((service) => (
            <option key={service._id} value={service.serviceName}>
              {service.serviceName}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="font-paragraph text-sm text-red-600 mt-1">{errors.projectType}</p>
        )}
      </div>

      {/* Property Type */}
      <div>
        <label htmlFor="propertyType" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
          Property Type *
        </label>
        <select
          id="propertyType"
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className={`w-full px-4 py-3 font-paragraph text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
            errors.propertyType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a property type</option>
          <option value="Residential Home">Residential Home</option>
          <option value="Commercial Building">Commercial Building</option>
          <option value="Apartment/Condo">Apartment/Condo</option>
          <option value="Other">Other</option>
        </select>
        {errors.propertyType && (
          <p className="font-paragraph text-sm text-red-600 mt-1">{errors.propertyType}</p>
        )}
      </div>

      {/* Square Footage */}
      <div>
        <label htmlFor="squareFootage" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
          Approximate Square Footage
        </label>
        <input
          type="text"
          id="squareFootage"
          name="squareFootage"
          value={formData.squareFootage}
          onChange={handleChange}
          className="w-full px-4 py-3 font-paragraph text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="e.g., 2,500 sq ft"
        />
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
          Desired Timeline *
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className={`w-full px-4 py-3 font-paragraph text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
            errors.timeline ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a timeline</option>
          <option value="As soon as possible">As soon as possible</option>
          <option value="1-2 weeks">1-2 weeks</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="Flexible">Flexible</option>
        </select>
        {errors.timeline && (
          <p className="font-paragraph text-sm text-red-600 mt-1">{errors.timeline}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
          Project Details
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 font-paragraph text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          placeholder="Tell us more about your project, any specific colors, finishes, or concerns..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-primary text-primary-foreground px-6 py-4 rounded font-paragraph font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Get Your Free Estimate'}
      </motion.button>

      <p className="font-paragraph text-xs text-secondary text-center">
        * Required fields
      </p>
    </form>
  );
}
