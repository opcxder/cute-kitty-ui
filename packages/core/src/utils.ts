import { KittyBaseProps, themes } from './types';

/**
 * Convert size prop to pixel value
 */
export function getPixelSize(size: KittyBaseProps['size']): number {
  if (typeof size === 'number') {
    return size;
  }
  
  const sizes = {
    xs: 40,   // Icon size
    sm: 80,   // Button companion
    md: 160,  // Default, card-sized
    lg: 240,  // Hero section
    xl: 320,  // Full-width features
  };
  
  return sizes[size || 'md'];
}

/**
 * Get colors from theme or direct color values
 */
export function getColors(props: Pick<KittyBaseProps, 'theme' | 'primaryColor' | 'secondaryColor'>): {
  primaryColor: string;
  secondaryColor: string;
} {
  if (props.theme && themes[props.theme]) {
    return {
      primaryColor: props.primaryColor || themes[props.theme].primary,
      secondaryColor: props.secondaryColor || themes[props.theme].secondary,
    };
  }
  
  return {
    primaryColor: props.primaryColor || themes.classic.primary,
    secondaryColor: props.secondaryColor || themes.classic.secondary,
  };
}

/**
 * Get positioning styles based on anchor and offset
 */
export function getPositionStyles(props: Pick<KittyBaseProps, 'position' | 'anchor' | 'offset' | 'zIndex'>): React.CSSProperties {
  const position = props.position || 'relative';
  const zIndex = props.zIndex || 'auto';
  const styles: React.CSSProperties = { position, zIndex };
  
  if (!props.anchor) {
    return styles;
  }
  
  const offset = props.offset || { x: 0, y: 0 };
  
  switch (props.anchor) {
    case 'top-left':
      styles.top = offset.y;
      styles.left = offset.x;
      break;
    case 'top-right':
      styles.top = offset.y;
      styles.right = offset.x;
      break;
    case 'bottom-left':
      styles.bottom = offset.y;
      styles.left = offset.x;
      break;
    case 'bottom-right':
      styles.bottom = offset.y;
      styles.right = offset.x;
      break;
    case 'center':
      styles.top = '50%';
      styles.left = '50%';
      styles.transform = `translate(-50%, -50%) translateX(${offset.x}px) translateY(${offset.y}px)`;
      break;
    case 'top-center':
      styles.top = offset.y;
      styles.left = '50%';
      styles.transform = `translateX(-50%) translateX(${offset.x}px)`;
      break;
    case 'bottom-center':
      styles.bottom = offset.y;
      styles.left = '50%';
      styles.transform = `translateX(-50%) translateX(${offset.x}px)`;
      break;
    case 'left-center':
      styles.left = offset.x;
      styles.top = '50%';
      styles.transform = `translateY(-50%) translateY(${offset.y}px)`;
      break;
    case 'right-center':
      styles.right = offset.x;
      styles.top = '50%';
      styles.transform = `translateY(-50%) translateY(${offset.y}px)`;
      break;
  }
  
  return styles;
}

/**
 * Check if a part should be shown
 */
export function shouldShowPart(part: 'head' | 'body' | 'legs' | 'tail', showParts?: KittyBaseProps['showParts']): boolean {
  if (!showParts) {
    return true;
  }
  
  return showParts.includes(part);
}