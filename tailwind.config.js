/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      },
      colors: {
        primary: 'var(--blue)',
        basetitle: 'var(--base-title)',
        basesubtitle: 'var(--base-subtitle)',
        basetext: 'var(--base-text)',
        basespan: 'var(--base-span)',
        baselabel: 'var(--base-label)',
        baseborder: 'var(--base-border)',
        basepost: 'var(--base-post)',
        baseprofile: 'var(--base-profile)',
        basebackground: 'var(--base-background)',
        baseinput: 'var(--base-input)'
      }
    },
  },
  plugins: [],
}

