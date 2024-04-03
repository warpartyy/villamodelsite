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
          <h1 className={styles.title}>NFTs</h1>

          
          <h1> Sound drops</h1> {/* center this? */}
          <p>info about Sound and Optimism. Include that you recieve $VILLA</p>
          <div className={styles.container3}>


              <div className={styles.card}>
                <h2>Import My Quest</h2>
              </div>
              <div className={styles.card}>
                <h2>Import All These Things</h2>
              </div>
              <div className={styles.card}>
                <h2>Import Ready or Not</h2>
              </div>
            </div>



            <h1> Siki</h1> {/* center this? */}
            <p>info about siki and hedera?</p>

            <div className={styles.container2}>

              <div className={styles.card}>
                <h2>Wannabee</h2>
              </div>
              <div className={styles.card}>
                <h2>Without You</h2>
              </div>
            </div>






        <Footer/>
      </div>
      </ThirdwebProvider>
    </main>
  );
};
export default VillaToken;
