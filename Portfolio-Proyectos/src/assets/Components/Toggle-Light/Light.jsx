import React from 'react';

const Light = ({ size = 18, className = "" }) => {
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
      aria-label="Icono de sol - Modo claro"
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
      <circle 
        cx="12" 
        cy="12" 
        r="5" 
        style={{
          // Smooth curves on all resolutions
          vectorEffect: 'non-scaling-stroke'
        }}
      />
      <path 
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
        style={{
          // Smooth curves on all resolutions
          vectorEffect: 'non-scaling-stroke'
        }}
      />
    </svg>
  );
};

export default Light;