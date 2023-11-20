const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  safelist: [
    {
      pattern: /ult-/
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Golos Text"', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '5xs': '8px',
        '4xs': '9px',
        '3xs': '10px',
        '2xs': '11px',
        'xs': '12px',
        'tiny': '13px',
        'sm': '14px',
        'md': '15px',
        'base': '16px'
      },
      colors: {
        inherit: 'inherit',
        primary: colors.blue,
        secondary: colors.neutral,
        negative: colors.red,
        notice: colors.amber,
        informative: colors.sky,
        positive: {
          '50': '#ecfdf4',
          '100': '#d1fae2',
          '200': '#a6f4c9',
          '300': '#6de8ad',
          '400': '#33d48b',
          '500': '#0eb46f',
          '600': '#04975d',
          '700': '#03794d',
          '800': '#05603e',
          '900': '#054f35',
          '950': '#022c1e',
        },
      },
      spacing: {
        inherit: 'inherit',
        slot: '3.125rem',
        'slot-xs': '1.875rem',
        'slot-sm': '2.5rem',
        'slot-lg': '3.75rem',
        'slot-xl': '4.375rem',
        'control-sm': '30px',
        'control': '38px',
        'control-default': '38px',
        'control-lg': '48px',
      },
      backgroundColor: {
        inherit: 'inherit'
      },
      borderRadius: {
        inherit: 'inherit'
      }
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    plugin(function({ addUtilities, addComponents, e, config, theme }) {
      const sizes = {
        default: '38px',
        lg: '48px',
        sm: '30px'
      };
      const controlVariants = {};
      Object.keys(sizes).forEach(name => {
        const value = sizes[name];

        if ('default' === name) {
          name = '';
        } else {
          name = '-' + name;
        }

        controlVariants['.control-h' + name] = {
          height: value
        };
        controlVariants['.control-w' + name] = {
          width: value
        };
      });

      addComponents(controlVariants);
    }),
  ],
}
