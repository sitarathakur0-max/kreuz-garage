import React from 'react';
import { Phone, MapPin, Navigation, ArrowUpRight, Shield, Fuel, Wrench, Coffee } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#123524] text-[#F8F7F4] border-t-4 border-[#E5A93C] relative overflow-hidden">
      {/* Subtle road line graphic divider */}
      <div className="h-2 w-full road-line-pattern opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Core Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E5A93C] text-[#123524] rounded flex items-center justify-center font-display font-black text-xl">
                K
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-tight text-white block">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                  Garage • Service • Haag (SG)
                </span>
              </div>
            </div>

            <p className="text-[#B5C7BD] text-sm leading-relaxed max-w-md">
              {BUSINESS_INFO.description}. Providing essential automotive care, mechanical workshop services, convenient refuelling, and a welcoming café shop right on Rheinstrasse in Haag.
            </p>

            {/* Swiss Quality & Roadside Presence Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-[#1A4532] border border-[#2B6149] text-xs text-[#E1EAE5]">
                <span className="w-2 h-2 rounded-full bg-[#E5A93C]"></span>
                <span className="font-mono uppercase tracking-wider text-[11px]">
                  Canton St. Gallen • 9469 Haag • Switzerland
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation & Operational Areas */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-[#E5A93C] border-b border-[#245840] pb-2">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#D4E0D9] hover:text-[#E5A93C] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#E5A93C] opacity-60 group-hover:opacity-100">›</span>
                  <span>Home Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#D4E0D9] hover:text-[#E5A93C] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#E5A93C] opacity-60 group-hover:opacity-100">›</span>
                  <span>About Kreuz Garage</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#D4E0D9] hover:text-[#E5A93C] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#E5A93C] opacity-60 group-hover:opacity-100">›</span>
                  <span>All Services & Offerings</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#D4E0D9] hover:text-[#E5A93C] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#E5A93C] opacity-60 group-hover:opacity-100">›</span>
                  <span>Contact & Directions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact & Location */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-[#E5A93C] border-b border-[#245840] pb-2">
              Visit or Call
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-[#D4E0D9]">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">{BUSINESS_INFO.street}</p>
                  <p>{BUSINESS_INFO.postalCode} {BUSINESS_INFO.locality}, {BUSINESS_INFO.country}</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#E5A93C] hover:underline mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <div>
                  <span className="text-xs uppercase text-[#9EB3A6] block">Direct Telephone</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="font-mono text-base font-bold text-[#E5A93C] hover:text-white transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#E5A93C] text-[#123524] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#F3BA54] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 081 771 16 16 Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Neutral Attribution */}
        <div className="mt-12 pt-6 border-t border-[#1C4533] flex flex-col sm:flex-row items-center justify-between text-xs text-[#89A193] gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Registered Swiss business in 9469 Haag.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Category: {BUSINESS_INFO.category}</span>
            <span>•</span>
            <span>Haag, St. Gallen, Switzerland</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
