import React from 'react';
import { KittyBaseProps, HoldingSignProps, getColorFromTheme } from '@kitty-ui/core';
import { SittingCat } from '../components/SittingCat';
import { motion } from 'framer-motion';

export interface HoldingSignCatProps extends KittyBaseProps, HoldingSignProps {
  emotion?: 'happy' | 'excited' | 'curious';
}

export const HoldingSignCat: React.FC<HoldingSignCatProps> = ({
  primaryColor = '#FFA500',
  secondaryColor = '#FFFFFF',
  size = 'medium',
  emotion = 'happy',
  animated = true,
  animationSpeed = 'normal',
  signText = 'Hello!',
  signBackgroundColor = '#FFFFFF',
  signTextColor = '#000000',
  signBorderColor = '#000000',
  className,
  style,
}) => {
  // Calculate size in pixels
  const sizeMap = {
    small: 150,
    medium: 200,
    large: 250,
  };
  const pixelSize = typeof size === 'number' ? size : sizeMap[size];
  
  // Animation speed multiplier
  const speedMultiplier = {
    slow: 1.5,
    normal: 1,
    fast: 0.7,
  }[animationSpeed];

  // Animation variants for the sign
  const signVariants = {
    idle: animated ? {
      rotate: [-1, 1, -1],
      transition: {
        repeat: Infinity,
        duration: 3 * speedMultiplier,
        ease: 'easeInOut',
      },
    } : {},
  };

  return (
    <svg
      width={pixelSize}
      height={pixelSize * 1.2}
      viewBox="0 0 150 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g transform="translate(25, 30)">
        <SittingCat 
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          emotion={emotion}
          animated={animated}
          animationSpeed={animationSpeed}
          size={100}
        />
      </g>
      
      {/* Sign */}
      <motion.g
        variants={signVariants}
        initial="idle"
        animate="idle"
        style={{ originX: '75px', originY: '100px' }}
      >
        {/* Sign stick */}
        <rect x="72" y="100" width="6" height="50" fill="#8B4513" />
        
        {/* Sign background */}
        <rect 
          x="40" 
          y="60" 
          width="70" 
          height="40" 
          rx="5" 
          fill={signBackgroundColor} 
          stroke={signBorderColor}
          strokeWidth="2"
        />
        
        {/* Sign text */}
        <text
          x="75"
          y="85"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={signTextColor}
          fontFamily="Arial, sans-serif"
          fontSize="12"
          fontWeight="bold"
        >
          {signText}
        </text>
      </motion.g>
    </svg>
  );
};