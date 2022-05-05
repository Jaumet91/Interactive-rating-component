module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        VD_Blue: 'hsl(216, 12%, 8%)',
        Light_Grey: 'hsl(217, 12%, 63%)',
        Medium_Grey: 'hsl(216, 12%, 54%)',
        DB: 'hsl(213, 19%, 18%)',
        Orange: 'hsl(25, 97%, 53%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderRadius: {
        cr: '15px',
        crsm: '30px',
        crrating: '22.5px',
      },
    },
  },
  plugins: [],
};
