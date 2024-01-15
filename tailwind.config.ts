/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        mobile: { min: '320px', max: '426px' },
        tablet: { min: '768px', max: '1021px' },
        laptop: '1024px',
      },
      colors: {
        text: 'hsl(var(--text))',
        'text-light': 'hsl(var(--text-light))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        background: {
          DEFAULT: 'hsl(var(--background))',
          hover: 'hsl(var(--background-hover))',
          active: 'hsl(var(--background-active))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
          active: 'hsl(var(--primary-active))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--text))',
          hover: 'hsl(var(--secondary-hover))',
          active: 'hsl(var(--secondary-active))',
        },
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
          foreground: 'hsl(var(--text-light))',
          hover: 'hsl(var(--accent-hover))',
          active: 'hsl(var(--accent-active))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      spacing: {
        '0': '0',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
        '80': '80px',
      },
      lineHeight: {
        '0': '0',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
        '80': '80px',
      },
      fontSize: {
        // web-scale
        footnote: ['10.24px', '16px'],
        paragraph: ['12.8px', '16px'],
        body: ['16px', '24px'],
        subhead: ['20px', '24px'],
        headline: ['25px', '32px'],
        heading: ['31.25px', '40px'],
        title: ['39.06px', '48px'],
        banner: ['48.83px', '64px'],
        // mobile-scale
        'mobile-footnote': ['11.56px', '16px'],
        'mobile-paragraph': ['13px', '16px'],
        'mobile-body': ['14.63px', '16px'],
        'mobile-subhead': ['16.45px', '24px'],
        'mobile-headline': ['18.51px', '32px'],
        'mobile-heading': ['20.82px', '24px'],
        'mobile-title': ['23.43px', '24px'],
        'mobile-banner': ['26.35px', '32px'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        xs: 'var(--radius)',
        sm: 'calc(var(--radius) + 8px)',
        md: 'calc(var(--radius))',
        lg: 'calc(var(--radius) + 24px)',
        xl: 'calc(var(--radius) + 32px)',
        '2xl': 'calc(var(--radius) + 40px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
