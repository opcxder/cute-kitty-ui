import React from 'react';
import { KittyBaseProps } from '@kitty-ui/core';
import { CatHead } from '../parts/CatHead';
import { CatBody } from '../parts/CatBody';
import { CatLegs } from '../parts/CatLegs';
import { CatTail } from '../parts/CatTail';

export interface StandingCatProps extends KittyBaseProps {
  emotion?: 'happy' | 'sad' | 'excited' | 'sleepy' | 'curious' | 'angry';
}

export const StandingCat: React.FC<StandingCatProps> = ({
  primaryColor = '#FFA500',
  secondaryColor = '#FFFFFF',
  size = 'medium',
  emotion = 'curious',
  animated = false,
  animationSpeed = 'normal',
  className,
  style,
}) => {
  // Calculate size in pixels
  const sizeMap = {
    small: 100,
    medium: 150,
    large: 200,
  };
  const pixelSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <svg
      width={pixelSize}
      height={pixelSize * 1.2}
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g>
        <CatTail 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="standing"
          animated={animated}
          animationSpeed={animationSpeed}
        />
        <CatBody 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="standing"
          animated={animated}
          animationSpeed={animationSpeed}
        />
        <CatLegs 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          pose="standing"
          animated={animated}
          animationSpeed={animationSpeed}
        />
        <CatHead 
          primaryColor={primaryColor} 
          secondaryColor={secondaryColor}
          emotion={emotion}
          pose="standing"
          animated={animated}
          animationSpeed={animationSpeed}
        />
      </g>
    </svg>
  );
};