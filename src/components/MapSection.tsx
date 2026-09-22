import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Compass, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const MapSection: React.FC = () => {
  return (
    <section className="bg-white rounded-lg border border-[#E6E2D8] overflow-hidden shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Location Details & Road Access */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#123524]/10 text-[#123524] text-xs font-bold uppercase tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-[#123524]" />
              Haag Location & Access
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#123524]">
              Where to Find Us on Rheinstrasse
            </h3>

            <p className="text-[#37413E] text-sm leading-relaxed">
              Kreuz Garage Gebr. Görgin GmbH is centrally located on <strong>Rheinstrasse 1</strong> in <strong>9469 Haag</strong>, situated in the St. Gallen Rhine Valley. Easily accessible for motorists commuting along the regional corridor and local drivers seeking workshop services or a service station stop.
            </p>

            <div className="bg-[#F8F7F4] border-l-4 border-[#E5A93C] p-4 rounded-r space-y-2">
              <div className="flex items-center gap-2 font-display font-bold text-sm uppercase tracking-wider text-[#123524]">
                <MapPin className="w-4 h-4 text-[#E5A93C]" />
                <span>Exact Business Address</span>
              </div>
              <p className="text-[#1C2321] text-base font-semibold pl-6">
                {BUSINESS_INFO.name}
              </p>
              <p className="text-[#596561] text-sm pl-6">
                {BUSINESS_INFO.address}
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#596561] pt-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                <span>Direct road access on Rheinstrasse in Haag</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                <span>Service station forecourt with smooth vehicle drive-in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                <span>Dedicated customer parking for the workshop and café shop</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#123524] text-white font-display font-bold text-sm uppercase tracking-wider hover:bg-[#1E4E37] transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#E5A93C]" />
              <span>Get Driving Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded border-2 border-[#123524] text-[#123524] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#123524] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E5A93C]" />
              <span>Call 081 771 16 16</span>
            </a>
          </div>
        </div>

        {/* Right Side: Visual Cartographic Roadside Display */}
        <div className="lg:col-span-6 bg-[#16382C] relative min-h-[340px] flex flex-col items-center justify-center p-6 text-white overflow-hidden border-t lg:border-t-0 lg:border-l border-[#245844]">
          {/* Subtle architectural road layout grid */}
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-swiss" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F8F7F4" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-swiss)" />
            </svg>
          </div>

          {/* Road illustration schematic */}
          <div className="relative z-10 w-full max-w-md bg-[#0F281F]/90 border border-[#2B6149] rounded-lg p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-[#245840] pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#E5A93C] uppercase tracking-wider">
                  Rheinstrasse 1 • 9469 Haag
                </span>
              </div>
              <span className="text-[11px] text-[#A3BEB0] font-mono">CH • SG</span>
            </div>

            {/* Stylized Crossroad Map Graphic */}
            <div className="relative h-44 bg-[#0A1F17] rounded border border-[#1E4D37] flex items-center justify-center overflow-hidden">
              {/* Horizontal road */}
              <div className="absolute w-full h-12 bg-[#1B362A] top-1/2 -translate-y-1/2 border-y border-[#35654F] flex items-center justify-center">
                <div className="w-full h-0.5 road-line-pattern"></div>
              </div>

              {/* Vertical connector */}
              <div className="absolute h-full w-12 bg-[#1B362A] left-1/2 -translate-x-1/2 border-x border-[#35654F] flex items-center justify-center">
                <div className="h-full w-0.5 road-line-vertical"></div>
              </div>

              {/* Road labels */}
              <div className="absolute left-3 top-3 bg-[#123524]/90 px-2 py-0.5 rounded text-[10px] font-mono text-[#D4E0D9] border border-[#2D6A4F]">
                Rheinstrasse
              </div>
              <div className="absolute right-3 bottom-3 bg-[#123524]/90 px-2 py-0.5 rounded text-[10px] font-mono text-[#D4E0D9] border border-[#2D6A4F]">
                Haag (SG)
              </div>

              {/* Central Garage Landmark Pin */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="bg-[#E5A93C] text-[#123524] px-3 py-1.5 rounded-md font-display font-black text-xs uppercase tracking-wider shadow-lg border-2 border-[#123524] flex items-center gap-1.5 animate-bounce">
                  <MapPin className="w-3.5 h-3.5 fill-[#123524]" />
                  <span>Kreuz Garage</span>
                </div>
                <div className="w-2.5 h-2.5 bg-[#E5A93C] rotate-45 -mt-1.5 shadow-md"></div>
              </div>
            </div>

            {/* Coordinates and landmark hints */}
            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <div className="bg-[#16382C] p-2.5 rounded border border-[#265342]">
                <span className="text-[#8FAFA0] block text-[10px] uppercase font-mono">Location</span>
                <span className="font-bold text-white">Rheinstrasse 1</span>
              </div>
              <div className="bg-[#16382C] p-2.5 rounded border border-[#265342]">
                <span className="text-[#8FAFA0] block text-[10px] uppercase font-mono">Telephone</span>
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="font-bold text-[#E5A93C] font-mono hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-display font-bold uppercase tracking-wider text-[#E5A93C] hover:text-white transition-colors"
            >
              <span>View Location on External Map Service</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
