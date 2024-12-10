import { toRGB } from './src/utils/helper';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        theme: {
          1: 'rgb(var(--color-theme-1) / <alpha-value>)',
          2: 'rgb(var(--color-theme-2) / <alpha-value>)',
        },
        success: 'rgb(var(--color-success) / <alpha-value>)',
        info: 'rgb(var(--color-info) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        pending: 'rgb(var(--color-pending) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        darkmode: {
          50: 'rgb(var(--color-darkmode-50) / <alpha-value>)',
          100: 'rgb(var(--color-darkmode-100) / <alpha-value>)',
          200: 'rgb(var(--color-darkmode-200) / <alpha-value>)',
          300: 'rgb(var(--color-darkmode-300) / <alpha-value>)',
          400: 'rgb(var(--color-darkmode-400) / <alpha-value>)',
          500: 'rgb(var(--color-darkmode-500) / <alpha-value>)',
          600: 'rgb(var(--color-darkmode-600) / <alpha-value>)',
          700: 'rgb(var(--color-darkmode-700) / <alpha-value>)',
          800: 'rgb(var(--color-darkmode-800) / <alpha-value>)',
          900: 'rgb(var(--color-darkmode-900) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
      },
    },
    fontFamily: {
      roboto: ['Roboto'],
      sans: ['ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
    require('tailwindcss'),
    plugin(function ({ addBase }) {
      addBase({
        // Default colors
        ':root': {
          '--color-theme-1': toRGB(colors.blue['800']),
          '--color-theme-2': toRGB(colors.blue['900']),
          '--color-primary': toRGB(colors.emerald['900']),
          '--color-secondary': toRGB(colors.slate['200']),
          '--color-success': toRGB(colors.lime['500']),
          '--color-info': toRGB(colors.cyan['500']),
          '--color-warning': toRGB(colors.yellow['400']),
          '--color-pending': toRGB(colors.orange['500']),
          '--color-danger': toRGB(colors.red['600']),
          '--color-light': toRGB(colors.slate['100']),
          '--color-dark': toRGB(colors.slate['800']),
        },
        // Default dark-mode colors
        '.dark': {
          '--color-primary': toRGB(colors.blue['700']),
          '--color-darkmode-50': '87 103 132',
          '--color-darkmode-100': '74 90 121',
          '--color-darkmode-200': '65 81 114',
          '--color-darkmode-300': '53 69 103',
          '--color-darkmode-400': '48 61 93',
          '--color-darkmode-500': '41 53 82',
          '--color-darkmode-600': '40 51 78',
          '--color-darkmode-700': '35 45 69',
          '--color-darkmode-800': '27 37 59',
          '--color-darkmode-900': '15 23 42',
        },
        // Theme 1 colors
        '.theme-1': {
          '--color-theme-1': toRGB(colors.red['200']),
          '--color-theme-2': toRGB(colors.emerald['900']),
          '--color-primary': toRGB(colors.emerald['900']),
          '--color-secondary': toRGB(colors.slate['200']),
          '--color-success': toRGB(colors.emerald['600']),
          '--color-info': toRGB(colors.cyan['500']),
          '--color-warning': toRGB(colors.yellow['400']),
          '--color-pending': toRGB(colors.amber['500']),
          '--color-danger': toRGB(colors.rose['600']),
          '--color-light': toRGB(colors.slate['100']),
          '--color-dark': toRGB(colors.slate['800']),
          '&.dark': {
            '--color-primary': toRGB(colors.emerald['800']),
          },
        },
        // Theme 2 colors
        '.theme-2': {
          '--color-theme-1': toRGB(colors.blue['900']),
          '--color-theme-2': toRGB(colors.blue['950']),
          '--color-primary': toRGB(colors.blue['950']),
          '--color-secondary': toRGB(colors.slate['200']),
          '--color-success': toRGB(colors.teal['600']),
          '--color-info': toRGB(colors.cyan['500']),
          '--color-warning': toRGB(colors.amber['500']),
          '--color-pending': toRGB(colors.orange['500']),
          '--color-danger': toRGB(colors.red['700']),
          '--color-light': toRGB(colors.slate['100']),
          '--color-dark': toRGB(colors.slate['800']),
          '&.dark': {
            '--color-primary': toRGB(colors.blue['800']),
          },
        },
        // Theme 3 colors
        '.theme-3': {
          '--color-theme-1': toRGB(colors.cyan['800']),
          '--color-theme-2': toRGB(colors.cyan['900']),
          '--color-primary': toRGB(colors.cyan['900']),
          '--color-secondary': toRGB(colors.slate['200']),
          '--color-success': toRGB(colors.teal['600']),
          '--color-info': toRGB(colors.cyan['500']),
          '--color-warning': toRGB(colors.amber['500']),
          '--color-pending': toRGB(colors.amber['600']),
          '--color-danger': toRGB(colors.red['700']),
          '--color-light': toRGB(colors.slate['100']),
          '--color-dark': toRGB(colors.slate['800']),
          '&.dark': {
            '--color-primary': toRGB(colors.cyan['800']),
          },
        },
        // Theme 4 colors
        '.theme-4': {
          '--color-theme-1': toRGB(colors.indigo['800']),
          '--color-theme-2': toRGB(colors.indigo['900']),
          '--color-primary': toRGB(colors.indigo['900']),
          '--color-secondary': toRGB(colors.slate['200']),
          '--color-success': toRGB(colors.emerald['600']),
          '--color-info': toRGB(colors.cyan['500']),
          '--color-warning': toRGB(colors.yellow['500']),
          '--color-pending': toRGB(colors.orange['600']),
          '--color-danger': toRGB(colors.red['700']),
          '--color-light': toRGB(colors.slate['100']),
          '--color-dark': toRGB(colors.slate['800']),
          '&.dark': {
            '--color-primary': toRGB(colors.indigo['700']),
          },
        },
      });
    }),
  ],
};

export default config;
