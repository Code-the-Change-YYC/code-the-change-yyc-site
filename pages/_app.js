import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-omnes h-screen">
      <Head>
        <link rel="shortcut icon" href="logo.png" />
        <title>Code the Change YYC</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
