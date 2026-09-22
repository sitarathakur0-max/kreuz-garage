import React from 'react';
import { Phone, MapPin, Wrench, Fuel, Coffee, ShieldCheck, ArrowRight, Building, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, CURATED_IMAGES } from '../../data/business';
import { Page } from '../../types';
import { MapSection } from '../MapSection';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Page Header Banner */}
      <section className="bg-[#123524] text-[#F8F7F4] py-14 sm:py-16 border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C4533] border border-[#2F6D52]">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E5A93C] font-bold">
                About The Business • Haag (SG)
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white">
              About Kreuz Garage Gebr. Görgin GmbH
            </h1>
            <p className="text-[#C3D5CA] text-lg leading-relaxed">
              An established Swiss garage and service business operating on Rheinstrasse 1 in 9469 Haag, integrating a mechanical workshop, service station, café shop, and complete vehicle services under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Main Concept & Integrated Facility */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-bold">
              Integrated Roadside Destination
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#123524]">
              Serving Haag with Garage, Fueling, and Café Hospitality
            </h2>
            <p className="text-[#37413E] text-base leading-relaxed">
              {BUSINESS_INFO.name} is built around convenience and automotive care. Rather than driving to separate locations for fueling, mechanical repairs, car maintenance, and travel provisions, our premises in Haag provide all four core capabilities together.
            </p>
            <p className="text-[#37413E] text-base leading-relaxed">
              Located on Rheinstrasse 1 in the St. Gallen Rhine Valley, we welcome private motorists, commercial vehicles, and local residents seeking dependable assistance or a quick break during their trip.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 bg-white border border-[#E6E2D8] rounded flex items-start gap-2.5">
                <Wrench className="w-4 h-4 text-[#123524] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#123524] font-display uppercase tracking-wider text-xs">
                    Equipped Workshop
                  </strong>
                  <span className="text-xs text-[#596561]">Automotive repair & maintenance bays</span>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-[#E6E2D8] rounded flex items-start gap-2.5">
                <Fuel className="w-4 h-4 text-[#123524] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#123524] font-display uppercase tracking-wider text-xs">
                    Service Station
                  </strong>
                  <span className="text-xs text-[#596561]">Roadside refuelling & fluid supplies</span>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-[#E6E2D8] rounded flex items-start gap-2.5">
                <Coffee className="w-4 h-4 text-[#123524] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#123524] font-display uppercase tracking-wider text-xs">
                    On-Site Café Shop
                  </strong>
                  <span className="text-xs text-[#596561]">Fresh coffee, drinks & provisions</span>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-[#E6E2D8] rounded flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#123524] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#123524] font-display uppercase tracking-wider text-xs">
                    Central Haag Access
                  </strong>
                  <span className="text-xs text-[#596561]">Directly on Rheinstrasse 1</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#123524] text-white font-display font-bold text-sm uppercase tracking-wider hover:bg-[#1E4E37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E5A93C]" />
                <span>Call 081 771 16 16</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded border-2 border-[#123524] text-[#123524] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#123524] hover:text-white transition-colors"
              >
                <span>Contact the Garage</span>
                <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-2 rounded-lg border-2 border-[#E5A93C]/40 translate-x-2 translate-y-2 pointer-events-none"></div>
              <div className="relative rounded-lg overflow-hidden border border-[#D5D0C5] bg-white shadow-md">
                <img
                  src={CURATED_IMAGES.workshop}
                  alt={CURATED_IMAGES.workshopAlt}
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-[#123524] text-white">
                  <p className="font-display font-bold text-base uppercase tracking-wider">
                    {BUSINESS_INFO.legalName}
                  </p>
                  <p className="text-xs text-[#A3BEB0]">{BUSINESS_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Registered Business Identity Section */}
      <section className="bg-white border-y border-[#E6E2D8] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-bold">
              Business Registry Details
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#123524]">
              Authentic Swiss Entity Details
            </h3>
            <p className="text-sm text-[#596561]">
              Accurate verified business records for Kreuz Garage Gebr. Görgin GmbH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-5 bg-[#F8F7F4] rounded border border-[#E6E2D8] space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#596561] block">
                Company Name
              </span>
              <p className="font-display font-bold text-lg text-[#123524]">
                {BUSINESS_INFO.legalName}
              </p>
              <span className="text-xs text-[#596561] block">GmbH (Limited Liability Company)</span>
            </div>

            <div className="p-5 bg-[#F8F7F4] rounded border border-[#E6E2D8] space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#596561] block">
                Category & Scope
              </span>
              <p className="font-display font-bold text-lg text-[#123524]">
                {BUSINESS_INFO.category}
              </p>
              <span className="text-xs text-[#596561] block">Workshop, station & café services</span>
            </div>

            <div className="p-5 bg-[#F8F7F4] rounded border border-[#E6E2D8] space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#596561] block">
                Registered Location
              </span>
              <p className="font-display font-bold text-lg text-[#123524]">
                Rheinstrasse 1
              </p>
              <span className="text-xs text-[#596561] block">9469 Haag, Switzerland</span>
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MapSection />
      </section>
    </div>
  );
};
