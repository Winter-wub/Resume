import "../styles/globals.scss";
import "animate.css/animate.min.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Component {...pageProps} />
	);
}

export default MyApp;
