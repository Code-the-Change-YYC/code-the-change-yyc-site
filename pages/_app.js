import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-omnes">
      <Component {...pageProps} />
	  <Footer/>
    </div>
  );
}

export default MyApp;
