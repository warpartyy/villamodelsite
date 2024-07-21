import styles from "../styles/Home.module.css";
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the footer component
export const runtime = "edge";


const VillaToken: React.FC = () => {
  return (
    <main className={styles.main}>
    {/*<ThirdwebProvider>*/}
    <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>$VILLA Tokens</h1>
        <div className={styles.container2}>

          <div className={styles.videoContainer}>
            <video className={styles.zoomedVideo} autoPlay muted loop controls={false}>
            <source src="/videos/token.mp4" type="video/mp4" />Your browser does not support the video tag.
            </video>
          </div>
  
          <div className={styles.card}>
                <h1>Villa Model Tokens</h1>
                <p className={styles.VillaParagraph}>
In a innovative partnership with <a href="https://www.p00ls.io/" target="_blank" rel="noopener noreferrer">P00LS</a>, Villa Model Tokens ($VILLA) were developed as a digital token, leveraging the power of blockchain technology. These tokens provide holders with exclusive access to The Villa. Notably, Villa Model Tokens are Non-transferable Tokens (NTTs), ensuring that each holder enjoys the full benefits of membership within the community.
</p>
<h2>Token info;</h2>
                      <ul className={styles.tokenInfo}>
                          <li>Creator: Villa Model</li>
                          <li>Token Name: VILLA Token</li>
                          <li>Symbol: VILLA</li>
                          <li>Type: ERC20</li>
                          <li>Blockchain: Polygon</li>
                          <li>Max Supply: 10 Billion</li>
                          <li>
                              <a href="https://polygonscan.com" target="_blank" rel="noopener noreferrer" className={styles.polygonscanLink}>
                                  View on PolygonScan
                              </a>
                          </li>
                      </ul>
            </div>
          </div>

<p>{/*check for padding of the style maybe?</h1>*/}</p>

<div className={styles.lbCard}>
<h1>$VILLA Leaderboard</h1>
            <div className={styles.Leaderboard}>
                <iframe
                      width="580"
                      height="680"
                      title="P00LS Leaderboard"
                      src="https://app.p00ls.io/embeds/leaderboard/earners/VILLA?size=m&rows=9"
                      frameBorder="0"
                      allowFullScreen>
                </iframe>
            </div>
</div>

      </div>
      <Footer/>
    </main>
  );
};
export default VillaToken;
