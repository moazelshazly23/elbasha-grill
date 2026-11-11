import React, { useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { MenuSectionData } from '../data/menuData';

interface CategoryNavbarProps {
  sections: MenuSectionData[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const CategoryNavbar: React.FC<CategoryNavbarProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
  searchQuery,
  onSearchChange,
}) => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Automatically center the active category button in the horizontal scroll bar on mobile/desktop
  useEffect(() => {
    const activeBtn = buttonRefs.current[activeSectionId];
    const container = navContainerRef.current;
    if (activeBtn && container) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offset =
        btnRect.left -
        containerRect.left -
        containerRect.width / 2 +
        btnRect.width / 2;
      container.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }, [activeSectionId]);

  return (
    <div
      id="menu-nav"
      className="sticky top-0 z-40 bg-[#0B0908]/95 backdrop-blur-md border-b border-[#D4A853]/20 shadow-[0_8px_24px_rgba(0,0,0,0.65)]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row md:items-center gap-2.5">
        {/* Horizontal Smooth-Scroll Category Bar */}
        <div
          ref={navContainerRef}
          role="tablist"
          aria-label="أقسام المنيو"
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 flex-1"
        >
          {sections.map((section) => {
            const isActive = activeSectionId === section.id;
            return (
              <button
                key={section.id}
                ref={(el) => {
                  buttonRefs.current[section.id] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectSection(section.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] ${
                  isActive
                    ? 'bg-gradient-to-l from-[#9E1B1B] to-[#801313] text-[#F5EFE6] border border-[#D4A853]/70 shadow-[0_2px_12px_rgba(158,27,27,0.5)]'
                    : 'bg-[#161210] text-[#C8BCAE] border border-[#2A221E] hover:text-[#F5EFE6] hover:border-[#D4A853]/40'
                }`}
              >
                {section.title}
              </button>
            );
          })}
        </div>

        {/* Instant Search Input */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search className="w-4 h-4 text-[#D4A853]/75 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث عن صنف في المنيو..."
            aria-label="ابحث عن صنف في المنيو"
            className="w-full bg-[#161210] text-[#F5EFE6] placeholder-[#8E8276] text-xs sm:text-sm rounded-lg pr-9 pl-8 py-2 border border-[#2A221E] focus:border-[#D4A853] focus:outline-none transition-colors duration-150"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="مسح البحث"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#C8BCAE] hover:text-[#F5EFE6] p-0.5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
