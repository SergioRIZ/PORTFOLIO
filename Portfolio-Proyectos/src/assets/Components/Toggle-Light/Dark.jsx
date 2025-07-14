import React from 'react';

const Dark = ({ size = 18, className = "" }) => {
  // Responsive size calculation - ensures minimum legibility
  const getResponsiveSize = () => {
    if (typeof size === 'number') {
      // Ensure minimum size for touch devices
      if (typeof window !== 'undefined' && window.innerWidth < 640) {
        return Math.max(16, Math.min(size, 24)); // Mobile: 16-24px range
      }
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        return Math.max(18, Math.min(size, 28)); // Tablet: 18-28px range
      }
      return Math.max(16, Math.min(size, 32)); // Desktop: 16-32px range
    }
    return size;
  };

  const responsiveSize = getResponsiveSize();

  // Responsive stroke width calculation
  const getStrokeWidth = () => {
    if (responsiveSize <= 16) return "1.5";
    if (responsiveSize <= 20) return "2";
    if (responsiveSize <= 24) return "2";
    return "2.5"; // Slightly thicker for larger icons
  };

  const strokeWidth = getStrokeWidth();

  return (
    <svg
      width={responsiveSize}
      height={responsiveSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-all duration-200 ${className}`}
      role="img"
      aria-label="Icono de luna - Modo oscuro"
      style={{
        // Ensure crisp rendering on all devices
        shapeRendering: 'geometricPrecision',
        // Optimize for mobile devices
        WebkitTapHighlightColor: 'transparent',
        // Ensure smooth scaling
        transformOrigin: 'center',
        // Prevent selection on mobile
        userSelect: 'none',
        WebkitUserSelect: 'none',
        // Improve touch responsiveness
        touchAction: 'manipulation'
      }}
    >
      <path 
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
        style={{
          // Smooth curves on all resolutions
          vectorEffect: 'non-scaling-stroke'
        }}
      />
    </svg>
  );
};

export default Dark;