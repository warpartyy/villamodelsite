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
                Villa
                {" "}
                <span className={styles.gradientText0}>
                  Model
                </span>
              </h1>

              <p className={styles.description}>
                Home page
              </p>
              <div>
<div>
<iframe 
                style={{ borderRadius: "12px" }} 
                src="https://open.spotify.com/embed/playlist/7cUBLPqiuS8G0tNm04xXzE?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>


</div>







              </div>
            </div>
          </div>

      </div>
      <Footer/>
    </main>
  );
};

export default Home;
