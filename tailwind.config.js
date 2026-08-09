module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      secondary: ['"DM Sans"', 'system-ui', 'sans-serif'],
      script: ['PhotographSignature', 'cursive'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#3D2B22',
        cocoa: {
          DEFAULT: '#5C4033',
          dark: '#3D2B22',
          light: '#8B6F5C',
        },
        grey: '#6B5E54',
        blush: {
          DEFAULT: '#E4B7B2',
          soft: '#F3D9D5',
          deep: '#C98B84',
        },
        cream: {
          DEFAULT: '#F7F1EA',
          dark: '#EDE4D8',
          soft: '#FBF8F4',
        },
        sage: {
          DEFAULT: '#8FA68A',
          deep: '#6F8B6A',
          soft: '#D5E0D2',
        },
        cherry: {
          DEFAULT: '#C45C5C',
          deep: '#A34545',
        },
        // legacy aliases so leftover classes still resolve
        pink: '#E4B7B2',
        green: '#6F8B6A',
        accent: '#F3D9D5',
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(61, 43, 34, 0.28)',
        polaroid: '0 12px 30px -12px rgba(61, 43, 34, 0.22)',
        card: '0 8px 28px -10px rgba(61, 43, 34, 0.16)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      letterSpacing: {
        brand: '0.22em',
      },
      maxHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
      },
      backgroundImage: {
        'cream-radial':
          'radial-gradient(circle at top right, rgba(243, 217, 213, 0.55), transparent 42%), radial-gradient(circle at bottom left, rgba(213, 224, 210, 0.45), transparent 40%)',
      },
    },
  },
  plugins: [],
};
