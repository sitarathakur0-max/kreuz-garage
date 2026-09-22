import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, ArrowRight, Clock, Coffee, Wrench, Fuel, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#E6E2D8] transition-all">
      {/* Utility Top Bar - Swiss Service Station Aesthetic */}
      <div className="bg-[#123524] text-[#F8F7F4] text-xs font-medium py-2 px-4 sm:px-6 lg:px-8 border-b border-[#1E4E37]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Location & Swiss Badge */}
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-[#E5A93C] text-[#123524] font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123524]"></span>
              Haag • St. Gallen
            </span>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#D4E0D9] hover:text-[#E5A93C] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>{BUSINESS_INFO.address}</span>
            </a>
          </div>

          {/* Quick Direct Dial */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-[#9EB3A6] text-[11px]">
              Garage • Workshop • Service Station • Café Shop
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 font-bold text-[#E5A93C] hover:text-white transition-colors bg-[#1E4E37]/80 px-2.5 py-1 rounded border border-[#2D6A4F]"
              title="Call Kreuz Garage Haag"
            >
              <Phone className="w-3 h-3 text-[#E5A93C]" />
              <span className="font-mono tracking-tight">{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo - Distinctive Retro-Swiss Signage Style */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none focus:ring-2 focus:ring-[#123524] rounded-lg p-1"
          >
            {/* Architectural Petrol/Mustard Cross Icon */}
            <div className="relative w-11 h-11 bg-[#123524] border-2 border-[#E5A93C] rounded-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <div className="absolute inset-0 road-line-pattern opacity-20"></div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="text-[#E5A93C] font-black text-lg leading-none font-display tracking-widest">K</span>
                <span className="text-[8px] text-white/80 font-bold uppercase tracking-tighter">9469</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-2xl sm:text-3xl text-[#123524] tracking-tight group-hover:text-[#1E4E37] transition-colors">
                  KREUZ GARAGE
                </span>
              </div>
              <p className="text-xs sm:text-[13px] font-medium tracking-wide text-[#596561] -mt-1 uppercase">
                Gebr. Görgin GmbH • Haag
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-4 py-2 rounded-md font-display font-bold text-base tracking-wider uppercase transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#123524] bg-[#EAE7DF]'
                      : 'text-[#37413E] hover:text-[#123524] hover:bg-[#F0EDE5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#E5A93C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded border-2 border-[#123524] text-[#123524] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#123524] hover:text-white transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#E5A93C]" />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#123524] text-white font-display font-bold text-sm uppercase tracking-wider hover:bg-[#1E4E37] transition-all shadow-sm group"
            >
              <span>Contact the Garage</span>
              <ArrowRight className="w-4 h-4 text-[#E5A93C] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="p-2.5 rounded bg-[#123524] text-[#E5A93C] hover:bg-[#1E4E37] transition-colors"
              title="Call Garage"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded border border-[#D5D0C5] text-[#123524] hover:bg-[#EAE7DF] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E2D8] bg-[#F8F7F4] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-4 py-3 rounded font-display font-bold text-lg uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#123524] text-[#F8F7F4]'
                      : 'text-[#1C2321] hover:bg-[#EAE7DF]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />}
                </button>
              );
            })}
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-2 border-t border-[#E6E2D8] space-y-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded bg-[#E5A93C] text-[#123524] font-display font-bold text-base uppercase tracking-wider shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call 081 771 16 16</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded bg-[#123524] text-white font-display font-bold text-base uppercase tracking-wider"
            >
              <span>Contact the Garage</span>
              <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
            </button>
          </div>

          {/* Location details */}
          <div className="pt-2 text-xs text-[#596561] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
            <span>{BUSINESS_INFO.address}</span>
          </div>
        </div>
      )}
    </header>
  );
};
