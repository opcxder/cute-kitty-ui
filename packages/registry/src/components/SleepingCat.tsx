import React from 'react';
import { KittyBaseProps } from '@kitty-ui/core';
import { CatHead } from '../parts/CatHead';
import { CatBody } from '../parts/CatBody';
import { CatLegs } from '../parts/CatLegs';
import { CatTail } from '../parts/CatTail';

export interface SleepingCatProps extends KittyBaseProps {
  emotion?: 'sleepy';
}

export const SleepingCat: React.FC<SleepingCatProps> = ({
  primaryColor = '#FFA500',
  secondaryColor = '#FFFFFF',
  size = 'medium',
  emotion = 'sleepy',
  animated = false,
  animationSpeed = 'normal',
  className,
  style,
}) => {
  // Calculate size in pixels
  const sizeMap = {
    small: 120,
    medium: 180,
    large: 240,
  };
  const pixelSize = typeof size === 'number' ? size : sizeMap[size];
  const height = pixelSize * 0.5; // Sleeping cat is wider than tall

  return (
    <svg
      width={pixelSize}
      height={height}
      viewBox="0 0 120 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g>
        <CatBody 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="sleeping"
          animated={animated}
          animationSpeed={animationSpeed}
        />
        <CatLegs 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="sleeping"
          animated={animated}
          animationSpeed={animationSpeed}
        />
        <CatTail 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="sleeping"
          animated={animated}
          animationSpeed={animationSpeed}
        />
        <CatHead 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          emotion="sleepy"
          pose="sleeping"
          animated={animated}
          animationSpeed={animationSpeed}
        />
      </g>
    </svg>
  );
};