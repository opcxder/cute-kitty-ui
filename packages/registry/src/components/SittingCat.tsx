import React from 'react';
import { KittyBaseProps } from '@kitty-ui/core';
import { CatHead } from '../parts/CatHead';
import { CatBody } from '../parts/CatBody';
import { CatLegs } from '../parts/CatLegs';
import { CatTail } from '../parts/CatTail';

export interface SittingCatProps extends KittyBaseProps {
  // No need to redefine emotion as it's already in KittyBaseProps
}

export const SittingCat: React.FC<SittingCatProps> = ({
  primaryColor = '#FFA500',
  secondaryColor = '#FFFFFF',
  size = 'md',
  emotion = 'happy',
  animated = false,
  animationSpeed = 'normal',
  className,
  style,
}) => {
  // Calculate size in pixels
  const sizeMap = {
    xs: 40,
    sm: 80,
    md: 160,
    lg: 240,
    xl: 320,
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
          pose="sitting"
          animated={animated}
          animationSpeed={animationSpeed}
        />
        <CatBody 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="sitting"
          animated={animated}
          animationSpeed={animationSpeed}
        />
        <CatLegs 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="sitting"
          animated={animated}
          animationSpeed={animationSpeed}
        />
        <CatHead 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          emotion={emotion}
          pose="sitting"
          animated={animated}
          animationSpeed={animationSpeed}
        />
      </g>
    </svg>
  );
};