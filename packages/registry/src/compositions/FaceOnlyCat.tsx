import React from 'react';
import { KittyBaseProps } from 'cute-kitty-ui-core';
import { CatHead } from '../parts/CatHead';

export interface FaceOnlyCatProps extends KittyBaseProps {
  emotion?: 'happy' | 'sad' | 'excited' | 'sleepy' | 'curious' | 'angry';
  showEars?: boolean;
}

export const FaceOnlyCat: React.FC<FaceOnlyCatProps> = ({
  primaryColor = '#FFA500',
  secondaryColor = '#FFFFFF',
  size = 'md',
  emotion = 'happy',
  animated = false,
  animationSpeed = 'normal',
  showEars = true,
  className,
  style,
}) => {
  // Calculate size in pixels
  const sizeMap = {
    xs: 40,
    sm: 60,
    md: 100,
    lg: 140,
    xl: 180,
  };
  const pixelSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g transform="translate(0, 20)">
        <CatHead 
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          emotion={emotion}
          size={size}
          animated={animated}
          animationSpeed={animationSpeed}
          showEars={showEars}
        />
      </g>
    </svg>
  );
};