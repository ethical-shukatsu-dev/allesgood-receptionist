/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			// Add our color palette
  			white0: '#ffffff00',
  			white30: '#ffffff33',
  			white40: '#ffffff66',
  			white50: '#ffffff80',
  			white60: '#ffffff99',
  			white: '#ffffff',
  			neutral2: '#FAFAFA',
  			black10: '#1D1D2A59',
  			black25: '#F9F9FCE6',
  			black50: '#F9F9FC',
  			black100: '#F3F3F6',
  			black200: '#ECECF1',
  			black400: '#CECED5',
  			black500: '#B2B2B8',
  			black700: '#515156',
  			black900: '#1D1D2A',
  			green50: '#4dd1c6',
  			green100: '#039C8121',
  			green200: '#039C8133',
  			green400: '#09A88B',
  			purple50: '#544CD60F',
  			purple100: '#E1DBFF',
  			purple400: '#544CD6', // primary
  			purple700: '#4A48BC',
  			orange25: '#FEF8F4',
  			orange50: '#FD942529',
  			orange100: '#FFEFDE',
  			orange400: '#FD9425',
  			red50: '#E8325729',
  			red100: '#FEE3E8',
  			red400: '#E83257',
  			// Original colors
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} 