import styles from "../styles/Villa.module.css";
import VillaHeader from "./VillaHeader";
import VillaFooter from "./VillaFooter";

const TheVilla: React.FC = () => {
  return (
    <main className={styles.main}>
      <VillaHeader />

      <div className={styles.container}>
        <div className={styles.header}>


          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText1}>THE VILLA</span>
          </h1>

          {/* Early Access Section */}
          <h2 className={styles.title2}>Early Access</h2>
          <p className={styles.description}>
            Listen to songs before they are finished. Songs are updated as they
            progress so you can follow the journey.
          </p>

          {/* Behind The Scenes Section */}
          <h2 className={styles.title2}>Behind The Scenes</h2>
          <p className={styles.description}>
            Place holder text for description
          </p>

          {/* Message Board Section */}
          <h2 className={styles.title2}>Message Board</h2>
          <p className={styles.description}>
            Place holder text for description
          </p>

          {/* Redeem Section */}
          <h2 className={styles.title2}>Redeem</h2>
          <p className={styles.description}>
            Burn your $villa tokens for redeemables! You can use your tokens to
            mint NFTs or get some stickers!
          </p>
        </div>
      </div>
      <VillaFooter />
    </main>
  );
};

export default TheVilla;
