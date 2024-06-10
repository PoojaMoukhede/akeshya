import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../globals.css';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
