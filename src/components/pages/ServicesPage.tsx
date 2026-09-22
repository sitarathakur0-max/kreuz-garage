import React from 'react';
import { Phone, MapPin, Wrench, Fuel, Coffee, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO, CURATED_IMAGES, SERVICE_PILLARS } from '../../data/business';
import { Page, ServicePillarId } from '../../types';

interface ServicesPageProps {
  onNavigate: (page: Page, serviceId?: ServicePillarId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Page Header */}
      <section className="bg-[#123524] text-[#F8F7F4] py-14 sm:py-16 border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C4533] border border-[#2F6D52]">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E5A93C] font-bold">
                Operational Areas • Rheinstrasse 1 Haag
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white">
              Garage, Workshop, Station & Café Services
            </h1>
            <p className="text-[#C3D5CA] text-lg leading-relaxed">
              Explore the four core capabilities of Kreuz Garage Gebr. Görgin GmbH. We deliver automotive repair and vehicle servicing alongside roadside refuelling and a dedicated café shop.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Rich Descriptions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {SERVICE_PILLARS.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="bg-white rounded-lg border border-[#E6E2D8] overflow-hidden shadow-xs hover:border-[#123524]/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left side: Content */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B45309]">
                        Area 0{index + 1} • {service.tagline}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-[#F0ECE1] text-[#123524] text-[11px] font-mono font-semibold uppercase">
                        Haag (SG)
                      </span>
                    </div>

                    <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#123524]">
                      {service.title}
                    </h2>

                    <p className="text-[#37413E] text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="bg-[#F8F7F4] p-5 rounded-md border border-[#EAE7DF] space-y-2.5">
                      <span className="text-xs font-display font-bold uppercase tracking-wider text-[#123524] block mb-1">
                        Key Capabilities Included
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#2D3734]">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#123524] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onNavigate('contact', service.id)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#123524] text-white font-display font-bold text-sm uppercase tracking-wider hover:bg-[#1E4E37] transition-colors"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
                    </button>

                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded border border-[#D5D0C5] text-[#123524] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#EAE7DF] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#E5A93C]" />
                      <span>Call 081 771 16 16</span>
                    </a>
                  </div>
                </div>

                {/* Right side: Curated Image & Badge */}
                <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-[#16382C]">
                  <img
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-[#123524]/90 backdrop-blur-xs p-3.5 rounded border border-[#2B6149] text-white flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5A93C] block">
                        Location
                      </span>
                      <span className="text-xs font-semibold">Rheinstrasse 1, 9469 Haag</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#E5A93C]">
                      081 771 16 16
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Station & Workshop Combined Advantage */}
      <section className="bg-[#123524] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight">
            Have a Question About Your Vehicle or Our Station?
          </h3>
          <p className="text-[#C3D5CA] text-base max-w-2xl mx-auto">
            Contact our Haag facility directly. You can telephone our desk during the day or send an online message anytime.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#E5A93C] text-[#123524] font-display font-bold text-base uppercase tracking-wider hover:bg-[#F3BA54] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call 081 771 16 16</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border-2 border-white text-white font-display font-bold text-base uppercase tracking-wider hover:bg-white hover:text-[#123524] transition-colors"
            >
              <span>Send Contact Message</span>
              <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
