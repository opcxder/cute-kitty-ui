import React from 'react';
import { KittyBaseProps } from 'cute-kitty-ui-core';
import { motion } from 'framer-motion';

export interface CatPartProps extends KittyBaseProps {
  pose?: 'sitting' | 'standing' | 'lying' | 'sleeping' | 'playing' | 'peeking';
  showEars?: boolean;
}

export const CatHead: React.FC<CatPartProps> = ({
  primaryColor,
  secondaryColor,
  emotion = 'happy',
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
  const headVariants = {
    idle: animated ? {
      rotate: [-1, 1, -1],
      transition: {
        repeat: Infinity,
        duration: 4 * speedMultiplier,
        ease: 'easeInOut',
      },
    } : {},
  };

  // Ear animation variants
  const earVariants = {
    idle: animated ? {
      rotate: [-2, 0, -2],
      transition: {
        repeat: Infinity,
        duration: 3 * speedMultiplier,
        ease: 'easeInOut',
      },
    } : {},
  };

  // Render different eyes based on emotion
  const renderEyes = () => {
    switch (emotion) {
      case 'happy':
        return (
          <>
            <path d="M30 35 Q35 30 40 35" stroke="black" strokeWidth="1.5" fill="none" />
            <path d="M60 35 Q65 30 70 35" stroke="black" strokeWidth="1.5" fill="none" />
          </>
        );
      case 'sad':
        return (
          <>
            <path d="M30 38 Q35 43 40 38" stroke="black" strokeWidth="1.5" fill="none" />
            <path d="M60 38 Q65 43 70 38" stroke="black" strokeWidth="1.5" fill="none" />
            <path d="M45 55 L48 60 L51 55" stroke="#88AADD" strokeWidth="1.5" fill="none" /> {/* Tear */}
          </>
        );
      case 'excited':
        return (
          <>
            <circle cx="35" cy="35" r="5" fill="black" />
            <circle cx="65" cy="35" r="5" fill="black" />
          </>
        );
      case 'sleepy':
        return (
          <>
            <path d="M30 35 L40 35" stroke="black" strokeWidth="1.5" />
            <path d="M60 35 L70 35" stroke="black" strokeWidth="1.5" />
          </>
        );
      case 'curious':
        return (
          <>
            <circle cx="35" cy="35" r="3" fill="black" />
            <circle cx="65" cy="35" r="3" fill="black" />
            <circle cx="35" cy="35" r="5" stroke="black" strokeWidth="0.5" fill="none" />
            <circle cx="65" cy="35" r="5" stroke="black" strokeWidth="0.5" fill="none" />
          </>
        );
      case 'angry':
        return (
          <>
            <path d="M30 32 L40 38" stroke="black" strokeWidth="1.5" />
            <path d="M60 38 L70 32" stroke="black" strokeWidth="1.5" />
          </>
        );
      default:
        return (
          <>
            <circle cx="35" cy="35" r="3" fill="black" />
            <circle cx="65" cy="35" r="3" fill="black" />
          </>
        );
    }
  };

  // Render mouth based on emotion
  const renderMouth = () => {
    switch (emotion) {
      case 'happy':
        return <path d="M45 50 Q50 55 55 50" stroke="black" strokeWidth="1.5" fill="none" />;
      case 'sad':
        return <path d="M45 55 Q50 50 55 55" stroke="black" strokeWidth="1.5" fill="none" />;
      case 'excited':
        return (
          <ellipse cx="50" cy="55" rx="5" ry="7" fill="black" />
        );
      case 'sleepy':
        return <path d="M45 55 L55 55" stroke="black" strokeWidth="1" />;
      case 'curious':
        return <path d="M48 55 Q50 53 52 55" stroke="black" strokeWidth="1" fill="none" />;
      case 'angry':
        return <path d="M45 55 Q50 58 55 55" stroke="black" strokeWidth="1.5" fill="none" />;
      default:
        return <path d="M45 55 Q50 53 55 55" stroke="black" strokeWidth="1" fill="none" />;
    }
  };

  return (
    <motion.g
      initial="idle"
      animate="idle"
      variants={headVariants}
      style={{ originX: '50%', originY: '60%' }}
    >
      {/* Head shape */}
      <circle cx="50" cy="50" r="30" fill={primaryColor} />
      
      {/* Ears */}
      <motion.g variants={earVariants} style={{ originX: '35%', originY: '25%' }}>
        <path d="M25 25 L15 5 L35 15 Z" fill={primaryColor} />
        <path d="M25 25 L20 10 L30 15 Z" fill={secondaryColor} />
      </motion.g>
      
      <motion.g variants={earVariants} style={{ originX: '65%', originY: '25%' }}>
        <path d="M75 25 L85 5 L65 15 Z" fill={primaryColor} />
        <path d="M75 25 L80 10 L70 15 Z" fill={secondaryColor} />
      </motion.g>
      
      {/* Eyes */}
      {renderEyes()}
      
      {/* Nose */}
      <path d="M47 45 L50 48 L53 45 Z" fill={secondaryColor} />
      
      {/* Mouth */}
      {renderMouth()}
      
      {/* Whiskers */}
      <g stroke="rgba(0,0,0,0.3)" strokeWidth="1">
        <line x1="30" y1="48" x2="15" y2="45" />
        <line x1="30" y1="50" x2="15" y2="50" />
        <line x1="30" y1="52" x2="15" y2="55" />
        
        <line x1="70" y1="48" x2="85" y2="45" />
        <line x1="70" y1="50" x2="85" y2="50" />
        <line x1="70" y1="52" x2="85" y2="55" />
      </g>
    </motion.g>
  );
};