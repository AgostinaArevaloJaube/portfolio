const theme = {
	colors: {
		desktopGradient:
			"linear-gradient(90deg, rgba(239,129,170,1) 0%, rgba(239,168,131,1) 100%)",
		mobileGradient:
			"linear-gradient(0deg, rgba(239,129,170,1) 0%, rgba(239,168,131,1) 100%)",
		darkBoxShadow: "22px 22px 100px 7px rgb(217 173 169 / 40%)"
	},

	fonts: {
		primaryColor: "#656565",
		secondaryColor: "#D98162",
		fontFamily: "Poppins, sans-serif",
		titleMobile: "1.3em",
		subtitleMobile: "0.9em",
		textMobile: "0.8em",
		titleTablet: "1.4em",
		subtitleTablet: "1.1em",
		textTablet: "0.9em",
		titleDesktop: "1.5em",
		subtitleDesktop: "1.2em",
		textDesktop: "1em"
	},

	mediaQueries: {
		above480: "(min-width: 480px)",
		above600: "(min-width: 600px)",
		above768: "(min-width: 768px)",
		above900: "(min-width: 900px)",
		above1024: "(min-width: 1024px)",
		above1200: "(min-width: 1200px)"
	}
};

export default theme;
