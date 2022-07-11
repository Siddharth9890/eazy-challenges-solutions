import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Solutions for Eazy Hacks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white dark:bg-black text-black dark:text-white ">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
