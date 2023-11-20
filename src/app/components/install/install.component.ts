import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';

@Component({
  selector: 'app-install',
  standalone: true,
  imports: [
    CommonModule,
    InlineCodeDirective,
    CodeBlockComponent
  ],
  templateUrl: './install.component.html'
})
export class InstallComponent {
  installNpm = `npm i @ultima-ui/components`;
  installIcons = `npm i @iconify-json/ph`;

  tailwindContent = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './projects/**/*.{html,ts}'
  ],
  presets: [
    require('@ultima-ui/components/preset')
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
  ],
}`;

  postcssContent = `module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}`;

  installFont = `npm i @fontsource/golos-text`;

  tailwindStyles = `@import '@fontsource/golos-text/400.css';
@import '@fontsource/golos-text/500.css';
@import '@fontsource/golos-text/700.css';
@import "@ultima-ui/components/styles/index.css";

@tailwind base;
@tailwind components;
@tailwind utilities;`;

  runApp = `npm start`;
}
