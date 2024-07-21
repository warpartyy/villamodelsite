import styles from "../styles/Home.module.css";
import Image from "next/image";
import Header from './Header';
import Footer from './Footer';
export const runtime = "edge";
// Define the SongCard component
const SongCard: React.FC<{ imageUrl: string; songTitle: string; songUrl: string }> = ({ imageUrl, songTitle, songUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} width={300} height={300} alt={songTitle} />
      </div>
      <p>{songTitle}</p>
      <button className={styles.button} onClick={() => window.open(songUrl)}>Collect</button>
    </div>
  );
};

const NFTs: React.FC = () => {
  return (
    <main className={styles.main}>
      {/*<ThirdwebProvider>*/}
        <Header />
        <div className={styles.container}>
          <h1 className={styles.title}>NFTs</h1>
          <h1> Sound Drops</h1>
          <p>{/*Info about Sound and Optimism. Include that you receive $VILLA*/}</p>
          <div className={styles.container3}>
            <SongCard
              imageUrl="/images/ReadyOrNot.jpg"
              songTitle="Ready or Not"
              songUrl="https://www.sound.xyz/villamodel/ready-or-not"
            />
            <SongCard
              imageUrl="/images/AllTheseThings.jpg"
              songTitle="All These Things"
              songUrl="https://www.sound.xyz/villamodel/all-these-things"
            />
            <SongCard
              imageUrl="/images/MyQuest.jpg"
              songTitle="My Quest"
              songUrl="https://www.sound.xyz/villamodel/my-quest"
            />
          </div>
<p>{/* */}</p>


{/*}          <h1> Siki</h1>
          <p>info about siki and hedera?</p>
          <div className={styles.container2}>
            <div className={styles.card}>
              <h2>Wannabee</h2>
            </div>
            <div className={styles.card}>
              <h2>Without You</h2>
  </div> 
  </div> */}
        </div>
        <Footer />
      {/*<ThirdwebProvider>*/}
    </main>
  );
};

export default NFTs;
