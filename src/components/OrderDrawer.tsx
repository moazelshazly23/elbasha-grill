import React from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { CONTACT_INFO } from '../data/menuData';

export interface OrderCartItem {
  key: string;
  name: string;
  variantLabel?: string;
  price: number;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderCartItem[];
  onUpdateQuantity: (key: string, delta: number) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSendWhatsAppOrder = () => {
    if (items.length === 0) return;

    const lines = [
      'مرحباً مشويات الباشا 🔥، أود طلب الأصناف التالية:',
      '',
      ...items.map(
        (item, idx) =>
          `${idx + 1}. ${item.name}${
            item.variantLabel ? ` (${item.variantLabel})` : ''
          } × ${item.quantity} = ${item.price * item.quantity} جنيه`
      ),
      '',
      `الإجمالي التقريبي: ${totalAmount} جنيه`,
    ];

    const encodedText = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappIntl}?text=${encodedText}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="ملخص طلبك من مشويات الباشا"
    >
      {/* Backdrop Click Area */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="w-full max-w-md bg-[#120E0C] border-r border-[#D4A853]/30 h-full flex flex-col justify-between shadow-2xl">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#2A201D] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#D4A853]" />
            <h2 className="font-display-ar text-2xl font-bold text-[#F5EFE6]">
              قائمة طلباتك
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق سلة الطلبات"
            className="p-2 rounded-lg bg-[#1D1614] text-[#C8BCAE] hover:text-[#F5EFE6] border border-[#2E2420] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 text-[#D4A853]/40 mx-auto mb-3" />
              <p className="text-base font-bold text-[#F5EFE6]">
                لم تقم بإضافة أصناف بعد
              </p>
              <p className="text-xs text-[#9C8F82] mt-1">
                اضغط على أي صنف في المنيو لإضافته وإرساله مباشرة عبر واتساب
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#181311] border border-[#2C221E]"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-[#F5EFE6] truncate">
                    {item.name}
                  </h3>
                  {item.variantLabel && (
                    <p className="text-xs text-[#D4A853] mt-0.5">
                      {item.variantLabel}
                    </p>
                  )}
                  <p className="text-xs text-[#C8BCAE] mt-1 tabular-nums">
                    {item.price} جنيه × {item.quantity} ={' '}
                    <span className="font-bold text-[#D4A853]">
                      {item.price * item.quantity} جنيه
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.key, -1)}
                    aria-label="تقليل الكمية"
                    className="w-8 h-8 rounded-lg bg-[#221A17] hover:bg-[#9E1B1B] text-[#F5EFE6] flex items-center justify-center border border-[#362924] cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-[#F5EFE6] tabular-nums">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.key, 1)}
                    aria-label="زيادة الكمية"
                    className="w-8 h-8 rounded-lg bg-[#221A17] hover:bg-[#9E1B1B] text-[#F5EFE6] flex items-center justify-center border border-[#362924] cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#2A201D] bg-[#16110F] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#C8BCAE]">
                الإجمالي التقريبي
              </span>
              <span className="text-2xl font-extrabold text-[#D4A853] tabular-nums">
                {totalAmount} جنيه
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleSendWhatsAppOrder}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#1E7E34] hover:bg-[#218838] text-white font-bold text-sm shadow-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>إرسال الطلب عبر واتساب ({CONTACT_INFO.whatsappNumber})</span>
              </button>

              <button
                type="button"
                onClick={onClearCart}
                aria-label="إفراغ القائمة"
                className="p-3.5 rounded-xl bg-[#221A17] hover:bg-[#9E1B1B] text-[#C8BCAE] hover:text-white border border-[#382B25] transition-colors cursor-pointer"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
