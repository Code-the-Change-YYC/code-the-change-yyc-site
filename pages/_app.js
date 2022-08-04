import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-omnes">
      <Head>
        <link rel="shortcut icon" href="logo.png" />
        <title>Code the Change YYC</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
