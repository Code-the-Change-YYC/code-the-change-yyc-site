import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Executives from "../components/Executives";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-omnes bg-[#7055FD] h-screen">
      <Head>
        <link rel="shortcut icon" href="logo.png" />
        <title>Code the Change YYC</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {/* CONTAINER FOR CONTENT BELOW TO TEST NAVBAR IS IN RIGHT POSITION*/}
      <div className="mb-auto bg-green-500">
        <h1>content</h1>
      </div>
      <Executives />
      <Footer />
    </div>
  );
}

export default MyApp;
