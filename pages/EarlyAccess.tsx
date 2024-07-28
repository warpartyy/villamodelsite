import React from 'react';
import styles from '../styles/Villa.module.css';
import VillaHeader from './VillaHeader';
import VillaFooter from './VillaFooter';
import MusicPlayer from './MusicPlayer'; // Import the MusicPlayer component

const EarlyAccess: React.FC = () => {
  return (
    <main className={styles.main}>
      <VillaHeader />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Early 
            {" "}
            <span className={styles.gradientText0}>
              Access
            </span>
          </h1>
          <p className={styles.description}>
            Spoiler Alert!
          </p>
          
          <p className={styles.description}>
            This playlist is of songs that are not finished and will be released at some point. Not in any particular order. Mostly instrumental.
          </p>

          <MusicPlayer /> {/* Use the MusicPlayer component */}
        </div>
      </div>

      <VillaFooter />
    </main>
  );
};

export default EarlyAccess;
