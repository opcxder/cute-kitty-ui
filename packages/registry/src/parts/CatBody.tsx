import React from 'react';
import { motion } from 'framer-motion';
import { CatPartProps } from './CatHead';

export const CatBody: React.FC<CatPartProps> = ({
  primaryColor,
  pose = 'sitting',
  animated = false,
  animationSpeed = 'normal',
}) => {
  // Animation speed multiplier
  const speedMultiplier = {
    slow: 1.5,
    normal: 1,
    fast: 0.7,
  }[animationSpeed];

  // Animation variants
  const bodyVariants = {
    idle: animated ? {
      y: [0, -2, 0],
      transition: {
        repeat: Infinity,
        duration: 3 * speedMultiplier,
        ease: 'easeInOut',
      },
    } : {},
  };

  // Render different body shapes based on pose
  const renderBody = () => {
    switch (pose) {
      case 'sitting':
        return (
          <path 
            d="M30 70 C30 40 70 40 70 70 L70 100 C70 110 30 110 30 100 Z" 
            fill={primaryColor} 
          />
        );
      case 'lying':
        return (
          <ellipse 
            cx="50" 
            cy="90" 
            rx="40" 
            ry="20" 
            fill={primaryColor} 
          />
        );
      case 'standing':
        return (
          <path 
            d="M30 70 C30 50 70 50 70 70 L70 90 C70 100 30 100 30 90 Z" 
            fill={primaryColor} 
          />
        );
      case 'sleeping':
        return (
          <path 
            d="M20 90 C20 75 80 75 80 90 C80 105 20 105 20 90 Z" 
            fill={primaryColor} 
          />
        );
      case 'playing':
        return (
          <path 
            d="M30 70 C30 50 70 50 70 70 L70 90 C70 100 30 100 30 90 Z" 
            fill={primaryColor} 
            transform="rotate(-5, 50, 80)"
          />
        );
      default:
        return (
          <path 
            d="M30 70 C30 40 70 40 70 70 L70 100 C70 110 30 110 30 100 Z" 
            fill={primaryColor} 
          />
        );
    }
  };

  return (
    <motion.g
      initial="idle"
      animate="idle"
      variants={bodyVariants}
    >
      {renderBody()}
    </motion.g>
  );
};