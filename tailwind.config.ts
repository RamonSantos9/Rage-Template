import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ...
sidebar: {
	DEFAULT: 'hsl(var(--sidebar-background))',
	foreground: 'hsl(var(--sidebar-foreground))',
	primary: 'hsl(var(--sidebar-primary))',
	'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
	accent: 'hsl(var(--sidebar-accent))',
	'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
	border: 'hsl(var(--sidebar-border))',
	ring: 'hsl(var(--sidebar-ring))',
  },
  // ...
  
  theme: {
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '20px',
  			lg: '80px'
  		},
  		screens: {
  			sm: '375px',
  			md: '768px',
  			lg: '1200px'
  		}
  	},
  	screens: {
  		sm: '375px',
  		md: '768px',
  		lg: '1200px'
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			}
  		},
  		animation: {
  			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
  			'shiny-text': 'shiny-text 8s infinite',
  			shine: 'shine var(--duration) infinite linear'
  		},
  		keyframes: {
  			ripple: {
  				'0%, 100%': {
  					transform: 'translate(-50%, -50%) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-50%, -50%) scale(0.9)'
  				}
  			},
  			'shiny-text': {
  				'0%, 90%, 100%': {
  					'background-position': 'calc(-100% - var(--shiny-width)) 0'
  				},
  				'30%, 60%': {
  					'background-position': 'calc(100% + var(--shiny-width)) 0'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
