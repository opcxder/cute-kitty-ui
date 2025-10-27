import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { execSync } from 'child_process';

interface CreateOptions {
  template: 'react' | 'next';
}

export async function createProject(name: string, options: CreateOptions): Promise<void> {
  const { template = 'react' } = options;
  const projectPath = path.resolve(process.cwd(), name);
  
  // Check if directory already exists
  if (await fs.pathExists(projectPath)) {
    console.error(chalk.red(`Directory "${name}" already exists.`));
    process.exit(1);
  }
  
  console.log(chalk.cyan(`\n🐱 Creating a new Kitty-UI project: ${name} 🐱\n`));
  
  // Create project based on template
  const spinner = ora('Setting up project...').start();
  
  try {
    // Create project directory
    await fs.ensureDir(projectPath);
    
    // Initialize based on template
    if (template === 'react') {
      // Create React app with Vite
      spinner.text = 'Creating React app with Vite...';
      execSync(`npm create vite@latest ${name} -- --template react-ts`, { stdio: 'ignore' });
      
      // Install dependencies
      spinner.text = 'Installing dependencies...';
      process.chdir(projectPath);
      execSync('npm install cute-kitty-ui-core cute-kitty-ui-registry', { stdio: 'ignore' });
      
      // Create components directory
      await fs.ensureDir(path.join(projectPath, 'src/components'));
      
      // Create example component
      const exampleComponentPath = path.join(projectPath, 'src/components/KittyExample.tsx');
      await fs.writeFile(exampleComponentPath, `
import React from 'react';
import { SittingCat, HoldingSignCat } from 'cute-kitty-ui-registry';

export const KittyExample: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
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
};
`);
      
      // Update App.tsx to use the example component
      const appPath = path.join(projectPath, 'src/App.tsx');
      const appContent = await fs.readFile(appPath, 'utf-8');
      const updatedAppContent = appContent
        .replace(
          `import './App.css'`,
          `import './App.css'\nimport { KittyExample } from './components/KittyExample'`
        )
        .replace(
          /<div className="card">[\s\S]*?<\/div>/m,
          `<div className="card">\n        <KittyExample />\n      </div>`
        );
      
      await fs.writeFile(appPath, updatedAppContent);
      
    } else if (template === 'next') {
      // Create Next.js app
      spinner.text = 'Creating Next.js app...';
      execSync(`npx create-next-app@latest ${name} --typescript --eslint --tailwind --app --src-dir`, { stdio: 'ignore' });
      
      // Install dependencies
      spinner.text = 'Installing dependencies...';
      process.chdir(projectPath);
      execSync('npm install cute-kitty-ui-core cute-kitty-ui-registry', { stdio: 'ignore' });
      
      // Create components directory
      await fs.ensureDir(path.join(projectPath, 'src/components'));
      
      // Create example component
      const exampleComponentPath = path.join(projectPath, 'src/components/KittyExample.tsx');
      await fs.writeFile(exampleComponentPath, `
'use client';

import React from 'react';
import { SittingCat, HoldingSignCat } from 'cute-kitty-ui-registry';

export const KittyExample: React.FC = () => {
  return (
    <div className="flex gap-8 p-8">
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
};
`);
      
      // Update page.tsx to use the example component
      const pagePath = path.join(projectPath, 'src/app/page.tsx');
      const pageContent = await fs.readFile(pagePath, 'utf-8');
      const updatedPageContent = pageContent
        .replace(
          `export default function Home() {`,
          `import { KittyExample } from '../components/KittyExample';\n\nexport default function Home() {`
        )
        .replace(
          /<main className="flex.*?>([\s\S]*?)<\/main>/m,
          `<main className="flex min-h-screen flex-col items-center justify-center p-24">\n        <h1 className="text-4xl font-bold mb-8">Welcome to Kitty-UI</h1>\n        <KittyExample />\n      </main>`
        );
      
      await fs.writeFile(pagePath, updatedPageContent);
    }
    
    spinner.succeed(`Project "${name}" created successfully!`);
    
    // Display next steps
    console.log(chalk.green('\n✅ Project setup complete!\n'));
    console.log(chalk.cyan('Next steps:'));
    console.log(chalk.white(`  cd ${name}`));
    console.log(chalk.white('  npm run dev\n'));
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    spinner.fail(`Failed to create project: ${errorMessage}`);
    // Clean up on failure
    await fs.remove(projectPath);
    process.exit(1);
  }
}