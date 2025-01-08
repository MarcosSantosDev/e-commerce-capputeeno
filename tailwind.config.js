const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: {
					500: '#115D8C',
				},
				green: {
					500: '#51B853',
				},
				orange: {
					100: '#FFA585'
				},
				red: {
					500: '#DE3838'
				},
				white: {
					100: '#ffffff',
					200: '#f0f0f5',
					300: '#f3f5f6',
					400: '#f5f5fa',
					500: '#e9e9f0',
				},
				gray: {
					100: '#617480',
					300: '#A8A8B3',
					400: '#737380',
					500: '#5D5D6D',
					600: '#41414D',
					900: '#09090A'
				},
			},
			fontFamily: {
				sans: ['Saira', ...defaultTheme.fontFamily.sans],
				sairaStencilOne: ['Saira Stencil One', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				xs: '1rem',
				sm: '1.2rem',
				md: '1.4rem',
				lg: '1.8rem',
				xl: '2.4rem',
				xxl: '3.2rem',
				h1: '4.8rem',
				h2: '4rem',
				h3: '3.2rem',
				h4: '2.4rem',
				h5: '2rem',
				h6: '1.6rem',
			},
			spacing: {
				// For details such as small spacings between icons or text.
				0: '0rem',
				1: '0.1rem',
				2: '0.2rem',
				4: '0.4rem',
				8: '0.8rem',
				10: '1rem',
				12: '1.2rem',
				14: '1.4rem',
				16: '1.6rem',
				// They are perfect for standard spacing on elements such as buttons, cards, etc.
				20: '2rem',
				24: '2.4rem',
				32: '3.2rem',
				36: '3.6rem',
				40: '4rem',
				44: '4.4rem',
				// For larger layouts, spacing between sections and grids.
				64: '6.4rem',
				80: '8rem',
				100: '10rem',
				120: '12rem',
				160: '16rem',
				200: '20rem',
				280: '28rem',
			},
			width: {
				'container': '80%'
			},
			borderRadius: {
				sm: '4px',
				md: '8px',
				lg: '12px',
				rounded: '50%',
			},
			boxShadow: {
				sm: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
				md: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
				lg: '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
				xl: '0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22)',
			},
			zIndex: {
				dropdown: 1000,
				modal: 1050,
				overlay: 1060,
				tooltip: 1070,
			},
			transitionProperty: {
				default: 'all',
				fast: 'all',
			},
			transitionTimingFunction: {
				default: 'ease',
				fast: 'ease',
			},
			transitionDuration: {
				default: '300ms',
				fast: '150ms',
			},
			screens: {
				sm: '480px',
				md: '768px',
				lg: '992px',
				xl: '1400px',
			},
		},
	},
	variants: {},
	plugins: [require('tailwindcss-animate')],
};
