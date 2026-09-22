import React from 'react';
import { Phone, MapPin, ArrowRight, Wrench, Fuel, Coffee, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, CURATED_IMAGES, SERVICE_PILLARS } from '../../data/business';
import { Page, ServicePillarId } from '../../types';
import { MapSection } from '../MapSection';

interface HomePageProps {
  onNavigate: (page: Page, serviceId?: ServicePillarId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. DISTINCTIVE SPLIT-LAYOUT HERO */}
      <section className="relative overflow-hidden bg-[#123524] text-[#F8F7F4] border-b-4 border-[#E5A93C]">
        {/* Road line motif across top of hero */}
        <div className="h-1.5 w-full road-line-pattern opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Signage typography & brand story */}
            <div className="lg:col-span-7 space-y-6">
              {/* Retro-Swiss Signage Road Plaque */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1C4533] border border-[#2F6D52] shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#E5A93C] font-bold">
                  Rheinstrasse 1 • 9469 Haag • Switzerland
                </span>
              </div>

              {/* Bold Condensed Typography Headline */}
              <div className="space-y-2">
                <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white uppercase">
                  {BUSINESS_INFO.name}
                </h1>
                <p className="font-display font-bold text-lg sm:text-2xl text-[#E5A93C] tracking-wide uppercase pt-1">
                  Garage • Service Station • Workshop • Café Shop
                </p>
              </div>

              {/* Authentic Business Description */}
              <p className="text-[#C3D5CA] text-base sm:text-lg leading-relaxed max-w-2xl">
                A true integrated roadside automotive destination in Haag. We combine hands-on mechanical garage expertise, modern workshop equipment, convenient service-station refuelling, and a welcoming café shop—all at a single accessible location on Rheinstrasse 1.
              </p>

              {/* Primary Call-to-Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded bg-[#E5A93C] text-[#123524] font-display font-bold text-base uppercase tracking-wider hover:bg-[#F3BA54] shadow-md hover:shadow-lg transition-all"
                  id="hero-call-now"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 081 771 16 16</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border-2 border-white/80 text-white font-display font-bold text-base uppercase tracking-wider hover:bg-white hover:text-[#123524] transition-all"
                  id="hero-contact-garage"
                >
                  <span>Contact the Garage</span>
                  <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-[#D4E0D9] hover:text-[#E5A93C] font-display font-bold text-sm uppercase tracking-wider transition-colors"
                >
                  <span>Explore Offerings</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Roadside Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#1F4C37] text-xs">
                <div className="flex items-center gap-2 text-[#D4E0D9]">
                  <Wrench className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span className="font-medium">Active Workshop</span>
                </div>
                <div className="flex items-center gap-2 text-[#D4E0D9]">
                  <Fuel className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span className="font-medium">Service Station</span>
                </div>
                <div className="flex items-center gap-2 text-[#D4E0D9]">
                  <Coffee className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span className="font-medium">On-Site Café Shop</span>
                </div>
                <div className="flex items-center gap-2 text-[#D4E0D9]">
                  <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span className="font-medium">Haag Location</span>
                </div>
              </div>
            </div>

            {/* Right Column: Framed architectural/service imagery */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Architectural Offset Accent Frame */}
                <div className="absolute -inset-2 rounded-lg border-2 border-[#E5A93C]/40 translate-x-2 translate-y-2 pointer-events-none"></div>

                <div className="relative rounded-lg overflow-hidden border-2 border-white/20 bg-[#0F281F] shadow-2xl group">
                  <img
                    src={CURATED_IMAGES.hero}
                    alt={CURATED_IMAGES.heroAlt}
                    className="w-full h-80 sm:h-96 object-cover brightness-[0.92] group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />

                  {/* Roadside Plaque Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B251B] via-[#0B251B]/80 to-transparent p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-[#E5A93C] block font-bold">
                          Service & Maintenance
                        </span>
                        <p className="font-display font-bold text-lg uppercase tracking-wide">
                          Rheinstrasse 1 • 9469 Haag
                        </p>
                      </div>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneClean}`}
                        className="p-2.5 rounded bg-[#E5A93C] text-[#123524] hover:bg-white transition-colors"
                        title="Call Now"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR PILLARS UNDER ONE ROOF - VARIED SECTION LAYOUTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#123524]/10 text-[#123524] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C]"></span>
            Complete Destination
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#123524]">
            Four Key Offerings on Rheinstrasse
          </h2>
          <p className="text-[#596561] text-base leading-relaxed">
            From vehicle servicing and mechanical repair to quick refuelling and a restorative coffee break, Kreuz Garage Gebr. Görgin GmbH serves all motoring needs in Haag.
          </p>
        </div>

        {/* Varied Section Layout - Alternating architectural feature blocks */}
        <div className="space-y-12">
          {SERVICE_PILLARS.map((pillar, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-lg border border-[#E6E2D8] overflow-hidden shadow-xs hover:border-[#123524]/40 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Image container with framed Swiss roadside aesthetic */}
                  <div
                    className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt || pillar.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#123524]/90 backdrop-blur-xs text-white px-3 py-1 rounded text-xs font-mono uppercase tracking-wider border border-[#2D6A4F]">
                      Pillar 0{index + 1}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-bold block mb-1">
                          {pillar.tagline}
                        </span>
                        <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#123524]">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="text-[#37413E] text-base leading-relaxed">
                        {pillar.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {pillar.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-sm text-[#2D3734]">
                            <CheckCircle2 className="w-4 h-4 text-[#123524] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action strip */}
                    <div className="pt-6 mt-6 border-t border-[#F0ECE1] flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => onNavigate('contact', pillar.id)}
                        className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#123524] hover:text-[#B45309] transition-colors group"
                      >
                        <span>Inquire About {pillar.title}</span>
                        <ArrowRight className="w-4 h-4 text-[#E5A93C] group-hover:translate-x-1 transition-transform" />
                      </button>

                      <a
                        href={`tel:${BUSINESS_INFO.phoneClean}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#596561] hover:text-[#123524]"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
                        <span>081 771 16 16</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ROADSIDE SIGNAGE STRIP - AT RHEINSTRASSE 1 */}
      <section className="bg-[#EAE7DF] border-y border-[#D8D3C5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-bold">
                Local Swiss Motoring Hub
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#123524]">
                Conveniently Located at Rheinstrasse 1, 9469 Haag
              </h2>
              <p className="text-[#596561] text-sm sm:text-base leading-relaxed">
                Whether you need vehicle repairs in the workshop, routine maintenance, refuelling at the service station, or a warm cup of coffee in the café shop, we are positioned right where you travel.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#123524] text-white font-display font-bold text-sm uppercase tracking-wider hover:bg-[#1E4E37] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#E5A93C]" />
                <span>Call 081 771 16 16</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded border-2 border-[#123524] text-[#123524] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#123524] hover:text-white transition-colors"
              >
                <span>Visit Us in Haag</span>
                <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAP & DIRECTIONS MODULE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MapSection />
      </section>
    </div>
  );
};
