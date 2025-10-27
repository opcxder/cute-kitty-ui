# Cute-Kitty-UI Core

[![npm version](https://img.shields.io/npm/v/cute-kitty-ui-core.svg)](https://www.npmjs.com/package/cute-kitty-ui-core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Shared utilities, types, and hooks for Cute-Kitty-UI

## Overview

The Cute-Kitty-UI Core package provides essential utilities, TypeScript types, and React hooks that power the Cute-Kitty-UI component library. It serves as the foundation for all cat components.

## Features

- **TypeScript Types**: Comprehensive type definitions for all component props
- **Utility Functions**: Helper functions for animations, positioning, and styling
- **Hooks**: Custom React hooks for animations and interactions
- **Theme System**: Color palette and theme management utilities

## Installation

This package is automatically installed when you use the Cute-Kitty-UI CLI:

```bash
npx cute-kitty-ui@latest init
```

## Usage

```tsx
import { KittyBaseProps, getPixelSize } from 'cute-kitty-ui-core'

// Use types in your components
interface MyCustomCatProps extends KittyBaseProps {
  customProp?: string
}

// Use utility functions
const pixelSize = getPixelSize('md') // Returns the pixel value for medium size
```

## Documentation

For full documentation, visit [cute-kitty-ui.dev](https://cute-kitty-ui.dev)

## Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for more details.

## License

MIT © Cute-Kitty-UI