module.exports = {
	mode: "jit",
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#38bdf8",
				dark: "#9ca3af",
				orange: "#FAAE2B",
				"dark-blue": "#38bdf8",
				grey: "#F2F7F5",
				green: "#06f3b0",
				rose: "#e9337b",
			},
			fontFamily: {
				poppins: ["Poppins"],
				inter: ["Inter"],
			},
		},
	},
	plugins: [],
};
