import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";

const VillaToken: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Villa Token</h1>
        <div className={styles.card}>
          <p className={styles.VillaParagraph}>
            The Villa token experience is evolving.  
            We’re transitioning to a new, Hedera-based token that will power future
            access and community features. Stay tuned for updates.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default VillaToken;
