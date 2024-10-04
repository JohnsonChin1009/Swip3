import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			'in': 'slideIn 1s ease-in forwards',
			'out': 'slideOut 1s ease-out forwards',
		},
		backgroundImage: {
			'our-team-header-gradient-1': 'linear-gradient(to right, #FF4D4D, #FAD790, #F4DF62)',
			'our-team-header-gradient-2': 'linear-gradient(to right, #AED761, #80C9FF, #DCAFFF, #EDD1DB)',
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
  		colors: {
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
		keyframes: {
			slideIn: {
				'0%': {
					opacity: '1',
					transform: 'translateX(0)'
				},
				'100%': {
					opacity: '0',
					transform: 'translateX(-100%)'
				},
			},
			slideOut: {
				'0%': {
					opacity: '0',
					transform: 'translateX(-100%)'
				},
				'100%': {
					opacity: '1',
					transform: 'translateX(0)'
				},
			},
		},
	},
    fontFamily: {
	    sans: [
			'"Poppins", sans-serif'
		]
	},
    variants: {
	    extends: {
			animation: ['responsive', 'motion-safe', 'motion-reduce'],
		}
	}
  },
	plugins: [tailwindcssAnimate],
};
export default config;
