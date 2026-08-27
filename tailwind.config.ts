import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f77b4',
        secondary: '#2ca02c',
        accent: '#ff7f0e',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#1f77b4',
              '&:hover': {
                color: '#ff7f0e',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
