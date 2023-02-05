import '@/styles/globals.css'
import Navbar from 'Component/Navbar'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </>
}
