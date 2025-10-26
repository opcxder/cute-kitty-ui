import React from 'react';
import { KittyBaseProps } from '@kitty-ui/core';
import { SittingCat } from '../components/SittingCat';
import { motion } from 'framer-motion';

export interface HoldingSignCatProps extends KittyBaseProps {
  emotion?: 'happy' | 'excited' | 'curious';
  holdingSign?: {
    content: React.ReactNode;
    width: number;
    height: number;
    backgroundColor?: string;
    borderColor?: string;
    rotation?: number;
    style?: React.CSSProperties;
  };
}

export const HoldingSignCat: React.FC<HoldingSignCatProps> = ({
  primaryColor = '#FFA500',
  secondaryColor = '#FFFFFF',
  size = 'md',
  emotion = 'happy',
  animated = true,
  animationSpeed = 'normal',
  holdingSign = {
    content: 'Hello!',
    width: 100,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
  },
  className,
  style,
}) => {
  // Calculate size in pixels
  const sizeMap = {
    xs: 100,
    sm: 150,
    md: 200,
    lg: 250,
    xl: 300,
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
          fill={holdingSign.backgroundColor} 
          stroke={holdingSign.borderColor}
          strokeWidth="2"
        />
        
        {/* Sign text */}
        <text
          x="75"
          y="85"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#000000"
          fontFamily="Arial, sans-serif"
          fontSize="12"
          fontWeight="bold"
        >
          {typeof holdingSign.content === 'string' ? holdingSign.content : 'Hello!'}
        </text>
      </motion.g>
    </svg>
  );
};