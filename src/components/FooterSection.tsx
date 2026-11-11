import React, { useState } from 'react';
import { MessageCircle, Facebook, Instagram, Flame } from 'lucide-react';
import { CONTACT_INFO, LOGO_IMAGE } from '../data/menuData';
import { EmberParticles, OrientalArchDivider } from './EmberParticles';

export const FooterSection: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer
      id="contact-footer"
      className="relative overflow-hidden bg-[#080605] border-t-2 border-[#D4A853]/35 pt-16 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Top Kilim Geometric Ribbon */}
      <div className="absolute top-0 inset-x-0 h-1.5 kilim-divider opacity-90" aria-hidden="true" />

      {/* Subtle Warm Embers in Footer Background */}
      <EmberParticles count={8} />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Restaurant Logo Medallion */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#FAF5EC] to-[#EFE5D4] p-2.5 border-2 border-[#D4A853] shadow-[0_12px_35px_rgba(0,0,0,0.85)] flex items-center justify-center mb-5">
          {!logoError ? (
            <img
              src={LOGO_IMAGE}
              alt="مشويات الباشا – EL BASHA GRILL"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
              className="w-full h-full object-contain"
            />
          ) : (
            <Flame className="w-10 h-10 text-[#9E1B1B]" />
          )}
        </div>

        {/* Brand Title */}
        <h2 className="font-display-ar text-3xl sm:text-5xl font-bold text-[#F5EFE6] tracking-wide">
          مشويات الباشا –{' '}
          <span className="font-display-en text-2xl sm:text-4xl text-[#D4A853] tracking-widest">
            EL BASHA GRILL
          </span>
        </h2>

        <OrientalArchDivider />

        <p className="text-sm sm:text-base text-[#C8BCAE] max-w-lg mx-auto mt-1 mb-8">
          للحجز والطلبات أو الاستفسار، تواصل معنا مباشرة عبر واتساب أو تابعنا على صفحاتنا الرسمية
        </p>

        {/* Large Prominent Social & WhatsApp Action Buttons */}
        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* 1. WhatsApp Direct Button */}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappIntl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-gradient-to-b from-[#173620] to-[#0F2616] border border-[#2ECC71]/45 hover:border-[#D4A853] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-150"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform duration-150">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-base font-bold text-[#F5EFE6]">
              واتساب للحجز والطلبات
            </span>
            <span
              dir="ltr"
              className="text-sm font-extrabold text-[#D4A853] tabular-nums tracking-wider"
            >
              {CONTACT_INFO.whatsappNumber}
            </span>
          </a>

          {/* 2. Facebook Official Link */}
          <a
            href={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-gradient-to-b from-[#132238] to-[#0D1828] border border-[#3B82F6]/40 hover:border-[#D4A853] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-150"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1877F2]/20 border border-[#1877F2]/50 flex items-center justify-center text-[#60A5FA] group-hover:scale-110 transition-transform duration-150">
              <Facebook className="w-6 h-6" />
            </div>
            <span className="text-base font-bold text-[#F5EFE6]">
              صفحتنا على فيسبوك
            </span>
            <span className="text-xs font-semibold text-[#C8BCAE] group-hover:text-[#D4A853] transition-colors">
              Facebook · EL BASHA GRILL
            </span>
          </a>

          {/* 3. Instagram Official Link */}
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-gradient-to-b from-[#331524] to-[#200E17] border border-[#EC4899]/40 hover:border-[#D4A853] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-150"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E1306C]/20 border border-[#E1306C]/50 flex items-center justify-center text-[#F472B6] group-hover:scale-110 transition-transform duration-150">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="text-base font-bold text-[#F5EFE6]">
              تابعنا على انستجرام
            </span>
            <span className="text-xs font-semibold text-[#C8BCAE] group-hover:text-[#D4A853] transition-colors">
              @elbasha_grill
            </span>
          </a>
        </div>

        {/* Closing Signature Slogan */}
        <div className="pt-8 border-t border-[#261E1A] w-full flex flex-col items-center gap-2">
          <p className="font-display-ar text-2xl sm:text-3xl font-bold text-[#D4A853]">
            مشويات الباشا... أنت الباشا 🔥
          </p>
          <p className="text-xs text-[#8E8276] mt-1">
            © {new Date().getFullYear()} مشويات الباشا – EL BASHA GRILL. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
