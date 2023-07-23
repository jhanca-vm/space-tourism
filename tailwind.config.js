/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,svelte}'],
  safelist: [{ pattern: /content-(1|2|3)/, variants: ['before', 'lg:before'] }],
  theme: {
    extend: {
      backgroundImage: Object.fromEntries(
        ['home', 'destination', 'crew', 'technology'].flatMap(page =>
          ['mobile', 'tablet', 'desktop'].map(variant => [
            `${page}-${variant}`,
            `url('/images/${page}/background-${variant}.jpg')`
          ])
        )
      ),
      boxShadow: {
        '3xl': '0 0 0 2.75em rgba(255, 255, 255, 0.1)'
      },
      colors: {
        primary: '#0b0d17',
        secundary: '#d0d6f9'
      },
      content: {
        1: "'01'",
        2: "'02'",
        3: "'03'"
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Bellefair', 'serif'],
        condensed: ['Barlow Condensed', 'sans-serif']
      }
    }
  }
}
