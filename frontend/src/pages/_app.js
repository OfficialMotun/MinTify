import "@/styles/globals.css";
import "@coinbase/onchainkit/styles.css";
import NavBar from "./Components/navbar";
import Footer from "./Components/footer";
import { base } from "viem/chains";
import { OnchainKitProvider } from "@coinbase/onchainkit";

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={playfair.className}>
      <NavBar />
      <OnchainKitProvider apiKey="YOUR_API_KEY" chain={base}>
        <Component {...pageProps} />
      </OnchainKitProvider>
      <Footer />
    </div>
  );
}
