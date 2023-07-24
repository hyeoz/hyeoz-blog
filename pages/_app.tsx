import Head from "next/head";
import NavBar from "../components/NavBar";
import "../styles/global.css";
import "../styles/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
