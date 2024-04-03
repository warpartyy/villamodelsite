import { ConnectWallet, ThirdwebSDK } from "@thirdweb-dev/react";
import styles from "../styles/Villa.module.css";
import Image from "next/image";
import { NextPage } from "next";
import {ThirdwebProvider} from "@thirdweb-dev/react";
import { title } from "process";
import {use, useEffect} from "react";
import {useRouter} from "next/router";
import { ethers } from "ethers";


import VillaFooter from './VillaFooter'; // Import the footer component
import VillaHeader from "./VillaHeader";




const TheVilla: React.FC = () => {
  return (
    <main className={styles.main}>
      <ThirdwebProvider>
        <VillaHeader/>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              THE
              {" "}
              <span className={styles.gradientText0}>
                VILLA
              </span>
            </h1>
            <p className={styles.description}>
              Token Gated shit
            </p>

            


            
            <div className={styles.card}>
              <h2>Card Title</h2>
              <p>This is a sample card with some default text.</p>
            </div>
          </div>

        </div>
        <VillaFooter/>
      </ThirdwebProvider>
    </main>
  );
};

export default TheVilla;
