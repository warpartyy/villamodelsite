import { ThirdwebProvider, darkTheme } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

const VillaAccess: React.FC = () => {
  const router = useRouter();

  const customDarkTheme = darkTheme({
    colors: {
      accentText: "#c70000",
      modalBg: "#000000",
      separatorLine: "#312626",
      borderColor: "#6b0a0a",
    },
  });

  const handleLogin = () => {
    // Just navigate directly — no wallet, no token logic yet
    router.push("/TheVilla");
  };

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            The <span className={styles.gradientText0}>Villa</span>
          </h1>
          <p className={styles.description}>
            Access exclusive Villa Model content.
          </p>

          <div className={styles.connect}>
            <button
              onClick={handleLogin}
              className={styles.connectWalletBtn}
              style={{
                backgroundColor: "#c70000",
                color: "white",
                border: "none",
                padding: "12px 28px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Enter The Villa
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default VillaAccess;
