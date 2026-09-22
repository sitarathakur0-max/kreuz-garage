import React from 'react';
import { Phone, MapPin, Mail, ExternalLink, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { ContactForm } from '../ContactForm';
import { MapSection } from '../MapSection';
import { ServicePillarId } from '../../types';

interface ContactPageProps {
  initialServiceId?: ServicePillarId;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Page Header */}
      <section className="bg-[#123524] text-[#F8F7F4] py-14 sm:py-16 border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C4533] border border-[#2F6D52]">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E5A93C] font-bold">
                Contact & Directions • Haag (SG)
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white">
              Contact the Garage
            </h1>
            <p className="text-[#C3D5CA] text-lg leading-relaxed">
              Get in touch with Kreuz Garage Gebr. Görgin GmbH. Reach us directly by telephone or visit our premises on Rheinstrasse in Haag, Switzerland.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section: Contact Cards + Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Business Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg border border-[#E6E2D8] p-6 sm:p-7 shadow-xs space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-bold block mb-1">
                  Official Contact Details
                </span>
                <h2 className="font-display font-black text-2xl uppercase tracking-tight text-[#123524]">
                  {BUSINESS_INFO.name}
                </h2>
                <p className="text-xs text-[#596561] mt-0.5">
                  Category: {BUSINESS_INFO.category}
                </p>
              </div>

              {/* Telephone Card */}
              <div className="p-4 bg-[#F8F7F4] rounded border-l-4 border-[#E5A93C] space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#596561] block">
                  Primary Telephone
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="font-mono text-2xl font-black text-[#123524] hover:text-[#B45309] transition-colors block"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-xs text-[#596561]">
                  Clickable direct dial for inquiries, appointments & roadside service questions.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-4 bg-[#F8F7F4] rounded border-l-4 border-[#123524] space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#596561] block">
                  Premises & Forecourt Address
                </span>
                <p className="text-base font-bold text-[#123524]">
                  {BUSINESS_INFO.street}
                </p>
                <p className="text-sm text-[#37413E]">
                  {BUSINESS_INFO.postalCode} {BUSINESS_INFO.locality}, {BUSINESS_INFO.country}
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123524] hover:text-[#B45309] mt-2 pt-1 border-t border-[#E6E2D8]"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Open Route in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Summary Description */}
              <div className="text-xs text-[#596561] leading-relaxed border-t border-[#E6E2D8] pt-4">
                <p>
                  <strong>Service Scope:</strong> {BUSINESS_INFO.description}. We welcome motorists traveling through the St. Gallen Rhine Valley and local residents in Haag.
                </p>
              </div>
            </div>

            {/* Quick Call Action Plaque */}
            <div className="bg-[#123524] text-white rounded-lg p-6 border-2 border-[#E5A93C] text-center space-y-3">
              <h3 className="font-display font-bold text-xl uppercase tracking-wider text-[#E5A93C]">
                Prefer to Speak Immediately?
              </h3>
              <p className="text-xs text-[#C3D5CA]">
                Call our direct phone line at our Haag facility for quick assistance.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded bg-[#E5A93C] text-[#123524] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#F3BA54] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call 081 771 16 16 Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm initialArea={initialServiceId || 'general'} />
          </div>
        </div>
      </section>

      {/* Map and Directions Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MapSection />
      </section>
    </div>
  );
};
