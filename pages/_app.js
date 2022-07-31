import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-omnes">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
