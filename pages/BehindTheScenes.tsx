import styles from "../styles/Villa.module.css";
import VillaHeader from "./VillaHeader";
import VillaFooter from "./VillaFooter";

const BehindTheScenes: React.FC = () => {
  return (
    <main className={styles.main}>
        <VillaHeader/>





        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Behind the Scenes
              {" "}
              <span className={styles.gradientText0}>
                2
              </span>
            </h1>
            <p className={styles.description}>
              Welcome!
            </p>
           
            <p className={styles.description}>
              Page 2. What will it be?
            </p>


          </div>
        </div>
        <VillaFooter/>
    </main>
  );
};

export default BehindTheScenes;
