import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';
import { getAvailableComponents } from '../utils/components';

interface InstallOptions {
  component?: string;
  all?: boolean;
  path?: string;
}

export async function installComponent(options: InstallOptions): Promise<void> {
  const { component, all, path: installPath = './components' } = options;
  const availableComponents = getAvailableComponents();
  
  let componentsToInstall: string[] = [];
  
  // Determine which components to install
  if (all) {
    componentsToInstall = availableComponents.map(c => c.name);
  } else if (component) {
    const componentExists = availableComponents.some(c => c.name === component);
    if (!componentExists) {
      console.error(chalk.red(`Component "${component}" not found.`));
      console.log(chalk.yellow('Available components:'));
      availableComponents.forEach(c => {
        console.log(`  - ${c.name} (${c.type})`);
      });
      process.exit(1);
    }
    componentsToInstall = [component];
  } else {
    // Prompt user to select components
    const { selectedComponents } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedComponents',
        message: 'Select components to install:',
        choices: availableComponents.map(c => ({
          name: `${c.name} (${c.type})`,
          value: c.name,
        })),
        validate: (answer) => {
          if (answer.length < 1) {
            return 'You must select at least one component.';
          }
          return true;
        },
      },
    ]);
    componentsToInstall = selectedComponents;
  }

  // Create installation directory if it doesn't exist
  const absoluteInstallPath = path.resolve(process.cwd(), installPath);
  await fs.ensureDir(absoluteInstallPath);

  // Install each selected component
  for (const componentName of componentsToInstall) {
    const spinner = ora(`Installing ${componentName}...`).start();
    
    try {
      // Get component details
      const component = availableComponents.find(c => c.name === componentName);
      if (!component) {
        spinner.fail(`Component "${componentName}" not found.`);
        continue;
      }

      // Copy component template
      const templatePath = path.join(__dirname, '../../templates', component.type, `${componentName}.tsx`);
      const destinationPath = path.join(absoluteInstallPath, `${componentName}.tsx`);
      
      // Check if template exists
      if (!await fs.pathExists(templatePath)) {
        spinner.fail(`Template for "${componentName}" not found.`);
        continue;
      }
      
      // Copy the component
      await fs.copy(templatePath, destinationPath);
      
      spinner.succeed(`Installed ${componentName} to ${destinationPath}`);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      spinner.fail(`Failed to install ${componentName}: ${errorMessage}`);
    }
  }

  console.log(chalk.green('\n✅ Installation complete!'));
  console.log(chalk.cyan(`\nImport components from '${installPath}':`));
  console.log(chalk.white(`import { ${componentsToInstall.join(', ')} } from '${installPath}';\n`));
}