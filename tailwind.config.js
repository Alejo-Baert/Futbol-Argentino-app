/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['var(--font-mulish)'],
        barlow: ['var(--font-barlow)']
      },
      boxShadow: {
        'box-dashboard': '0 3px 10px rgb(0,0,0,0.2)'
      },
    },
  },
  plugins: [],
}
