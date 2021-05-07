import "../styles/globals.css"
import "../styles/fonts.css"
import GlobalStyles from "components/GlobalStyles"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
