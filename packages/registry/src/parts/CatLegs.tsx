import React from 'react';
import { CatPartProps } from '@kitty-ui/core';
import { motion } from 'framer-motion';

export const CatLegs: React.FC<CatPartProps> = ({
  primaryColor,
  secondaryColor,
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

  // Animation variants for front paws
  const frontPawsVariants = {
    idle: animated ? {
      rotate: [-1, 1, -1],
      transition: {
        repeat: Infinity,
        duration: 4 * speedMultiplier,
        ease: 'easeInOut',
      },
    } : {},
  };

  // Animation variants for back legs
  const backLegsVariants = {
    idle: animated ? {
      y: [0, -1, 0],
      transition: {
        repeat: Infinity,
        duration: 5 * speedMultiplier,
        ease: 'easeInOut',
      },
    } : {},
  };

  // Render legs based on pose
  const renderLegs = () => {
    switch (pose) {
      case 'sitting':
        return (
          <>
            {/* Front paws */}
            <motion.g variants={frontPawsVariants} style={{ originX: '35%', originY: '100%' }}>
              <ellipse cx="35" cy="100" rx="8" ry="5" fill={secondaryColor} />
            </motion.g>
            <motion.g variants={frontPawsVariants} style={{ originX: '65%', originY: '100%' }}>
              <ellipse cx="65" cy="100" rx="8" ry="5" fill={secondaryColor} />
            </motion.g>
            
            {/* Back legs (mostly hidden in sitting pose) */}
            <motion.g variants={backLegsVariants}>
              <path d="M30 100 L25 110 L35 110 Z" fill={primaryColor} />
              <path d="M70 100 L65 110 L75 110 Z" fill={primaryColor} />
            </motion.g>
          </>
        );
      
      case 'lying':
        return (
          <>
            {/* Front paws */}
            <motion.g variants={frontPawsVariants}>
              <ellipse cx="20" cy="85" rx="8" ry="5" fill={secondaryColor} />
              <ellipse cx="35" cy="85" rx="8" ry="5" fill={secondaryColor} />
            </motion.g>
            
            {/* Back legs */}
            <motion.g variants={backLegsVariants}>
              <ellipse cx="75" cy="85" rx="8" ry="5" fill={secondaryColor} />
              <ellipse cx="85" cy="85" rx="8" ry="5" fill={secondaryColor} />
            </motion.g>
          </>
        );
      
      case 'standing':
        return (
          <>
            {/* Front legs */}
            <motion.g variants={frontPawsVariants}>
              <rect x="32" y="90" width="5" height="15" rx="2" fill={primaryColor} />
              <ellipse cx="34.5" cy="105" rx="4" ry="3" fill={secondaryColor} />
              
              <rect x="63" y="90" width="5" height="15" rx="2" fill={primaryColor} />
              <ellipse cx="65.5" cy="105" rx="4" ry="3" fill={secondaryColor} />
            </motion.g>
            
            {/* Back legs */}
            <motion.g variants={backLegsVariants}>
              <rect x="32" y="90" width="5" height="15" rx="2" fill={primaryColor} />
              <ellipse cx="34.5" cy="105" rx="4" ry="3" fill={secondaryColor} />
              
              <rect x="63" y="90" width="5" height="15" rx="2" fill={primaryColor} />
              <ellipse cx="65.5" cy="105" rx="4" ry="3" fill={secondaryColor} />
            </motion.g>
          </>
        );
      
      case 'sleeping':
        return (
          <>
            {/* Mostly hidden legs for sleeping pose */}
            <motion.g variants={frontPawsVariants}>
              <ellipse cx="30" cy="95" rx="6" ry="3" fill={secondaryColor} />
            </motion.g>
            <motion.g variants={backLegsVariants}>
              <ellipse cx="70" cy="95" rx="6" ry="3" fill={secondaryColor} />
            </motion.g>
          </>
        );
      
      case 'playing':
        return (
          <>
            {/* Front paws - one raised for playing */}
            <motion.g variants={frontPawsVariants}>
              <rect x="32" y="90" width="5" height="15" rx="2" fill={primaryColor} transform="rotate(-15, 32, 90)" />
              <ellipse cx="30" cy="105" rx="4" ry="3" fill={secondaryColor} />
              
              <rect x="63" y="85" width="5" height="12" rx="2" fill={primaryColor} transform="rotate(15, 63, 85)" />
              <ellipse cx="67" cy="95" rx="4" ry="3" fill={secondaryColor} />
            </motion.g>
            
            {/* Back legs in crouch position */}
            <motion.g variants={backLegsVariants}>
              <rect x="35" y="90" width="5" height="10" rx="2" fill={primaryColor} transform="rotate(-5, 35, 90)" />
              <ellipse cx="37" cy="100" rx="4" ry="3" fill={secondaryColor} />
              
              <rect x="60" y="90" width="5" height="10" rx="2" fill={primaryColor} transform="rotate(5, 60, 90)" />
              <ellipse cx="63" cy="100" rx="4" ry="3" fill={secondaryColor} />
            </motion.g>
          </>
        );
      
      default:
        return (
          <>
            {/* Default to sitting pose */}
            <motion.g variants={frontPawsVariants}>
              <ellipse cx="35" cy="100" rx="8" ry="5" fill={secondaryColor} />
              <ellipse cx="65" cy="100" rx="8" ry="5" fill={secondaryColor} />
            </motion.g>
          </>
        );
    }
  };

  return (
    <g>
      {renderLegs()}
    </g>
  );
};