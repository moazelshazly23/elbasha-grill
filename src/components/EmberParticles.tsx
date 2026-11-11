import React from 'react';

interface EmberParticlesProps {
  count?: number;
}

const EMBER_CONFIGS = [
  { left: '8%', bottom: '5%', size: 4, duration: '7s', delay: '0s', color: '#E85D04' },
  { left: '18%', bottom: '12%', size: 3, duration: '5.5s', delay: '1.2s', color: '#D4A853' },
  { left: '28%', bottom: '2%', size: 5, duration: '8s', delay: '2.5s', color: '#9E1B1B' },
  { left: '37%', bottom: '8%', size: 3, duration: '6.2s', delay: '0.7s', color: '#F48C06' },
  { left: '49%', bottom: '4%', size: 4, duration: '7.4s', delay: '3.1s', color: '#D4A853' },
  { left: '61%', bottom: '10%', size: 3, duration: '5.8s', delay: '1.8s', color: '#E85D04' },
  { left: '73%', bottom: '6%', size: 5, duration: '8.3s', delay: '0.4s', color: '#D4A853' },
  { left: '84%', bottom: '3%', size: 3, duration: '6.7s', delay: '2.2s', color: '#9E1B1B' },
  { left: '92%', bottom: '11%', size: 4, duration: '7.1s', delay: '3.9s', color: '#F48C06' },
  { left: '14%', bottom: '18%', size: 3, duration: '6.4s', delay: '4.2s', color: '#D4A853' },
  { left: '55%', bottom: '15%', size: 4, duration: '7.8s', delay: '1.5s', color: '#E85D04' },
  { left: '79%', bottom: '14%', size: 3, duration: '6.1s', delay: '2.9s', color: '#D4A853' },
];

export const EmberParticles: React.FC<EmberParticlesProps> = ({ count = 12 }) => {
  const particles = EMBER_CONFIGS.slice(0, count);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {particles.map((p, idx) => (
        <span
          key={idx}
          className="ember-particle absolute rounded-full blur-[0.5px]"
          style={
            {
              left: p.left,
              bottom: p.bottom,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 8px 2px ${p.color}`,
              '--duration': p.duration,
              '--delay': p.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export const OrientalArchDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-3 my-3 select-none" aria-hidden="true">
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-[#D4A853]/60 to-transparent" />
      <svg
        width="28"
        height="18"
        viewBox="0 0 28 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#D4A853] shrink-0"
      >
        <path
          d="M14 1L18.5 9L14 17L9.5 9L14 1Z"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="#9E1B1B"
        />
        <path d="M3 9L6 6L9 9L6 12L3 9Z" fill="currentColor" fillOpacity="0.7" />
        <path d="M19 9L22 6L25 9L22 12L19 9Z" fill="currentColor" fillOpacity="0.7" />
      </svg>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-[#D4A853]/60 to-transparent" />
    </div>
  );
};
