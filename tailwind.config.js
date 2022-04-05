module.exports = {
	mode: "jit",
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#38bdf8",
				dark: "#9ca3af",
			},
			fontFamily: {
				poppins: ["Poppins"],
				inter: ["Inter"],
			},
		},
	},
	plugins: [],
};
