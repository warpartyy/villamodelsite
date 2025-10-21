import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";

const NFTs: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>NFTs</h1>
        <div className={styles.card}>
          <p className={styles.VillaParagraph}>
            Our NFT experience is currently being reimagined and rebuilt on the
            Hedera network. Soon, you’ll be able to explore, collect, and engage
            with new releases directly through Hedera-powered integrations.
          </p>
          <p className={styles.VillaParagraph}>
            Stay tuned for upcoming drops and exclusive access experiences.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NFTs;
