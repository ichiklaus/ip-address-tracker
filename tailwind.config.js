module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'ipad-mini': { raw: '(min-height: 1024px) and (max-height: 1079px) ' },
        ipad: { raw: '(min-height: 1080px)' },
      },
      colors: {
        vdgray: 'hsl(0, 0%, 17%)', // very dark gray
        'vdgray-active': 'hsla(0, 0%, 25%, 1)',
        dgray: 'hsl(0, 0%, 59%)', // dark gray (it's much lighter than it seems)
      },
      backgroundImage: {
        pattern: "url('../src/images/pattern-bg.png')",
      },
      fontFamily: {
        rubik: ['Rubik, sans-serif'],
      },
      boxShadow: '',
      borderRadius: {
        xl: '1.25rem',
      },
      height: {
        110: '28rem',
        122: '32rem',
        128: '38rem',
        130: '49rem',
        134: '54rem',
        fill: '100vw',
      },
      fontSize: {
        xxs: ['.65rem', {
          letterSpacing: '.75rem',
        }],
      },
    },
  },
  variants: {},
  plugins: [],
};
