module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				green: {
					100: "var(--green-100)",
					200: "var(--green-200)",
					300: "var(--green-300)",
					400: "var(--green-400)",
					500: "var(--green-500)",
					600: "var(--green-600)",
					700: "var(--green-700)",
					DEFAULT: "var(--green-400)",
				},
				blue: {
					100: "var(--blue-100)",
					200: "var(--blue-200)",
					300: "var(--blue-300)",
					400: "var(--blue-400)",
					500: "var(--blue-500)",
					600: "var(--blue-600)",
					700: "var(--blue-700)",
					DEFAULT: "var(--blue-400)",
				},
				gray: {
					50: "var(--gray-50)",
					100: "var(--gray-100)",
					200: "var(--gray-200)",
					300: "var(--gray-300)",
					400: "var(--gray-400)",
					500: "var(--gray-500)",
					600: "var(--gray-600)",
					700: "var(--gray-700)",
					DEFAULT: "var(--gray-400)",
				},
				gradient: {
					green:
						"radial-gradient(112.5% 241.62% at 40.39% -12.5%, #69FD44 0%, #02F09A 100%)",
				},
			},
		},
		boxShadow: {
			sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
			DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
			md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
			lg: "0 16px 27px -2px hsla(209, 28%, 59%, 0.28)",
			xl:
				"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
			"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
			none: "none",
		},
		fontFamily: {
			primary: [
				"YoungSerif",
				"Helvetica",
				"-apple-system",
				"BlinkMacSystemFont",
				"Arial",
				"sans-serif",
			],
			secondary: [
				"sk-modernist",
				"Helvetica",
				"-apple-system",
				"BlinkMacSystemFont",
				"Arial",
				"sans-serif",
			],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
