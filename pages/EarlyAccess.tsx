import React from 'react';
import styles from '../styles/Villa.module.css';
import VillaHeader from './VillaHeader';
import VillaFooter from './VillaFooter';

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
            P1
          </p>
          
          <p className={styles.description}>
            Unreleased
          </p>

          {/* Remove AudioVisualizer */}
          {/* <AudioVisualizer /> */}
        </div>
      </div>

      <VillaFooter />
    </main>
  );
};

export default EarlyAccess;
