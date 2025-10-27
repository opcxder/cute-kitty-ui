# 🐱 Cute-Kitty-UI

Adorable cat-themed React components for your web applications.

[![npm version](https://img.shields.io/npm/v/cute-kitty-ui-cli)](https://www.npmjs.com/package/cute-kitty-ui-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/opcxder/cute-kitty-ui)

## Features

- 🐈 **Adorable Cat Components**: Five core cat poses and three composition components
- 🎨 **Customizable**: Change colors, emotions, sizes, and animations
- 🧩 **Modular**: Use individual components or compose them together
- 📦 **Lightweight**: SVG-based components with minimal bundle size
- 🚀 **Easy to Use**: Simple API with TypeScript support
- 🛠️ **CLI Tool**: Quickly add components to your project

## Packages

- [**cute-kitty-ui-cli**](./packages/cli) - CLI tool for adding components to your project
- [**cute-kitty-ui-core**](./packages/core) - Core utilities, types, and hooks
- [**cute-kitty-ui-registry**](./packages/registry) - Component source of truth

## Quick Start

### Using the CLI

```bash
# Install the CLI globally
npm install -g cute-kitty-ui-cli

# Create a new project with Cute-Kitty-UI
cute-kitty-ui-cli create my-cat-app

# Or add to an existing project
cute-kitty-ui-cli install --all
```

### Manual Installation

```bash
# Using npm
npm install cute-kitty-ui-core cute-kitty-ui-registry

# Using yarn
yarn add cute-kitty-ui-core cute-kitty-ui-registry

# Using pnpm
pnpm add cute-kitty-ui-core cute-kitty-ui-registry
```

## Basic Usage

```jsx
import { SittingCat, HoldingSignCat } from 'cute-kitty-ui-registry';

function App() {
  return (
    <div>
      <SittingCat 
        primaryColor="#FF6B6B" 
        emotion="happy" 
        animated={true} 
      />
      
      <HoldingSignCat 
        primaryColor="#4ECDC4" 
        signText="Hello World!" 
        animated={true} 
      />
    </div>
  );
}
```

## Available Components

### Core Components

- `SittingCat` - A cat in a sitting pose
- `LyingCat` - A cat in a lying pose
- `StandingCat` - A cat in a standing pose
- `SleepingCat` - A cat in a sleeping pose
- `PlayingCat` - A cat in a playful pose

### Composition Components

- `HoldingSignCat` - A cat holding a customizable sign
- `PeekingCat` - A cat peeking from an edge of the container
- `FaceOnlyCat` - Just the face of a cat

## Documentation

For full documentation, visit [kitty-ui.dev](https://kitty-ui.dev) (coming soon).

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

MIT © Kitty-UI

## Credits

Built with ❤️ for developers who want to make the web more delightful.

---

**Made with 🐱 and ☕**