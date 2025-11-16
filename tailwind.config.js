module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js", "./components/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2B5F75", // custom-primary
          50: "#F0F5F7", // custom-primary-50
          100: "#D9E7ED", // custom-primary-100
          200: "#B3CFDB", // custom-primary-200
          300: "#8DB7C9", // custom-primary-300
          400: "#679FB7", // custom-primary-400
          500: "#2B5F75", // custom-primary-500
          600: "#234C5E", // custom-primary-600
          700: "#1B3947", // custom-primary-700
          800: "#132630", // custom-primary-800
          900: "#0B1319", // custom-primary-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#7BA098", // custom-secondary
          50: "#F4F8F7", // custom-secondary-50
          100: "#E6F0EE", // custom-secondary-100
          200: "#CCE1DD", // custom-secondary-200
          300: "#B3D2CC", // custom-secondary-300
          400: "#99C3BB", // custom-secondary-400
          500: "#7BA098", // custom-secondary-500
          600: "#628079", // custom-secondary-600
          700: "#4A605A", // custom-secondary-700
          800: "#31403C", // custom-secondary-800
          900: "#19201D", // custom-secondary-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#E8A547", // custom-accent
          50: "#FDF8F1", // custom-accent-50
          100: "#FAF0E0", // custom-accent-100
          200: "#F5E1C1", // custom-accent-200
          300: "#F0D2A2", // custom-accent-300
          400: "#EBC383", // custom-accent-400
          500: "#E8A547", // custom-accent-500
          600: "#BA8439", // custom-accent-600
          700: "#8B632B", // custom-accent-700
          800: "#5C421C", // custom-accent-800
          900: "#2E210E", // custom-accent-900
        },
        // Background Colors
        background: "#FEFEFE", // custom-background
        surface: "#F8F9FA", // custom-surface
        // Text Colors
        text: {
          primary: "#1A2B33", // custom-text-primary
          secondary: "#5A6B73", // custom-text-secondary
        },
        // Status Colors
        success: {
          DEFAULT: "#4A9B8E", // custom-success
          50: "#F2F8F7", // custom-success-50
          100: "#E0F0ED", // custom-success-100
          200: "#C1E1DB", // custom-success-200
          300: "#A2D2C9", // custom-success-300
          400: "#83C3B7", // custom-success-400
          500: "#4A9B8E", // custom-success-500
          600: "#3B7C72", // custom-success-600
          700: "#2C5D55", // custom-success-700
          800: "#1E3E39", // custom-success-800
          900: "#0F1F1C", // custom-success-900
        },
        warning: {
          DEFAULT: "#D4851F", // custom-warning
          50: "#FBF6F0", // custom-warning-50
          100: "#F6EBDC", // custom-warning-100
          200: "#EDD7B9", // custom-warning-200
          300: "#E4C396", // custom-warning-300
          400: "#DBAF73", // custom-warning-400
          500: "#D4851F", // custom-warning-500
          600: "#AA6A19", // custom-warning-600
          700: "#7F5013", // custom-warning-700
          800: "#55350C", // custom-warning-800
          900: "#2A1B06", // custom-warning-900
        },
        error: {
          DEFAULT: "#C85A54", // custom-error
          50: "#FAF3F2", // custom-error-50
          100: "#F4E2E1", // custom-error-100
          200: "#E9C5C2", // custom-error-200
          300: "#DEA8A4", // custom-error-300
          400: "#D38B85", // custom-error-400
          500: "#C85A54", // custom-error-500
          600: "#A04843", // custom-error-600
          700: "#783632", // custom-error-700
          800: "#502422", // custom-error-800
          900: "#281211", // custom-error-900
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(43, 95, 117, 0.1)',
        'gentle': '0 4px 12px rgba(43, 95, 117, 0.15)',
        'emergency': '0 4px 16px rgba(232, 165, 71, 0.2)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'gentle-bounce': 'gentleBounce 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}