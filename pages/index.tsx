import React from 'react';
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import dotenv from 'dotenv';
dotenv.config();
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the footer component
import Image from "next/image";



const Home: NextPage = () => {
  return (
    <main className={styles.main}>
          <Header />
<div className={styles.heroContainer}>
<div className={styles.hero}>
<div className={styles.heroOverlay}>


</div>
</div>
</div>


      <div className={styles.body}>




          <div className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                The
                {" "}
                <span className={styles.gradientText0}>
                  Villa
                </span>
              </h1>
              <div>








              </div>
            </div>
          </div>

      </div>
      <Footer/>
    </main>
  );
};

export default Home;
