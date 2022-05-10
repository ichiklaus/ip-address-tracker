module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        vdgray: 'hsl(0, 0%, 17%)', // very dark gray
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
      },
    },
  },
  variants: {},
  plugins: [],
};
