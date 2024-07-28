import styles from "../styles/Home.module.css";
import Image from "next/image";
import Header from './Header';
import Footer from './Footer';

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
          <p className={styles.nftDescription}>
            NFTs (Non-Fungible Tokens) are unique digital assets verified using blockchain technology. Unlike cryptocurrencies such as Bitcoin, which are interchangeable, each NFT has distinct attributes that make it one-of-a-kind. They can represent various forms of digital content, such as art, music, and collectibles. By owning an NFT, you gain verifiable ownership of a unique digital item, and many NFTs offer additional benefits such as exclusive access or rewards.
          </p>
          <h1>Sound Drops</h1>
          <p>
            Our sound drops are exclusive music releases available as NFTs. By collecting these NFTs, you not only get access to unique tracks but also receive $VILLA tokens as a reward. $VILLA tokens can be used for various benefits within our ecosystem, including special access and future drops.
          </p>
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
          <h1>SIKI Integration</h1>
          <p>
            SIKI is a cutting-edge platform for creating, managing, and trading NFTs. It leverages the Hedera Hashgraph network to ensure fast, secure, and scalable transactions. Hedera Hashgraph is known for its high throughput and low transaction fees, making it an ideal choice for NFT projects. By integrating with SIKI, we can offer our community seamless experiences and access to a wide range of NFT functionalities.
          </p>
          <div className={styles.container3}>
            <div className={styles.card}>
              <Image src="/images/wannabee.jpg" width={300} height={300} alt="Wannabee" />
              <h2>Wannabee</h2>
              <p>Description of Wannabee NFT on SIKI</p>
            </div>
            <div className={styles.card}>
              <Image src="/images/WithoutYou.jpg" width={300} height={300} alt="Without You" />
              <h2>Without You</h2>
              <p>Description of Without You NFT on SIKI</p>
            </div> 
            <div className={styles.card}>
              <Image src="/images/HangingOn.jpg" width={300} height={300} alt="Hanging On" />
              <h2>Hanging On</h2>
              <p>Description of Hanging On NFT on SIKI</p>
            </div> 
          </div>
        </div>
        <Footer />
      {/*<ThirdwebProvider>*/}
    </main>
  );
};

export default NFTs;
