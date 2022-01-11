module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*/{ts,tsx}"],
	theme: {
		extend: {
			height: {
				0: "0",
				128: "32rem",
				150: "40rem",
				256: "64rem",
			},
			width: {
				0: "0",
			},
		},
		borderRadius: {
			triangle: "100px solid red",
		},
	},
	plugins: [],
};
