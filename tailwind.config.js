module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'full': '100% 100%',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'navbar': '#3b566f'
    }),
    textShadow: {
      'default': '0 2px 0 #000',
      'md': '0 2px 2px #000',
      'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
      'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      'link': '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 2px 2px #000, -2px 2px 0 #000, 2px -1px 0 #000, -2px 2px 8px #000',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'body': ['"Noyh Geometric Slim Black"'],
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '270': '270deg',
      'project-rotate': '12deg'
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      margin: {
        '10p': '10%',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/cartoon4.jpg')",
        'frame-image': "url('/assets/images/image-frame.jpg')",
        'button-image': "url('/assets/images/button_alt.png')",
        'project-image': "url('/assets/images/project_wallpaper.jpg')",
        'story-image': "url('/assets/images/story_wallpaper.jpg')",
        'event-image': "url('/assets/images/event_wallpaper.jpg')",
        'roadmap-image': "url('/assets/images/roadmap_wallpaper.jpg')",
        'roadmap-step-image': "url('/assets/images/spirit.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      boxShadow: {
        image: '20px 20px 12px 0 rgba(20, 20, 20, 0.9)',
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

