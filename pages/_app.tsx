import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import NavBar from "../components/NavBar";
import ContextProvider from "../components/ContextProvider";
 
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<div>
				<NavBar />
				<Component {...pageProps} />
			</div>
		</ContextProvider>
	);
}
export default MyApp;
