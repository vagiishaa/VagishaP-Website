import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F8F5F0',
        ink: '#1A1714',
        muted: '#8C8680',
        terracotta: '#C47448',
        warm: '#E8E3DB',
        card: '#F0EBE3',
        body: '#3D3A36',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
