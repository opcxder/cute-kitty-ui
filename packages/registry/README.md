# Cute-Kitty-UI Registry

[![npm version](https://img.shields.io/npm/v/cute-kitty-ui-registry.svg)](https://www.npmjs.com/package/cute-kitty-ui-registry)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Source of truth for Cute-Kitty-UI components

## Overview

The Cute-Kitty-UI Registry package contains the source code for all cat components. It serves as the central repository from which the CLI fetches components to install in user projects.

## Components

### Basic Poses
- `SittingCat` - Classic sitting pose, perfect for cards and buttons
- `LyingCat` - Horizontal pose, great for banners and footers
- `StandingCat` - On all fours, ideal for action scenes
- `SleepingCat` - Curled up, perfect for loading states or corners
- `PlayingCat` - Dynamic pouncing pose for interactive elements

### Compositions
- `HoldingSignCat` - Cat holding a customizable sign or message
- `PeekingCat` - Cat peeking from edges of containers
- `FaceOnlyCat` - Just the cat's face, for minimal space usage

## Component Structure

Each component follows a consistent structure:

```tsx
interface KittyBaseProps {
  // Appearance
  primaryColor?: string
  secondaryColor?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
  
  // Emotion System
  emotion?: 'happy' | 'sad' | 'excited' | 'sleepy' | 'curious' | 'angry'
  
  // Positioning System
  position?: 'relative' | 'absolute' | 'fixed'
  anchor?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  offset?: { x: number; y: number }
  zIndex?: number
  
  // Animation
  animated?: boolean
  animationSpeed?: 'slow' | 'normal' | 'fast'
  hover?: boolean
  
  // Accessories
  accessories?: ('bow' | 'hat' | 'glasses' | 'collar')[]
  
  // Utility
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}
```

## Usage

This package is not meant to be used directly. Instead, use the Cute-Kitty-UI CLI to add components to your project:

```bash
npx cute-kitty-ui@latest add sitting-cat
```

## Documentation

For full documentation, visit [cute-kitty-ui.dev](https://cute-kitty-ui.dev)

## Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for more details.

## License

MIT © Cute-Kitty-UI