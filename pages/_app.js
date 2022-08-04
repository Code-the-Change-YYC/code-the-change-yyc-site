import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-omnes bg-[#7055FD] h-screen">
      <Head>
        <link rel="shortcut icon" href="logo.png" />
        <title>Code the Change YYC</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
