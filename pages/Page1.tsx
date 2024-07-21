import styles from "../styles/Villa.module.css";
import VillaHeader from "./VillaHeader";
import VillaFooter from "./VillaFooter";
export const runtime = "edge";
const TheVilla: React.FC = () => {
  return (
    <main className={styles.main}>
        <VillaHeader/>




        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Page
              {" "}
              <span className={styles.gradientText0}>
                1
              </span>
            </h1>
            <p className={styles.description}>
              P1
            </p>
           
            <p className={styles.description}>
              Page 1. What will it be?
            </p>


          </div>
        </div>
        <VillaFooter/>
    </main>
  );
};

export default TheVilla;
