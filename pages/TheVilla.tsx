import styles from "../styles/Villa.module.css";
import VillaHeader from "./VillaHeader";
import VillaFooter from "./VillaFooter";

const TheVilla: React.FC = () => {
  return (
    <main className={styles.main}>
        <VillaHeader/>





        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              THE
              {" "}
              <span className={styles.gradientText0}>
                VILLA
              </span>
            </h1>
            <p className={styles.description}>
              Welcome!
            </p>
           
            <p className={styles.description}>
              Some of the coolest projects ive seen build in the open. This is The Villa.
            </p>


          </div>
        </div>
        <VillaFooter/>
    </main>
  );
};

export default TheVilla;
