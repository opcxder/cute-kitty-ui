import React from 'react';
import { motion } from 'framer-motion';
import { CatPartProps } from './CatHead';

export const CatTail: React.FC<CatPartProps> = ({
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
  const tailVariants = {
    idle: animated ? {
      rotate: pose === 'playing' ? [0, 10, 0, -10, 0] : [0, 5, 0, -5, 0],
      transition: {
        repeat: Infinity,
        duration: 2 * speedMultiplier,
        ease: 'easeInOut',
      },
    } : {},
  };

  // Render tail based on pose
  const renderTail = () => {
    switch (pose) {
      case 'sitting':
        return (
          <motion.path
            d="M30 85 C10 75, 5 60, 15 50"
            stroke={primaryColor}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            variants={tailVariants}
            style={{ originX: '30px', originY: '85px' }}
          />
        );
      
      case 'lying':
        return (
          <motion.path
            d="M90 90 C110 95, 115 85, 110 75"
            stroke={primaryColor}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            variants={tailVariants}
            style={{ originX: '90px', originY: '90px' }}
          />
        );
      
      case 'standing':
        return (
          <motion.path
            d="M30 80 C10 90, 5 100, 10 110"
            stroke={primaryColor}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            variants={tailVariants}
            style={{ originX: '30px', originY: '80px' }}
          />
        );
      
      case 'sleeping':
        return (
          <motion.path
            d="M80 90 C95 95, 100 90, 95 80"
            stroke={primaryColor}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            variants={tailVariants}
            style={{ originX: '80px', originY: '90px' }}
          />
        );
      
      case 'playing':
        return (
          <motion.path
            d="M30 85 C10 70, 0 60, 5 45"
            stroke={primaryColor}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            variants={tailVariants}
            style={{ originX: '30px', originY: '85px' }}
          />
        );
      
      default:
        return (
          <motion.path
            d="M30 85 C10 75, 5 60, 15 50"
            stroke={primaryColor}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            variants={tailVariants}
            style={{ originX: '30px', originY: '85px' }}
          />
        );
    }
  };

  return renderTail();
};