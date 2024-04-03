import { ConnectWallet, ThirdwebSDK } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import {ThirdwebProvider} from "@thirdweb-dev/react";
import { title } from "process";
import {use, useEffect} from "react";
import {useRouter} from "next/router";
import { ethers } from "ethers";

import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the footer component







const VillaToken: React.FC = () => {
  return (

    <main className={styles.main}>
    <ThirdwebProvider>
    <Header />


      <div className={styles.container}>
          <h1 className={styles.title}>$VILLA Tokens</h1>

          <div className={styles.container2}>

            <div className={styles.card}>
            <h1>Villa Model Tokens</h1>
                <p className={styles.paragraph1}>
THIS IS WHERE THE VIDEO GOES


                </p>



            </div>
            <div className={styles.card}>

                <h1>Villa Model Tokens</h1>
                <p className={styles.paragraph1}>
In a innovative partnership with <a href="https://www.p00ls.io/" target="_blank" rel="noopener noreferrer">P00LS</a>, Villa Model Tokens ($VILLA) were developed as a digital token, leveraging the power of blockchain technology. These tokens provide holders with exclusive access to The Villa, an immersive digital space offering early access to music pre-releases, exclusive merchandise discounts, and the ability to exchange tokens for unique accessories. Notably, Villa Model Tokens are Non-transferable Tokens (NTTs), ensuring that each holder enjoys the full benefits of membership within our vibrant community. Join us in embracing the future of digital ownership and cultural engagement. Join our vibrant ecosystem and be part of a movement that celebrates creativity, community, and cultural expression.


                </p>


            </div>
          </div>

<h1>check{/*check for padding of the style maybe?</h1>*/}</h1>










<div className={styles.container2}>

<div className={styles.card}>
<h2>Token info;</h2>
                      <ul className={styles.tokenInfo}>
                          <li>Creator: Villa Model</li>
                          <li>Token Name: VILLA Token</li>
                          <li>Symbol: VILLA</li>
                          <li>Type: ERC20</li>
                          <li>Blockchain: Polygon</li>
                          <li>Max Supply: 10 Billion</li>
                          <li>
                              <a href="https://polygonscan.com" target="_blank" rel="noopener noreferrer" className={styles.polygonscanLink}>
                                  View on PolygonScan
                              </a>
                          </li>
                      </ul>



</div>
<div className={styles.card}>

    <h1>Villa Model Tokens</h1>
    <p className={styles.paragraph1}>
In a innovative partnership with <a href="https://www.p00ls.io/" target="_blank" rel="noopener noreferrer">P00LS</a>, Villa Model Tokens ($VILLA) were developed as a digital token, leveraging the power of blockchain technology. These tokens provide holders with exclusive access to The Villa, an immersive digital space offering early access to music pre-releases, exclusive merchandise discounts, and the ability to exchange tokens for unique accessories. Notably, Villa Model Tokens are Non-transferable Tokens (NTTs), ensuring that each holder enjoys the full benefits of membership within our vibrant community. Join us in embracing the future of digital ownership and cultural engagement. Join our vibrant ecosystem and be part of a movement that celebrates creativity, community, and cultural expression.


    </p>


</div>
</div>

<h1>chasdfeck{/*check for padding of the style maybe?</h1>*/}</h1>


















            <div className={styles.container}>
            <h1>Center Leaderboard{/*Center the leaderboard */}</h1>
                <iframe
                      width="580"
                      height="680"
                      title="P00LS Leaderboard"
                      src="https://app.p00ls.io/embeds/leaderboard/earners/VILLA?size=m&rows=9"
                      frameBorder="0"
                      allowFullScreen>
                </iframe>
            </div>
        <Footer/>
      </div>
      </ThirdwebProvider>
    </main>
  );
};
export default VillaToken;
