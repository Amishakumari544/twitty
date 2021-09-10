// custom css
import "../styles/App.css";

// tailwindcss jit
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
