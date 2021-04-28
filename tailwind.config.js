
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class',
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          xl: '0rem'
        }
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        accent: "var(--color-bg-accent)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      colors: {
        primary: {
          50: 'rgb(255, 38, 98)',
          100: 'rgb(255, 38, 98)',
          200: 'rgb(255, 38, 98)',
          300: 'rgb(255, 38, 98)',
          400: 'rgb(255, 38, 98)',
          500: 'rgb(255, 38, 98)',
          600: 'rgb(255, 38, 98)',
          700: 'rgb(255, 38, 98)',
          800: 'rgb(255, 38, 98)',
          900: 'rgb(255, 38, 98)'
        },
        secondary: {
          50:  'rgb(255, 98, 158)',
          100: 'rgb(255, 98, 158)',
          200: 'rgb(255, 98, 158)',
          300: 'rgb(255, 98, 158)',
          400: 'rgb(255, 98, 158)',
          500: 'rgb(255, 98, 158)',
          600: 'rgb(255, 98, 158)',
          700: 'rgb(255, 98, 158)',
          800: 'rgb(255, 98, 158)',
          900: 'rgb(255, 98, 158)'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
