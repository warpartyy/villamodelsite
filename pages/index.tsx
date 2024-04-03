import React from 'react'; //IDK what this is
import Header from './Header'; // Import the Header component

import Footer from './Footer'; // Import the footer component
import { ConnectWallet, ThirdwebSDK } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import {ThirdwebProvider} from "@thirdweb-dev/react";
import { title } from "process";
import {use, useEffect} from "react";
import {useRouter} from "next/router";
import { ethers } from "ethers";






const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <ThirdwebProvider>
      <div className={styles.body}>
        <div>
          <Header /> {/* Include the Header component */}
          <div className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                Villa
                {" "}
                <span className={styles.gradientText0}>
                  Model
                </span>
              </h1>

              <p className={styles.description}>
                Home page shit
              </p>


              <iframe
  className={styles.iframe}
  src="https://open.spotify.com/embed/playlist/7cUBLPqiuS8G0tNm04xXzE?utm_source=generator"
  width="100%"
  height="400"
  frameBorder="0"
  allowFullScreen
  allow="encrypted-media"
  loading="lazy"
></iframe>








              <div>
              </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </ThirdwebProvider>
    </main>
  );
};

export default Home;
