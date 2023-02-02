/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'var(--font-major-mono-display)',
          'var(--font-nova-mono-display)',
          'var(--font-vt323)',
          'var(--font-fira-mono)',
          'var(--font-zekton)',
          'var(--font-hack-bold)',
          'var(--font-hack-regular)',
          'var(--font-vcr-osd-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      backgroundImage: {
        profile: "url('/assets/images/profile.png')",
        profile2: "url('/assets/images/profile2.png')",
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1280px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
