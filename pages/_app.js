import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-omnes">
      <Component {...pageProps} />
			<body>BODY</body>
      <Footer className="mt-auto" />
    </div>
  );
}

export default MyApp;
