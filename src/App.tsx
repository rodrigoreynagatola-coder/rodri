/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SmartIcon } from './components/SmartIcon';
import { IMAGES } from './data';
import { TabType } from './types';

// Tab components
import InicioTab from './components/InicioTab';
import HabitacionesTab from './components/HabitacionesTab';
import ContactoTab from './components/ContactoTab';
import ComoLlegarTab from './components/ComoLlegarTab';
import ReglasTab from './components/ReglasTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('INICIO');
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Determine which image to render dynamically in the right panel
  const getActiveImage = () => {
    if (hoveredImage) {
      return hoveredImage;
    }
    switch (activeTab) {
      case 'INICIO':
        return IMAGES.facade;
      case 'HABITACIONES':
        return IMAGES.room;
      case 'CONTACTO':
        return IMAGES.reception;
      case 'CÓMO LLEGAR':
        return IMAGES.facade; // Can alternate or use facade
      case 'REGLAS DE HOSPEDAJE':
        return IMAGES.patio;
      default:
        return IMAGES.facade;
    }
  };

  const currentImage = getActiveImage();

  // Tab definitions matching requested uppercase labels
  const tabsList: { id: TabType; label: string }[] = [
    { id: 'INICIO', label: 'INICIO' },
    { id: 'HABITACIONES', label: 'HABITACIONES' },
    { id: 'CONTACTO', label: 'CONTACTO' },
    { id: 'CÓMO LLEGAR', label: 'CÓMO LLEGAR' },
    { id: 'REGLAS DE HOSPEDAJE', label: 'REGLAS DE HOSPEDAJE' },
  ];

  const handleTabChange = (tabId: TabType) => {
    setActiveTab(tabId);
    setHoveredImage(null); // Reset hovered override
    setMobileMenuOpen(false);
  };

  // Pre-filled WhatsApp direct chat link
  const getGeneralWhatsappLink = () => {
    const text = encodeURIComponent(
      '¡Hola, Hostal Los Alamos! Visité su sitio web oficial y me interesaría realizar una reserva. ¿Podrían brindarme información sobre tarifas vigentes y disponibilidad? ¡Muchas gracias!'
    );
    return `https://wa.me/59176192000?text=${text}`;
  };

  return (
    <div id="app-root" className="min-h-screen immersive-gradient flex flex-col justify-between selection:bg-brand-gold selection:text-brand-dark text-brand-cream relative overflow-x-hidden md:h-screen">
      {/* 1. Header & Navigation (Navbar) */}
      <header id="app-header" className="relative z-20 w-full bg-brand-dark/95 backdrop-blur-md md:bg-transparent border-b border-brand-coffee/15 md:border-none">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[48px] h-16 sm:h-20 lg:h-24 flex items-center justify-between">
          
          {/* Logo element on the left */}
          <button
            id="logo-brand"
            onClick={() => handleTabChange('INICIO')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors duration-300">
              Hostal Los Alamos
            </span>
          </button>

          {/* Navigation links for Desktop */}
          <nav id="nav-desktop" className="hidden md:flex items-center gap-6 xl:gap-8">
            {tabsList.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  id={`nav-link-${tab.id}`}
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative py-2 text-[11px] tracking-[0.15em] font-semibold cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'text-brand-gold'
                      : 'text-white/80 hover:text-brand-gold'
                  }`}
                >
                  {tab.label}
                  {/* Underline indicators identical to Hoteles Segovia */}
                  {isSelected && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Social Icons on extreme right */}
          <div id="socials-desktop" className="hidden md:flex items-center gap-4">
            <a
              id="social-fb"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 text-white/80 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
              title="Síguenos en Facebook"
            >
              <SmartIcon name="Facebook" className="w-4 h-4" />
            </a>
            <a
              id="social-ig"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 text-white/80 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
              title="Síguenos en Instagram"
            >
              <SmartIcon name="Instagram" className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile responsive toggle button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-cream/80 hover:text-brand-gold transition-colors"
          >
            <SmartIcon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile drop-down Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-20 md:hidden bg-brand-chocolate border-b border-brand-coffee/30 overflow-hidden w-full"
          >
            <div className="px-5 py-4 space-y-3 flex flex-col">
              {tabsList.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    id={`mobile-link-${tab.id}`}
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`py-2 text-left text-xs font-bold tracking-widest cursor-pointer ${
                      isSelected ? 'text-brand-gold font-extrabold border-l-2 border-brand-gold pl-2' : 'text-brand-cream/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
              <div className="flex items-center gap-3 pt-3 border-t border-brand-coffee/20">
                <a
                  id="mobile-fb"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-brand-cream/70 hover:text-brand-gold"
                >
                  <SmartIcon name="Facebook" className="w-4 h-4" /> Facebook
                </a>
                <a
                  id="mobile-ig"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-brand-cream/70 hover:text-brand-gold ml-4"
                >
                  <SmartIcon name="Instagram" className="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Section (Hero Split View) */}
      <main id="hero-main-layout" className="relative z-10 flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-4 md:py-6 overflow-hidden">
        
        {/* Left column: Dynamic Tabbed content area */}
        <section id="left-display-panel" className="relative z-10 flex flex-col justify-center h-full max-w-xl md:max-w-none w-full xl:pr-10">
          <AnimatePresence mode="wait">
            {activeTab === 'INICIO' && (
              <motion.div key="tab-inicio" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <InicioTab />
              </motion.div>
            )}
            {activeTab === 'HABITACIONES' && (
              <motion.div key="tab-habitaciones" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <HabitacionesTab onHoverRoom={(img) => setHoveredImage(img)} />
              </motion.div>
            )}
            {activeTab === 'CONTACTO' && (
              <motion.div key="tab-contacto" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <ContactoTab />
              </motion.div>
            )}
            {activeTab === 'CÓMO LLEGAR' && (
              <motion.div key="tab-llegar" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <ComoLlegarTab />
              </motion.div>
            )}
            {activeTab === 'REGLAS DE HOSPEDAJE' && (
              <motion.div key="tab-reglas" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <ReglasTab />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Right column: Elegant Media picture container with rounded edges */}
        <section id="right-image-panel" className="h-full flex items-center justify-center relative w-full overflow-hidden">
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-[82%] xl:h-[85%] max-h-[580px] immersive-image-frame">
            <div className="w-full h-full relative rounded-xl overflow-hidden bg-zinc-900/50 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  alt="Vista de Hostal Los Alamos"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Subtle Gradient Vignette Over the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Captions corresponding to active image visual block */}
              <div className="absolute bottom-8 left-8 z-10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase font-medium">
                    {hoveredImage ? 'Vista Previa Habitación' : `${activeTab} • Tarija`}
                  </span>
                </div>
                <div className="text-xl font-light text-white">Centro Histórico de Tarija</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Subtle brand footer for neat layout grid constraint */}
      <footer id="simple-brand-footer" className="hidden md:block py-4 border-t border-brand-coffee/10 bg-brand-dark/10 relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-mono tracking-wider text-brand-cream/40">
          <span>© 2026 Hostal Los Alamos Tarija. Todos los derechos reservados.</span>
          <span>Centro Histórico, Calle Sucre #456 • Bolivia</span>
        </div>
      </footer>

      {/* 3. Floating Conversion Mechanism (WhatsApp Floating Button) */}
      <div id="float-whatsapp-anchor" className="fixed bottom-6 right-6 z-50">
        <a
          id="whatsapp-floating-circle"
          href={getGeneralWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 scale-100 hover:scale-110 active:scale-95 group focus:outline-none"
          title="Consúltanos por WhatsApp ahora"
        >
          {/* Wave glowing green borders on hover */}
          <span className="absolute inset-0 rounded-full border border-green-400 group-hover:animate-ping origin-center opacity-75" />
          
          {/* Custom WhatsApp Icon Path inside SmartIcon or exact styling */}
          <svg
            className="w-7 h-7 filter drop-shadow"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.031 2C6.41 2 1.83 6.58 1.83 12.2c0 1.79.47 3.53 1.37 5.09L1.39 22.5l5.37-1.41c1.51.82 3.19 1.25 4.89 1.25h.01c5.62 0 10.2-4.58 10.2-10.2.01-2.71-1.04-5.26-2.96-7.17S14.73 2 12.03 2zM21 12.19c0 4.93-4.01 8.94-8.94 8.94h-.01c-1.54 0-3.04-.4-4.36-1.16l-.31-.19-3.24.85.86-3.16-.21-.33c-.83-1.32-1.27-2.85-1.27-4.43 0-4.93 4.01-8.94 8.94-8.94 2.37 0 4.61.92 6.29 2.59S21 9.8 21 12.19z" />
            <path d="M15.356 13.911c-.302-.151-1.787-.881-2.064-.981-.276-.1-.478-.151-.679.151-.202.302-.78.981-.956 1.182-.176.2-.352.226-.654.075-.302-.151-1.276-.47-2.43-1.498-.898-.8-1.503-1.791-1.68-2.093-.176-.302-.019-.465.132-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503.1-.201.05-.377-.025-.528-.075-.151-.679-1.636-.931-2.24-.24-.593-.507-.513-.679-.523-.171-.008-.372-.01-.573-.01s-.528.075-.805.377c-.276.302-1.056 1.031-1.056 2.515s1.081 2.915 1.232 3.116c.151.2 2.13 3.251 5.158 4.56.72.311 1.282.498 1.721.638.724.23 1.382.198 1.9.121.579-.086 1.787-.73 2.039-1.434.252-.704.252-1.308.176-1.434-.076-.126-.277-.202-.579-.353z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
