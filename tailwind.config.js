/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    spacing: {
      px: '1px',
      0: '0px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      48: '48px',
      52: '52px',
      56: '56px',
      60: '60px',
      64: '64px',
      72: '72px',
      80: '80px',
      96: '96px',
      120: '120px',
      160: '160px',
      200: '200px',
      240: '240px',
      280: '280px',
      320: '320px',
      360: '360px',
      400: '400px',
      480: '480px',
    },
    extend: {
      colors: {
        // Main brand colors with variations
        yellow: {
          50: '#FEF6E6',
          100: '#FEECC',
          200: '#FED980',
          300: '#FCC533',
          DEFAULT: '#FBBA00',
          500: '#E5AA00',
          600: '#CC9700',
          700: '#B38400',
          800: '#997100',
          900: '#805E00',
        },
        black: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          DEFAULT: '#000505',
          600: '#000404',
          700: '#000303',
          800: '#000202',
          900: '#000101',
        },
        gray: {
          50: '#F8FAFB',
          100: '#F1F4F6',
          200: '#E3E9ED',
          DEFAULT: '#D4DCE1',
          400: '#B9C5CD',
          500: '#9EADB8',
          600: '#8494A3',
          700: '#6A7B8E',
          800: '#506275',
          900: '#36495C',
        },
        orange: {
          50: '#FFF7F0',
          100: '#FFEAD9',
          200: '#FFD0B5',
          300: '#FFA66B',
          DEFAULT: '#FE7F03',
          500: '#E56902',
          600: '#CC5F02',
          700: '#B35301',
          800: '#994701',
          900: '#803C01',
        },
        green: {
          50: '#F3F5F0',
          100: '#E7EBE1',
          200: '#CFD6C3',
          300: '#B7C2A5',
          400: '#9FAD87',
          DEFAULT: '#7A8A5A',
          600: '#6E7C51',
          700: '#626F48',
          800: '#56613F',
          900: '#4A5436',
        },
        // Additional colors with variations
        brown: {
          50: '#F4F1EF',
          100: '#E9E3DE',
          200: '#D3C7BD',
          300: '#BDAB9C',
          400: '#A78F7B',
          DEFAULT: '#7D4C27',
          600: '#714423',
          700: '#653C1F',
          800: '#59341B',
          900: '#4D2C17',
        },
        sea: {
          50: '#F0F7FC',
          light: '#C9E8FB',
          200: '#93D1F7',
          300: '#5DBAF3',
          400: '#27A3EF',
          DEFAULT: '#6B7CBC',
          600: '#0F8AD7',
          700: '#0D79BC',
          800: '#0B68A1',
          900: '#095786',
        },
        purple: {
          50: '#F7F4F9',
          100: '#EFE9F3',
          200: '#DFD3E7',
          300: '#CFBDDB',
          400: '#C0A7CF',
          DEFAULT: '#B297C7',
          600: '#A181BB',
          700: '#916BAF',
          800: '#8155A3',
          900: '#713F97',
        },
        violet: {
          50: '#FCF0F7',
          100: '#F9E1EF',
          200: '#F3C3DF',
          300: '#EDA5CF',
          400: '#E787BF',
          DEFAULT: '#D15CA6',
          600: '#C73E96',
          700: '#B03586',
          800: '#992C76',
          900: '#822366',
        },
        mauve: {
          50: '#F7F4F5',
          100: '#EFE9EA',
          200: '#E0D3D6',
          300: '#D1BDC1',
          400: '#C6AFB5',
          DEFAULT: '#C6AFB5',
          500: '#B29A9F',
          600: '#9E858A',
          700: '#8A7075',
          800: '#765B60',
          900: '#62464B',
        },
        background: '#F8FAFB',
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F1F4F6',
        },
        primary: {
          DEFAULT: '#D15CA6',
          pressed: '#B03586',
        },
        accent: {
          blue: '#6B7CBC',
          bronze: '#7D4C27',
          green: '#7A8A5A',
          yellow: '#FBBA00',
        },
        text: {
          primary: '#000505',
          secondary: '#506275',
          tertiary: '#6A7B8E',
          inverse: '#FFFFFF',
        },
        // Using violet as primary color for opacity variants
        'primary-opacity': {
          5: 'rgba(209, 92, 166, 0.05)',
          10: 'rgba(209, 92, 166, 0.1)',
          20: 'rgba(209, 92, 166, 0.2)',
          30: 'rgba(209, 92, 166, 0.3)',
          40: 'rgba(209, 92, 166, 0.4)',
          50: 'rgba(209, 92, 166, 0.5)',
        },
      },
      fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
      },
      borderRadius: {
        none: 0,
        sm: 4,
        DEFAULT: 8,
        md: 12,
        lg: 16,
        xl: 24,
        '2xl': 32,
        full: 9999,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
}
