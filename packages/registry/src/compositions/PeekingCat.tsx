import React from 'react';
import { KittyBaseProps, calculatePositionStyles } from '@kitty-ui/core';
import { CatHead } from '../parts/CatHead';
import { motion } from 'framer-motion';

export interface PeekingCatProps extends KittyBaseProps {
  emotion?: 'happy' | 'sad' | 'excited' | 'sleepy' | 'curious' | 'angry';
  anchor?: 'top' | 'right' | 'bottom' | 'left' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  offset?: number;
}

export const PeekingCat: React.FC<PeekingCatProps> = ({
  primaryColor = '#FFA500',
  secondaryColor = '#FFFFFF',
  size = 'medium',
  emotion = 'curious',
  animated = true,
  animationSpeed = 'normal',
  anchor = 'left',
  offset = 0,
  className,
  style,
}) => {
  // Calculate size in pixels
  const sizeMap = {
    small: 80,
    medium: 120,
    large: 160,
  };
  const pixelSize = typeof size === 'number' ? size : sizeMap[size];
  
  // Animation speed multiplier
  const speedMultiplier = {
    slow: 1.5,
    normal: 1,
    fast: 0.7,
  }[animationSpeed];

  // Calculate position based on anchor
  const positionStyles = calculatePositionStyles(anchor, offset);

  // Animation variants for peeking
  const peekingVariants = {
    idle: animated ? {
      x: anchor.includes('left') ? [-5, 0, -5] : anchor.includes('right') ? [5, 0, 5] : 0,
      y: anchor.includes('top') ? [-5, 0, -5] : anchor.includes('bottom') ? [5, 0, 5] : 0,
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
      height={pixelSize}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        ...style,
        ...positionStyles,
        position: 'absolute',
      }}
    >
      <motion.g
        variants={peekingVariants}
        initial="idle"
        animate="idle"
      >
        <CatHead 
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          emotion={emotion}
          animated={animated}
          animationSpeed={animationSpeed}
        />
      </motion.g>
    </svg>
  );
};