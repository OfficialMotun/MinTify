import "@/styles/globals.css";
import "@coinbase/onchainkit/styles.css";
import NavBar from "./Components/navbar";
import Footer from "./Components/footer";
import { base } from "viem/chains";
import { OnchainKitProvider } from "@coinbase/onchainkit";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <OnchainKitProvider apiKey="YOUR_API_KEY" chain={base}>
        <Component {...pageProps} />
      </OnchainKitProvider>
      <Footer />
    </div>
  );
}
