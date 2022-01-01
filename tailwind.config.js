module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			yellow: "#FFBE0B",
			blue: "#3A86FF",
			purple: "#8338EC",
			pink: "#FF006E",
			orange: "#FB5607",
			green: "#06d6a0",
			gray: "#6c757d",
			white: "#ffffff",
			"gray-dark": "#212529",
			"gray-light": "#adb5bd",
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
			serif: ["Roboto Slab", "serif"],
		},
		extend: {},
	},
	plugins: [require("daisyui")],
	// config (optional)
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
};
