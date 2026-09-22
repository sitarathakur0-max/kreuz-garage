import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Navigation, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from './data/business';
import { Page, ServicePillarId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServicePillarId | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page, serviceId?: ServicePillarId) => {
    setCurrentPage(page);
    if (serviceId) {
      setSelectedServiceId(serviceId);
    } else if (page !== 'contact') {
      setSelectedServiceId(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#1C2321] selection:bg-[#E5A93C]/30 selection:text-[#0F2F28]">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#123524] focus:text-white focus:p-3 focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Main Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content Container */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage initialServiceId={selectedServiceId} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick-Action Bar for Motorists */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#123524]/95 backdrop-blur-md border-t border-[#2F6D52] p-2.5 px-4 shadow-xl flex items-center justify-between gap-3">
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded bg-[#E5A93C] text-[#123524] font-display font-bold text-sm uppercase tracking-wider shadow-sm"
          id="mobile-sticky-call"
        >
          <Phone className="w-4 h-4" />
          <span>Call 081 771 16 16</span>
        </a>
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded bg-[#1C4533] text-white font-display font-bold text-sm uppercase tracking-wider border border-[#2F6D52]"
          id="mobile-sticky-directions"
        >
          <Navigation className="w-4 h-4 text-[#E5A93C]" />
          <span>Directions</span>
        </a>
      </div>

      {/* Back to top floating button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-6 right-6 z-40 p-3 rounded-full bg-[#123524] text-white hover:bg-[#1E4E37] border border-[#E5A93C] shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#E5A93C]" />
        </button>
      )}
    </div>
  );
}
