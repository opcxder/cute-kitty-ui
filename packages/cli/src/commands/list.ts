import chalk from 'chalk';
import { getAvailableComponents } from '../utils/components';

interface ListOptions {
  type?: 'core' | 'composition';
}

export function listComponents(options: ListOptions): void {
  const { type } = options;
  const availableComponents = getAvailableComponents();
  
  // Filter components by type if specified
  const filteredComponents = type 
    ? availableComponents.filter(c => c.type === type)
    : availableComponents;
  
  console.log(chalk.cyan('\n🐱 Available Kitty-UI Components 🐱\n'));
  
  // Group components by type
  const componentsByType = filteredComponents.reduce((acc, component) => {
    if (!acc[component.type]) {
      acc[component.type] = [];
    }
    acc[component.type].push(component);
    return acc;
  }, {} as Record<string, typeof availableComponents>);
  
  // Display components by type
  Object.entries(componentsByType).forEach(([type, components]) => {
    console.log(chalk.yellow(`\n${type.toUpperCase()} COMPONENTS:`));
    components.forEach(component => {
      console.log(`  - ${chalk.green(component.name)}: ${component.description}`);
    });
  });
  
  console.log(chalk.cyan('\nTo install components, run:'));
  console.log(chalk.white('  kitty-ui install --component <component-name>'));
  console.log(chalk.white('  kitty-ui install --all\n'));
}