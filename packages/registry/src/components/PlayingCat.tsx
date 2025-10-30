import React from 'react';
import { KittyBaseProps } from 'cute-kitty-ui-core';
import { CatHead } from '../parts/CatHead';
import { CatBody } from '../parts/CatBody';
import { CatLegs } from '../parts/CatLegs';
import { CatTail } from '../parts/CatTail';

export interface PlayingCatProps extends KittyBaseProps {
  emotion?: 'happy' | 'excited' | 'curious';
}

export const PlayingCat: React.FC<PlayingCatProps> = ({
  primaryColor = '#FFA500',
  secondaryColor = '#FFFFFF',
  size = 'md',
  emotion = 'excited',
  animated = true, // Default to animated for playing cat
  animationSpeed = 'normal',
  className,
  style,
}) => {
  // Calculate size in pixels
  const sizeMap = {
    xs: 80,
    sm: 100,
    md: 150,
    lg: 200,
    xl: 250,
  };
  const pixelSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g>
        <CatTail 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="playing"
          size={size}
          animated={animated}
          animationSpeed={animated ? animationSpeed : 'normal'}
        />
        <CatBody 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="playing"
          size={size}
          animated={animated}
          animationSpeed={animated ? animationSpeed : 'normal'}
        />
        <CatLegs 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="playing"
          size={size}
          animated={animated}
          animationSpeed={animated ? animationSpeed : 'normal'}
        />
        <CatHead 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          emotion={emotion}
          pose="playing"
          size={size}
          animated={animated}
          animationSpeed={animated ? animationSpeed : 'normal'}
        />
      </g>
    </svg>
  );
};