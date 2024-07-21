import { ConnectWallet, ThirdwebProvider, darkTheme } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { ethers } from "ethers";
import { contractInfo } from "../Components/contractInfo";
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the footer component
export const runtime = "edge";
const VillaAccess: React.FC = () => {
  const router = useRouter();
  const [userTokenBalance, setUserTokenBalance] = useState<number>(0);

  const customDarkTheme = darkTheme({
    colors: {
      accentText: "#c70000",
      modalBg: "#000000",
      separatorLine: "#312626",
      borderColor: "#6b0a0a",
    },
  });


const handleLogin = async () => {
  if (!window.ethereum) {
    alert("Please install MetaMask to access this page.");
    return;
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, signer);
    
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length === 0) {
      alert("No account connected. Please connect your wallet.");
      return;
    }

    const userAddress = accounts[0];
    const balance = await contract.balanceOf(userAddress);


    const minTokenBalance = 100; // Set your minimum token balance required
    if (balance.gte(minTokenBalance)) {
      router.push("/TheVilla");
    } else {
      router.push('/VillaToken');
    }
    
  } catch (error: any) { // Explicitly typing error as any
    console.error("Error:", error.message);
    alert("Something went wrong.");
  }
};


  



















/**fasdfasdfasdfasdsdfadsfasdfasdfasdfasdfadsf */



  

  return (
    <main className={styles.main}>

        <Header />
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              The
              <span className={styles.gradientText0}>Villa</span>
            </h1>
            <p className={styles.description}>Login with $Villa tokens.</p>
            <div className={styles.connect}>
              <ConnectWallet
                btnTitle="Login"
                className={styles.connectWalletBtn}
                modalSize="wide"
                modalTitleIconUrl=""
                welcomeScreen={{
                  title: "The Villa",
                  subtitle: "Verify $VILLA tokens to enter",
                }}
                showThirdwebBranding={false}
                theme={customDarkTheme}
                switchToActiveChain={true}
                hideTestnetFaucet={true}

                displayBalanceToken={{
                  137: "0xEF270DD605f827dB3D8dc29d2073A5D8b451Ae4D",
                }}
                onConnect={handleLogin}
              />
            </div>
          </div>
          <Footer/>
        </div>

    </main>
  );
};

export default VillaAccess;
