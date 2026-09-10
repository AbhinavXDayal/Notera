import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7 text-base',
    md: 'w-8 h-8 text-lg',
    lg: 'w-10 h-10 text-xl',
  }[size];

  const textDimensions = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  return (
    <div className={`flex items-center space-x-3 group cursor-pointer select-none ${className}`}>
      {/* Aesthetic Emblem Icon */}
      <div
        className={`${iconDimensions} rounded-full border border-primary/60 bg-surface-container/60 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:shadow-terra-hover`}
      >
        {/* Subtle decorative inner ring */}
        <span className="font-display italic font-semibold text-primary transition-colors duration-300 group-hover:text-on-primary">
          N
        </span>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <span
          className={`font-display ${textDimensions} tracking-wide font-normal text-on-surface transition-colors duration-300 group-hover:text-primary`}
        >
          Notera
        </span>
      )}
    </div>
  );
};
