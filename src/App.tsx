import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, MessageCircle, ArrowUp } from 'lucide-react';
import { MENU_SECTIONS, CONTACT_INFO } from './data/menuData';
import { HeroSection } from './components/HeroSection';
import { CategoryNavbar } from './components/CategoryNavbar';
import { MenuSectionView, SelectedOrderItem } from './components/MenuSectionView';
import { OrderDrawer, OrderCartItem } from './components/OrderDrawer';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    MENU_SECTIONS[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<OrderCartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [recentToast, setRecentToast] = useState<string | null>(null);

  // Track scroll progress and active section via IntersectionObserver / scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowScrollTop(scrollTop > 600);

      // Determine which section is currently in view
      const viewportOffset = 180;
      let currentId = MENU_SECTIONS[0].id;
      for (const section of MENU_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportOffset) {
            currentId = section.id;
          }
        }
      }
      setActiveSectionId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter sections and items when user searches
  const filteredSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return MENU_SECTIONS;

    return MENU_SECTIONS.map((section) => {
      const sectionMatches =
        section.title.toLowerCase().includes(q) ||
        (section.subtitle && section.subtitle.toLowerCase().includes(q));

      if (sectionMatches) return section;

      const matchingItems = section.items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q)) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(q))
      );

      const matchingAddons = section.addons?.filter((addon) =>
        addon.name.toLowerCase().includes(q)
      );

      return {
        ...section,
        items: matchingItems,
        addons: matchingAddons,
      };
    }).filter(
      (section) =>
        section.items.length > 0 ||
        (section.addons && section.addons.length > 0)
    );
  }, [searchQuery]);

  const handleSelectSection = (id: string) => {
    if (searchQuery) {
      setSearchQuery('');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setActiveSectionId(id);
  };

  const handleExploreMenu = () => {
    const navEl = document.getElementById('menu-nav');
    if (navEl) {
      navEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddItem = (item: SelectedOrderItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.key === item.key);
      if (existing) {
        return prev.map((i) =>
          i.key === item.key ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    setRecentToast(
      `تمت إضافة "${item.name}${
        item.variantLabel ? ` - ${item.variantLabel}` : ''
      }" لقائمة طلبك`
    );
  };

  useEffect(() => {
    if (!recentToast) return;
    const timer = setTimeout(() => setRecentToast(null), 2200);
    return () => clearTimeout(timer);
  }, [recentToast]);

  const handleUpdateQuantity = (key: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalCartPrice = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#0B0908] text-[#F5EFE6] flex flex-col relative">
      {/* Subtle Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 inset-x-0 h-1 z-50 bg-[#1A1412] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-l from-[#D4A853] via-[#E85D04] to-[#9E1B1B] transition-transform duration-100 origin-right"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      {/* Top Bar Contract: 3 Clean Zones (Brand Wordmark — 4 Concise Links — 1 Primary Action) */}
      <header className="bg-[#0E0B0A] border-b border-[#261E1A] px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Single Text Element Brand Wordmark */}
          <a
            href="#hero"
            className="font-display-ar text-xl sm:text-2xl font-bold text-[#D4A853] tracking-wide whitespace-nowrap shrink-0"
          >
            مشويات الباشا
          </a>

          {/* Zone 2: 4–5 Clean Single-Line Navigation Links */}
          <nav
            aria-label="روابط سريعة"
            className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#C8BCAE]"
          >
            <a
              href="#trays"
              className="hover:text-[#D4A853] transition-colors whitespace-nowrap shrink-0"
            >
              الصواني
            </a>
            <a
              href="#grills"
              className="hover:text-[#D4A853] transition-colors whitespace-nowrap shrink-0"
            >
              المشاوي
            </a>
            <a
              href="#pizza"
              className="hover:text-[#D4A853] transition-colors whitespace-nowrap shrink-0"
            >
              البيتزا
            </a>
            <a
              href="#crepe-mixes"
              className="hover:text-[#D4A853] transition-colors whitespace-nowrap shrink-0"
            >
              الكريب
            </a>
            <a
              href="#contact-footer"
              className="hover:text-[#D4A853] transition-colors whitespace-nowrap shrink-0"
            >
              تواصل معنا
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center shrink-0">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9E1B1B] hover:bg-[#B22222] text-[#F5EFE6] text-xs sm:text-sm font-bold border border-[#D4A853]/50 transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#D4A853]" />
              <span>اطلب واتساب</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onExploreClick={handleExploreMenu} />

      {/* Sticky 14-Category Navigation & Search */}
      <CategoryNavbar
        sections={MENU_SECTIONS}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Digital Menu Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {filteredSections.length === 0 ? (
          <div className="text-center py-20 my-8 rounded-2xl bg-[#14100E] border border-[#2C221E] p-8">
            <p className="font-display-ar text-2xl font-bold text-[#D4A853] mb-2">
              لا توجد أصناف مطابقة لبحثك "{searchQuery}"
            </p>
            <p className="text-sm text-[#C8BCAE] mb-6">
              جرب البحث بكلمة أخرى أو استعرض جميع أقسام المنيو
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-6 py-2.5 rounded-lg bg-[#9E1B1B] text-[#F5EFE6] text-sm font-bold border border-[#D4A853]/50 hover:bg-[#B22222] transition-colors cursor-pointer"
            >
              عرض المنيو بالكامل
            </button>
          </div>
        ) : (
          filteredSections.map((section) => (
            <MenuSectionView
              key={section.id}
              section={section}
              onAddItem={handleAddItem}
            />
          ))
        )}
      </main>

      {/* Luxury Contact Footer */}
      <FooterSection />

      {/* Subtle Feedback Toast when an item is added */}
      {recentToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-6 z-40 max-w-sm bg-[#181210] text-[#F5EFE6] border border-[#D4A853] px-4 py-3 rounded-xl shadow-2xl text-xs sm:text-sm font-bold flex items-center justify-between gap-3"
        >
          <span>{recentToast}</span>
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="text-[#D4A853] underline whitespace-nowrap shrink-0 cursor-pointer"
          >
            عرض الطلب
          </button>
        </div>
      )}

      {/* Floating Bottom Action Bar (kept compact to respect 15% mobile sticky cap) */}
      <div className="fixed bottom-4 left-4 right-4 z-40 pointer-events-none flex items-center justify-between max-w-7xl mx-auto">
        {/* Scroll to top button */}
        <div>
          {showScrollTop && (
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="العودة لأعلى الصفحة"
              className="pointer-events-auto w-11 h-11 rounded-full bg-[#181311]/95 hover:bg-[#9E1B1B] text-[#D4A853] hover:text-[#F5EFE6] border border-[#D4A853]/50 shadow-xl flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Interactive Order Bag Button (appears when customer selects items or allows quick order review) */}
        <div className="flex items-center gap-2.5">
          {totalCartCount > 0 && (
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-l from-[#9E1B1B] to-[#7D1414] text-[#F5EFE6] border border-[#D4A853] shadow-[0_10px_28px_rgba(0,0,0,0.8)] hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
            >
              <div className="relative flex items-center">
                <ShoppingBag className="w-5 h-5 text-[#D4A853]" />
                <span className="mr-1.5 text-xs font-extrabold bg-[#D4A853] text-[#0B0908] rounded-md px-1.5 py-0.5 tabular-nums">
                  {totalCartCount}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold">ملخص طلبك</span>
              <span className="text-xs sm:text-sm font-extrabold text-[#D4A853] tabular-nums">
                {totalCartPrice} ج
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Slide-Over WhatsApp Order Drawer */}
      <OrderDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
