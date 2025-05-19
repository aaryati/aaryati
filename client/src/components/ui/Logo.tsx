import React from 'react';
import { default as aaryatiLogoPath } from '../../assets/aaryati-logo.png';
import { default as aaryatiIconPath } from '../../assets/A.png';  
import { default as aaryatiWhiteLogoPath } from '../../assets/Aaryati_full_white.png';

interface LogoProps {
  variant?: 'icon' | 'full' | 'full-white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'icon', className = '' }) => {
  if (variant === 'full') {
    return (
      <img 
        src={aaryatiLogoPath}
        alt="Aaryati Technologies" 
        className={`h-12 ${className}`}
      />
    );
  }
  
  if (variant === 'full-white') {
    return (
      <img 
        src={aaryatiWhiteLogoPath}
        alt="Aaryati Technologies" 
        className={className}
      />
    );
  }
  
  return (
    <img 
      src={aaryatiIconPath}
      alt="Aaryati" 
      className={`h-14 w-14 ${className}`}
    />
  );
};

export default Logo;
