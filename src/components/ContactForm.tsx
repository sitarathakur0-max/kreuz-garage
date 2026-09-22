import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, ArrowRight, RotateCcw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { ContactFormData, FormErrors, ServicePillarId } from '../types';

interface ContactFormProps {
  initialArea?: ServicePillarId | 'general';
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialArea = 'general' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    inquiryArea: initialArea,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const hasEmail = Boolean(formData.email.trim());
    const hasPhone = Boolean(formData.phone.trim());

    if (!hasEmail && !hasPhone) {
      newErrors.contact = 'Please provide either an email address or telephone number.';
    } else {
      if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.contact = 'Please enter a valid email format (e.g. name@domain.ch).';
      }
      if (hasPhone && formData.phone.trim().length < 7) {
        newErrors.contact = 'Please enter a valid contact telephone number.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message describing your request.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters so we can assist you properly.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryArea: 'general',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg border-2 border-[#123524] p-8 shadow-sm text-center">
        <div className="w-16 h-16 bg-[#E5A93C]/20 border border-[#E5A93C] text-[#123524] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-[#123524]" />
        </div>
        <h3 className="font-display font-black text-2xl uppercase tracking-wider text-[#123524] mb-2">
          Thank You, {formData.name}
        </h3>
        <p className="text-[#37413E] text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Your inquiry regarding <strong className="text-[#123524] uppercase">{formData.inquiryArea}</strong> has been received by Kreuz Garage Gebr. Görgin GmbH.
        </p>
        <div className="p-4 bg-[#F8F7F4] border border-[#E6E2D8] rounded-md max-w-md mx-auto mb-6 text-xs text-[#596561] text-left">
          <p className="font-bold text-[#123524] mb-1">Need an immediate answer?</p>
          <p>
            For urgent vehicle questions or roadside inquiries in Haag, please call our workshop directly at{' '}
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-[#123524] font-bold underline">
              {BUSINESS_INFO.phone}
            </a>.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#123524] text-white font-display font-bold text-sm uppercase tracking-wider hover:bg-[#1E4E37] transition-colors"
        >
          <RotateCcw className="w-4 h-4 text-[#E5A93C]" />
          <span>Send Another Message</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-[#E6E2D8] p-6 sm:p-8 shadow-xs">
      <div className="flex items-center justify-between border-b border-[#E6E2D8] pb-4 mb-6">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#E5A93C] font-bold block">
            Direct Inquiries
          </span>
          <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#123524]">
            Send an Inquiry to the Garage
          </h3>
        </div>
        <div className="hidden sm:block text-right">
          <span className="text-xs text-[#596561] block">Or call directly:</span>
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="font-mono text-sm font-bold text-[#123524] hover:text-[#E5A93C] transition-colors"
          >
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="contact-name" className="block font-display font-bold text-xs uppercase tracking-wider text-[#123524] mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="e.g. Thomas Keller"
            className={`w-full px-4 py-2.5 rounded border text-sm text-[#1C2321] placeholder-[#9E9B93] focus:outline-none focus:ring-2 focus:ring-[#123524] transition-all ${
              errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#D5D0C5] bg-[#FDFCFB]'
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Contact Info (Email & Phone) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-email" className="block font-display font-bold text-xs uppercase tracking-wider text-[#123524] mb-1.5">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.contact) setErrors({ ...errors, contact: undefined });
              }}
              placeholder="e.g. name@example.ch"
              className={`w-full px-4 py-2.5 rounded border text-sm text-[#1C2321] placeholder-[#9E9B93] focus:outline-none focus:ring-2 focus:ring-[#123524] transition-all ${
                errors.contact && !formData.phone ? 'border-red-500 bg-red-50/20' : 'border-[#D5D0C5] bg-[#FDFCFB]'
              }`}
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block font-display font-bold text-xs uppercase tracking-wider text-[#123524] mb-1.5">
              Phone Number
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.contact) setErrors({ ...errors, contact: undefined });
              }}
              placeholder="e.g. 079 123 45 67"
              className={`w-full px-4 py-2.5 rounded border text-sm text-[#1C2321] placeholder-[#9E9B93] focus:outline-none focus:ring-2 focus:ring-[#123524] transition-all ${
                errors.contact && !formData.email ? 'border-red-500 bg-red-50/20' : 'border-[#D5D0C5] bg-[#FDFCFB]'
              }`}
            />
          </div>
        </div>

        {errors.contact && (
          <p className="text-xs text-red-600 -mt-2 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.contact}</span>
          </p>
        )}

        {/* Inquiry Subject / Area */}
        <div>
          <label htmlFor="contact-area" className="block font-display font-bold text-xs uppercase tracking-wider text-[#123524] mb-1.5">
            Operational Area of Interest
          </label>
          <select
            id="contact-area"
            value={formData.inquiryArea}
            onChange={(e) => setFormData({ ...formData, inquiryArea: e.target.value as any })}
            className="w-full px-4 py-2.5 rounded border border-[#D5D0C5] bg-[#FDFCFB] text-sm text-[#1C2321] focus:outline-none focus:ring-2 focus:ring-[#123524] transition-all font-medium"
          >
            <option value="general">General Inquiry</option>
            <option value="garage">Garage & Vehicle Services</option>
            <option value="workshop">Mechanical Workshop</option>
            <option value="station">Service Station & Forecourt</option>
            <option value="cafe">Café Shop</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block font-display font-bold text-xs uppercase tracking-wider text-[#123524] mb-1.5">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Tell us what you require or what vehicle questions you have..."
            className={`w-full px-4 py-2.5 rounded border text-sm text-[#1C2321] placeholder-[#9E9B93] focus:outline-none focus:ring-2 focus:ring-[#123524] transition-all resize-y ${
              errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#D5D0C5] bg-[#FDFCFB]'
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Notice on direct calling */}
        <div className="bg-[#F8F7F4] border-l-2 border-[#E5A93C] p-3 text-xs text-[#596561]">
          <span>For urgent repairs or immediate roadside questions, call us directly at </span>
          <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="font-bold text-[#123524] hover:underline">
            {BUSINESS_INFO.phone}
          </a>.
        </div>

        {/* Submit Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#123524] text-white font-display font-bold text-sm uppercase tracking-wider hover:bg-[#1E4E37] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#123524] transition-all shadow-xs disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Sending inquiry...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4 text-[#E5A93C]" />
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-4 py-3 rounded border border-[#D5D0C5] text-[#596561] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#EAE7DF] transition-colors"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
