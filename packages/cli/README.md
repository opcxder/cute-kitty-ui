# Cute-Kitty-UI CLI

[![npm version](https://img.shields.io/npm/v/cute-kitty-ui-cli.svg)](https://www.npmjs.com/package/cute-kitty-ui-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Add adorable cat components to your React project

## Overview

Cute-Kitty-UI CLI is a command-line tool that helps you add cute, customizable cat components to your React project. It follows the shadcn-style approach where components are copied directly into your codebase, giving you full control over the code.

## Installation

```bash
# Install globally
npm install -g cute-kitty-ui-cli

# Or use directly with npx
npx cute-kitty-ui-cli@latest <command>
```

## Commands

### Initialize Cute-Kitty-UI in your project

```bash
npx cute-kitty-ui-cli@latest init
```

This command will:
- Detect your project type (Next.js, Vite, CRA)
- Create a components directory for Kitty-UI
- Install required dependencies
- Update your tsconfig.json with path aliases

### Add a component

```bash
npx cute-kitty-ui-cli@latest add <component-name>
```

Available components:
- `sitting-cat`
- `lying-cat`
- `standing-cat`
- `sleeping-cat`
- `playing-cat`
- `holding-sign-cat`
- `peeking-cat`
- `face-only-cat`

Options:
- `-p, --path <path>` - Component installation path (default: `src/components/cute-kitty-ui`)
- `-o, --overwrite` - Overwrite existing components

## Usage Example

```tsx
import { SittingCat } from '@/components/cute-kitty-ui/sitting-cat'

export default function MyComponent() {
  return (
    <SittingCat 
      emotion="happy" 
      size="md" 
      animated 
      primaryColor="#FF6B9D"
    />
  )
}
```

## Documentation

For full documentation, visit [cute-kitty-ui.dev](https://cute-kitty-ui.dev)

## Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for more details.

## License

MIT © Cute-Kitty-UI