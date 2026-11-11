import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Flame } from 'lucide-react';
import { HERO_IMAGE, LOGO_IMAGE } from '../data/menuData';
import { EmberParticles, OrientalArchDivider } from './EmberParticles';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [logoError, setLogoError] = useState(false);
  const [bgError, setBgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-[#D4A853]/20 py-14 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Feast Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        {!bgError ? (
          <img
            src={HERO_IMAGE}
            alt="مشويات الباشا - وليمة مشويات شرقية فاخرة على الفحم"
            referrerPolicy="no-referrer"
            onError={() => setBgError(true)}
            className="w-full h-full object-cover object-center scale-105 opacity-45"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1C110E] via-[#0B0908] to-[#26100E]" />
        )}
        {/* Multi-layered luxury dark & warm charcoal scrim for >= 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0908] via-[#0B0908]/80 to-[#0B0908]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,27,27,0.18)_0%,rgba(11,9,8,0.92)_75%)]" />
      </div>

      {/* Subtle Floating Fire Sparks & Charcoal Embers */}
      <EmberParticles count={12} />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Restaurant Logo Medallion with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 group"
        >
          {/* Warm ambient glow behind the logo */}
          <div
            className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#9E1B1B]/45 via-[#D4A853]/35 to-[#9E1B1B]/45 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
          {/* Warm beige ivory frame that preserves the official logo's black Arabic calligraphy and red/green kilim arch */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-b from-[#FAF5EC] to-[#EFE5D4] p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-2 border-[#D4A853] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-1 rounded-full border border-[#9E1B1B]/25 pointer-events-none" />
            {!logoError ? (
              <img
                src={LOGO_IMAGE}
                alt="لوجو مطعم مشويات الباشا – EL BASHA GRILL"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-[#14100E]">
                <Flame className="w-12 h-12 text-[#9E1B1B] mb-1" />
                <span className="font-display-ar text-2xl font-bold">الباشا</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Arabic Restaurant Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display-ar text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F5EFE6] tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          style={{ textWrap: 'balance' }}
        >
          مشويات الباشا
        </motion.h1>

        {/* English Brand Name */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          dir="ltr"
          className="font-display-en text-base sm:text-xl lg:text-2xl font-bold tracking-[0.28em] text-[#D4A853] mt-3 uppercase"
        >
          EL BASHA GRILL
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <OrientalArchDivider />
        </motion.div>

        {/* Signature Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F5EFE6]/95 mt-1 mb-3"
          style={{ textWrap: 'balance' }}
        >
          مشويات الباشا... <span className="text-[#D4A853]">أنت الباشا</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-[#C8BCAE] max-w-xl mx-auto leading-relaxed mb-8"
        >
          أصالة المشويات المصرية على الفحم، الصواني الملكية، البيتزا، الكريب، والفطير الشرقي بأعلى معايير الفخامة والمذاق الأصيل.
        </motion.p>

        {/* Primary CTA Button: استكشف المنيو */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-l from-[#9E1B1B] via-[#B22222] to-[#8B1616] text-[#F5EFE6] font-bold text-base sm:text-lg border border-[#D4A853]/60 shadow-[0_10px_30px_rgba(158,27,27,0.45)] hover:shadow-[0_14px_36px_rgba(212,168,83,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
          >
            <span>استكشف المنيو</span>
            <ChevronDown className="w-5 h-5 text-[#D4A853] transition-transform duration-200 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Kilim Geometric Strip */}
      <div className="absolute bottom-0 inset-x-0 h-1.5 kilim-divider opacity-80" aria-hidden="true" />
    </section>
  );
};
