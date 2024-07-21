import type { AppProps } from "next/app";
import { ConnectWallet, MetaMaskWallet, ThirdwebProvider, coinbaseWallet, metamaskWallet, rainbowWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { polygon } from "thirdweb/chains";
require('dotenv').config();
import { ThirdWebAPI } from '../Components/config';

export const runtime = "edge";

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


