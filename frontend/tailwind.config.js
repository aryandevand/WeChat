/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		screens: {
		  'xs': '480px', // Extra small screens
		},
		colors: {
		  primary: '#1E40AF', // Custom primary color
		  secondary: '#9333EA', // Custom secondary color
		},
	  },
	},
	plugins: [require("daisyui")],
	daisyui: {
	  themes: ["light", "dark"], // Enable light and dark mode
	},
  };
  