import React, { useState } from 'react';
import { Flame } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  title?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  title,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1C1411] via-[#140F0D] to-[#2A1210] border border-[#D4A853]/20 p-6 text-center overflow-hidden ${className}`}
      >
        <Flame className="w-8 h-8 text-[#D4A853]/60 mb-2" />
        {title && (
          <span className="text-sm font-semibold text-[#F5EFE6]/80">{title}</span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
