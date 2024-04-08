import type { AppProps } from "next/app";
import { ConnectWallet, MetaMaskWallet, ThirdwebProvider, coinbaseWallet, metamaskWallet, rainbowWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { polygon } from "thirdweb/chains";
require('dotenv').config();
import { ThirdWebAPI } from '../Components/config';

//const myChain = polygon;

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: 
AppProps) {

  return (
    <ThirdwebProvider
    activeChain={activeChain}
    clientId={ThirdWebAPI}

    authConfig={{
        domain: process.env.DOMAIN ||"",
        authUrl: "/api/auth"
     }}

     supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}



export default MyApp;


