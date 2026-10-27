/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          deep: 'var(--color-primary-deep)',
          tint: 'var(--color-primary-tint)',
          sky: 'var(--color-primary-sky)',
        },
        bg: {
          page: 'var(--color-bg-page)',
          surface: 'var(--color-bg-surface)',
          elevated: 'var(--color-bg-elevated)',
        },
        ink: {
          DEFAULT: 'var(--color-text-main)',
          muted: 'var(--color-text-muted)',
          subtle: 'var(--color-text-subtle)',
          inverse: 'var(--color-text-inverse)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
        },
        status: {
          error: 'var(--color-error)',
          'error-bg': 'var(--color-error-bg)',
          success: 'var(--color-success)',
          'success-bg': 'var(--color-success-bg)',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'elevated': 'var(--shadow-elevated)',
        'focus-ring': '0 0 0 3px rgba(29, 78, 216, 0.45)',
      },
      maxWidth: {
        'prose-custom': '72ch',
      }
    },
  },
  plugins: [],
}
