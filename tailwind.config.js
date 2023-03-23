module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
  
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#d9d9d9',
        accent: '#232323',
      },
      backgroundImage: {
        site: "url('./assets/logo3.png')",
        about: "url('./assets/about.png')",
        tech: "url('./assets/logo3.png')",
      },
    },
  },
  plugins: [],
};
