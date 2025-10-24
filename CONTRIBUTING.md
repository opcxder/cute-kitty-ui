# Contributing to Kitty-UI

Thank you for your interest in contributing to Kitty-UI! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please be respectful and considerate of others when contributing to this project. We aim to foster an inclusive and welcoming community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on GitHub with the following information:
- A clear, descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment information (browser, OS, etc.)

### Suggesting Features

We welcome feature suggestions! Please create an issue with:
- A clear, descriptive title
- Detailed description of the feature
- Any relevant mockups or examples
- Use cases for the feature

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Run tests to ensure your changes don't break existing functionality
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature-name`)
7. Open a Pull Request

## Development Setup

1. Clone the repository
```bash
git clone https://github.com/opcxder/kitty-ui.git
cd kitty-ui
```

2. Install dependencies
```bash
pnpm install
```

3. Start development
```bash
pnpm dev
```

## Project Structure

- `packages/core` - Core utilities and types
- `packages/registry` - Component implementations
- `packages/cli` - CLI tool for installing components
- `apps/docs` - Documentation site
- `apps/playground` - Development playground

## Testing

Run tests with:
```bash
pnpm test
```

## Building

Build all packages with:
```bash
pnpm build
```

## License

By contributing to Kitty-UI, you agree that your contributions will be licensed under the project's MIT license.

Thank you for contributing to Kitty-UI! 🐱