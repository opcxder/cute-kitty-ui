import { CSSProperties, ReactNode } from 'react';

/**
 * Base props for all Kitty components
 */
export interface KittyBaseProps {
  // Appearance
  primaryColor?: string;          // Main body color
  secondaryColor?: string;        // Accents (ears, nose, paws)
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  theme?: 'classic' | 'pastel' | 'dark' | 'orange' | 'tuxedo';
  
  // Emotion System
  emotion?: 'happy' | 'sad' | 'excited' | 'sleepy' | 'curious' | 'angry';
  
  // Positioning System
  position?: 'relative' | 'absolute' | 'fixed';
  anchor?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 
           'top-center' | 'bottom-center' | 'left-center' | 'right-center';
  offset?: { x: number; y: number };
  zIndex?: number;
  
  // Interaction with other elements
  overflow?: 'visible' | 'hidden' | 'clip';
  blendMode?: CSSProperties['mixBlendMode'];
  
  // Animation
  animated?: boolean;
  animationSpeed?: 'slow' | 'normal' | 'fast';
  hover?: boolean;                // Reacts to hover
  
  // Accessories
  accessories?: ('bow' | 'hat' | 'glasses' | 'collar')[];
  
  // Parts visibility
  showParts?: ('head' | 'body' | 'legs' | 'tail')[];
  
  // Utility
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  'aria-label'?: string;
}

/**
 * Props for cat components that can hold signs
 */
export interface HoldingSignProps extends KittyBaseProps {
  holdingSign: {
    content: ReactNode;
    width: number;
    height: number;
    backgroundColor?: string;
    borderColor?: string;
    rotation?: number;
    style?: CSSProperties;
  };
}

/**
 * Props for cat parts (internal use)
 */
export interface CatPartProps {
  primaryColor: string;
  secondaryColor: string;
  size: number;
  emotion?: KittyBaseProps['emotion'];
  pose?: 'sitting' | 'lying' | 'standing' | 'sleeping' | 'playing';
  animated?: boolean;
  animationSpeed?: KittyBaseProps['animationSpeed'];
}

/**
 * Theme definitions
 */
export const themes = {
  classic: { primary: '#FF6B9D', secondary: '#FFC0CB' },    // Pink
  pastel: { primary: '#B4E7CE', secondary: '#FFE5E5' },     // Mint & pink
  dark: { primary: '#2D3142', secondary: '#BFC0C0' },       // Dark grey
  orange: { primary: '#FF8C42', secondary: '#FFFFFF' },     // Orange tabby
  tuxedo: { primary: '#000000', secondary: '#FFFFFF' },     // Black & white
};