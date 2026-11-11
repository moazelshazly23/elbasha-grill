import React from 'react';
import { motion } from 'motion/react';
import { Plus, Flame } from 'lucide-react';
import { MenuSectionData, MenuItem, MenuAddon } from '../data/menuData';
import { ResilientImage } from './ResilientImage';
import { OrientalArchDivider } from './EmberParticles';

export interface SelectedOrderItem {
  key: string;
  name: string;
  variantLabel?: string;
  price: number;
}

interface MenuSectionViewProps {
  section: MenuSectionData;
  onAddItem: (item: SelectedOrderItem) => void;
}

export const MenuSectionView: React.FC<MenuSectionViewProps> = ({
  section,
  onAddItem,
}) => {
  const handleAddSingle = (item: MenuItem) => {
    if (typeof item.price !== 'number') return;
    onAddItem({
      key: item.id,
      name: item.name,
      price: item.price,
    });
  };

  const handleAddVariant = (item: MenuItem, label: string, price: number) => {
    onAddItem({
      key: `${item.id}-${label}`,
      name: item.name,
      variantLabel: label,
      price,
    });
  };

  const handleAddAddon = (addon: MenuAddon) => {
    onAddItem({
      key: addon.id,
      name: `${addon.name} (${section.addonsTitle || 'إضافة'})`,
      price: addon.price,
    });
  };

  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-28 py-10 sm:py-14 border-b border-[#241D1A] last:border-b-0"
    >
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2
              className="font-display-ar text-3xl sm:text-4xl font-bold text-[#F5EFE6] tracking-wide"
              style={{ textWrap: 'balance' }}
            >
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="text-sm sm:text-base text-[#C8BCAE] mt-1.5">
                {section.subtitle}
              </p>
            )}
          </div>

          {/* Unboxed Clean Metadata Note (if present, e.g., الصواني) */}
          {section.note && (
            <div className="text-xs sm:text-sm font-semibold text-[#D4A853] flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#9E1B1B] shrink-0" />
              <span>ملاحظة: {section.note}</span>
            </div>
          )}
        </div>

        {/* Subtle Gold & Crimson Hairline */}
        <div className="mt-4 h-[1px] w-full bg-gradient-to-l from-[#D4A853]/50 via-[#9E1B1B]/40 to-transparent" />
      </div>

      {/* Optional Editorial Showcase Banner Image */}
      {section.bannerImage && (
        <div className="mb-8 relative rounded-2xl overflow-hidden border border-[#D4A853]/25 bg-[#14100E] shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
          <div className="aspect-[16/7] sm:aspect-[21/7] w-full relative">
            <ResilientImage
              src={section.bannerImage}
              alt={section.bannerAlt || section.title}
              title={section.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0B0908]/85 via-[#0B0908]/35 to-transparent flex items-center px-6 sm:px-10">
              <div className="max-w-md">
                <p className="font-display-ar text-2xl sm:text-3xl font-bold text-[#F5EFE6] drop-shadow">
                  {section.title} — مشويات الباشا
                </p>
                {section.note ? (
                  <p className="text-xs sm:text-sm text-[#D4A853] mt-1 font-semibold">
                    {section.note}
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm text-[#E5DEC9] mt-1">
                    محضرة طازجة يوميًا بأعلى معايير الجودة والمذاق الأصيل
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. Featured Cards Layout (الصواني, ميكسات البيتزا, الفراخ المشوية, ميكسات الكريب, الحواوشي) */}
      {section.layoutType === 'featured-cards' && (
        <div
          className={`grid grid-cols-1 ${
            section.items.length === 2
              ? 'md:grid-cols-2'
              : section.items.length === 4
              ? 'md:grid-cols-2'
              : 'md:grid-cols-3'
          } gap-5 sm:gap-6`}
        >
          {section.items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleAddSingle(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleAddSingle(item);
                }
              }}
              className="group relative flex flex-col justify-between rounded-xl bg-[#15110F] border border-[#2C221E] hover:border-[#D4A853]/60 p-5 sm:p-6 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.65)] cursor-pointer text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
            >
              <div>
                {/* Unboxed quiet metadata kicker when subtitle exists */}
                {item.subtitle && (
                  <div className="text-xs font-semibold text-[#D4A853] mb-1.5 flex items-center gap-1.5">
                    <span>يكفي {item.subtitle}</span>
                    {section.note && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#C8BCAE]">شامل أرز وسلطات</span>
                      </>
                    )}
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5EFE6] group-hover:text-[#D4A853] transition-colors duration-150">
                    {item.name}
                  </h3>
                </div>

                {item.description && (
                  <p className="text-sm text-[#C8BCAE] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#261E1B] flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-[#D4A853] tabular-nums transition-transform duration-150 group-hover:scale-105 inline-block">
                    {item.price}
                  </span>
                  <span className="text-xs font-semibold text-[#C8BCAE]">جنيه</span>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1F1815] group-hover:bg-[#9E1B1B] text-[#F5EFE6] text-xs font-bold border border-[#382B25] group-hover:border-[#D4A853]/50 transition-colors duration-150 whitespace-nowrap shrink-0">
                  <Plus className="w-3.5 h-3.5 text-[#D4A853] group-hover:text-[#F5EFE6]" />
                  <span>أضف للطلب</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. Single Price Grid Layout (وجبات فرد, الإضافات, الكريب, الفطير المالح, الفطير الحلو) */}
      {section.layoutType === 'single-price' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {section.items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleAddSingle(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleAddSingle(item);
                }
              }}
              className="group flex items-center justify-between gap-4 rounded-xl bg-[#15110F] border border-[#2A201D] hover:border-[#D4A853]/55 px-5 py-4 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.55)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
            >
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#F5EFE6] group-hover:text-[#D4A853] transition-colors duration-150 truncate">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-xs text-[#C8BCAE] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-left">
                  <span className="text-xl font-extrabold text-[#D4A853] tabular-nums transition-transform duration-150 group-hover:scale-105 inline-block">
                    {item.price}
                  </span>
                  <span className="text-xs text-[#C8BCAE] mr-1">جنيه</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#1F1815] group-hover:bg-[#9E1B1B] border border-[#342823] flex items-center justify-center transition-colors duration-150">
                  <Plus className="w-4 h-4 text-[#D4A853] group-hover:text-[#F5EFE6]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. Dual Size Layout (البيتزا: وسط / كبير) */}
      {section.layoutType === 'dual-size' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-[#15110F] border border-[#2A201D] hover:border-[#D4A853]/55 p-4 sm:px-5 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.55)]"
            >
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#F5EFE6] group-hover:text-[#D4A853] transition-colors duration-150">
                  {item.name}
                </h3>
                <p className="text-xs text-[#9C8F82] mt-0.5">
                  اختر الحجم للإضافة إلى طلبك
                </p>
              </div>

              <div className="grid grid-cols-2 sm:flex items-center gap-2.5 shrink-0">
                {item.variants?.map((v) => (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() => handleAddVariant(item, v.label, v.price)}
                    className="flex items-center justify-between sm:justify-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#1D1714] hover:bg-[#9E1B1B] border border-[#332722] hover:border-[#D4A853]/60 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
                  >
                    <span className="text-xs font-semibold text-[#C8BCAE] group-hover/btn:text-[#F5EFE6]">
                      {v.label}
                    </span>
                    <span className="text-base font-extrabold text-[#D4A853] group-hover/btn:text-[#F5EFE6] tabular-nums">
                      {v.price}{' '}
                      <span className="text-[11px] font-normal">ج</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Multi-Weight Layout (المشاوي: ربع / ثلث / نصف / كيلو) */}
      {section.layoutType === 'multi-weight' && (
        <div className="space-y-3.5">
          {/* Desktop Column Legend */}
          <div className="hidden lg:grid lg:grid-cols-12 items-center px-6 py-2.5 text-xs font-bold text-[#D4A853] border-b border-[#2A201D]">
            <div className="col-span-4">الصنف</div>
            <div className="col-span-8 grid grid-cols-4 gap-3 text-center">
              {section.variantHeaders?.map((header) => (
                <span key={header}>وزن {header}</span>
              ))}
            </div>
          </div>

          {section.items.map((item) => {
            const variantMap = new Map(
              item.variants?.map((v) => [v.label, v.price])
            );

            return (
              <div
                key={item.id}
                className="group rounded-xl bg-[#15110F] border border-[#2A201D] hover:border-[#D4A853]/55 p-4 sm:px-6 transition-all duration-150 hover:shadow-[0_8px_24px_rgba(0,0,0,0.55)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4">
                  {/* Item Name */}
                  <div className="lg:col-span-4 flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-[#F5EFE6] group-hover:text-[#D4A853] transition-colors duration-150">
                      {item.name}
                    </h3>
                    <span className="text-xs text-[#9C8F82] lg:hidden">
                      اضغط على الوزن للإضافة
                    </span>
                  </div>

                  {/* 4 Weight Columns */}
                  <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {(section.variantHeaders || ['ربع', 'ثلث', 'نصف', 'كيلو']).map(
                      (weightLabel) => {
                        const price = variantMap.get(weightLabel);
                        if (typeof price !== 'number') {
                          return (
                            <div
                              key={weightLabel}
                              className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg bg-[#110E0C] border border-[#221A17] opacity-45 select-none"
                            >
                              <span className="text-[11px] text-[#8E8276]">
                                {weightLabel}
                              </span>
                              <span className="text-xs font-bold text-[#8E8276] mt-0.5">
                                —
                              </span>
                            </div>
                          );
                        }

                        return (
                          <button
                            key={weightLabel}
                            type="button"
                            onClick={() =>
                              handleAddVariant(item, weightLabel, price)
                            }
                            className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg bg-[#1D1714] hover:bg-[#9E1B1B] border border-[#332722] hover:border-[#D4A853]/65 transition-all duration-150 cursor-pointer group/wbtn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
                          >
                            <span className="text-xs font-semibold text-[#C8BCAE] group-hover/wbtn:text-[#F5EFE6]">
                              {weightLabel}
                            </span>
                            <div className="flex items-baseline gap-1 mt-0.5">
                              <span className="text-lg font-extrabold text-[#D4A853] group-hover/wbtn:text-[#F5EFE6] tabular-nums">
                                {price}
                              </span>
                              <span className="text-[11px] text-[#C8BCAE] group-hover/wbtn:text-[#F5EFE6]">
                                ج
                              </span>
                            </div>
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 5. Bread Type Layout (السندوتشات: بلدي / الباشا / فرنساوي) */}
      {section.layoutType === 'bread-type' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.items.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl bg-[#15110F] border border-[#2A201D] hover:border-[#D4A853]/55 p-4 sm:p-5 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.55)] flex flex-col justify-between gap-4"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-[#F5EFE6] group-hover:text-[#D4A853] transition-colors duration-150">
                  {item.name}
                </h3>
                <span className="text-xs text-[#9C8F82]">نوع الخبز</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {item.variants?.map((v) => (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() =>
                      handleAddVariant(item, `خبز ${v.label}`, v.price)
                    }
                    className="flex flex-col items-center justify-center py-2.5 px-2 rounded-lg bg-[#1D1714] hover:bg-[#9E1B1B] border border-[#332722] hover:border-[#D4A853]/65 transition-all duration-150 cursor-pointer group/bbtn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
                  >
                    <span className="text-xs font-semibold text-[#C8BCAE] group-hover/bbtn:text-[#F5EFE6] whitespace-nowrap">
                      {v.label}
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-base sm:text-lg font-extrabold text-[#D4A853] group-hover/bbtn:text-[#F5EFE6] tabular-nums">
                        {v.price}
                      </span>
                      <span className="text-[11px] text-[#C8BCAE] group-hover/bbtn:text-[#F5EFE6]">
                        ج
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 6. Smash Sandwich Layout (عادي / سبيشيال + سماش الباشا الملكي) */}
      {section.layoutType === 'smash-type' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.items
              .filter((item) => item.variants && item.variants.length > 0)
              .map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-[#15110F] border border-[#2A201D] hover:border-[#D4A853]/55 p-4 sm:px-5 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.55)]"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[#F5EFE6] group-hover:text-[#D4A853] transition-colors duration-150">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#9C8F82] mt-0.5">
                      عادي · سبيشيال
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:flex items-center gap-2.5 shrink-0">
                    {item.variants?.map((v) => (
                      <button
                        key={v.label}
                        type="button"
                        onClick={() => handleAddVariant(item, v.label, v.price)}
                        className="flex items-center justify-between sm:justify-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#1D1714] hover:bg-[#9E1B1B] border border-[#332722] hover:border-[#D4A853]/60 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 group/sbtn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
                      >
                        <span className="text-xs font-semibold text-[#C8BCAE] group-hover/sbtn:text-[#F5EFE6]">
                          {v.label}
                        </span>
                        <span className="text-base font-extrabold text-[#D4A853] group-hover/sbtn:text-[#F5EFE6] tabular-nums">
                          {v.price}{' '}
                          <span className="text-[11px] font-normal">ج</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Special Royal Card for سماش الباشا */}
          {section.items
            .filter((item) => !item.variants)
            .map((item) => (
              <div
                key={item.id}
                onClick={() => handleAddSingle(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleAddSingle(item);
                  }
                }}
                className="group relative rounded-2xl bg-gradient-to-l from-[#1F1210] via-[#171210] to-[#1F1510] border-2 border-[#D4A853]/60 p-6 sm:p-8 shadow-[0_14px_35px_rgba(0,0,0,0.7)] hover:border-[#D4A853] transition-all duration-150 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
              >
                <div>
                  <div className="text-xs font-bold text-[#D4A853] mb-1">
                    الاختيار الملكي المميز · مكونات سماش الباشا
                  </div>
                  <h3 className="font-display-ar text-2xl sm:text-3xl font-bold text-[#F5EFE6] group-hover:text-[#D4A853] transition-colors">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-sm sm:text-base text-[#E6DCCD] mt-2 font-medium">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0 border-t sm:border-t-0 pt-4 sm:pt-0 border-[#2E221D]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-[#D4A853] tabular-nums">
                      {item.price}
                    </span>
                    <span className="text-sm font-bold text-[#F5EFE6]">
                      جنيه
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#9E1B1B] text-[#F5EFE6] text-xs font-bold border border-[#D4A853]/50 group-hover:bg-[#B22222] transition-colors whitespace-nowrap shrink-0">
                    <Plus className="w-4 h-4 text-[#D4A853]" />
                    <span>أضف سماش الباشا</span>
                  </span>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Optional Section Addons Sub-Block (إضافات البيتزا, إضافات الفطير, إضافة مكسرات) */}
      {section.addons && section.addons.length > 0 && (
        <div className="mt-8 rounded-xl bg-[#120E0D] border border-[#D4A853]/30 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="text-base sm:text-lg font-bold text-[#D4A853]">
              {section.addonsTitle || 'الإضافات المتاحة'}
            </h3>
            <span className="text-xs text-[#9C8F82]">
              اضغط لإضافة الصنف لطلبك
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {section.addons.map((addon) => (
              <button
                key={addon.id}
                type="button"
                onClick={() => handleAddAddon(addon)}
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-[#1A1412] hover:bg-[#9E1B1B] border border-[#2E231E] hover:border-[#D4A853]/60 transition-all duration-150 cursor-pointer group/abtn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
              >
                <span className="text-sm font-bold text-[#F5EFE6]">
                  {addon.name}
                </span>
                <span className="text-sm font-extrabold text-[#D4A853] group-hover/abtn:text-[#F5EFE6] tabular-nums whitespace-nowrap shrink-0">
                  {addon.price} جنيه
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <OrientalArchDivider />
      </div>
    </motion.section>
  );
};
