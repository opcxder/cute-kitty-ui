#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { installComponent } from './commands/install';
import { listComponents } from './commands/list';
import { createProject } from './commands/create';

const program = new Command();

// CLI version and description
program
  .name('kitty-ui')
  .description('CLI tool for installing and managing Kitty-UI components')
  .version('0.1.0');

// Install command
program
  .command('install')
  .description('Install Kitty-UI components into your project')
  .option('-c, --component <name>', 'Specific component to install')
  .option('-a, --all', 'Install all components')
  .option('-p, --path <path>', 'Path to install components to', './components')
  .action(installComponent);

// List command
program
  .command('list')
  .description('List all available Kitty-UI components')
  .option('-t, --type <type>', 'Filter by component type (core, composition)')
  .action(listComponents);

// Create project command
program
  .command('create')
  .description('Create a new project with Kitty-UI')
  .argument('<name>', 'Project name')
  .option('-t, --template <template>', 'Template to use (react, next)', 'react')
  .action(createProject);

// Display help if no arguments provided
if (process.argv.length === 2) {
  console.log(chalk.cyan('\n🐱 Welcome to Kitty-UI CLI! 🐱\n'));
  program.help();
}

// Parse command line arguments
program.parse();