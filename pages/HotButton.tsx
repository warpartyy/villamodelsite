/* SAVE THIS. This adds a working button to the header*/
/*For now I'm going to add a Button that redirects to the VillaAccess Page*/

import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { contractInfo } from "./contractInfo";

import styles from '../styles/VillaHeader.module.css'; // Import CSS styles for header



const HotButton: React.FC = () => {
  const router = useRouter();

  const handleLogin = async () => {
    // Add the handleLogin function here...
  };

  return (
    <ConnectWallet
      btnTitle="Login"
      className={styles.connectWalletBtn} // Make sure to define this class in your CSS file
      //modalSize="wide"

      dropdownPosition={{
        side: "bottom",
        align: "end",
      }}
      displayBalanceToken={{
        137: "0xEF270DD605f827dB3D8dc29d2073A5D8b451Ae4D",
      }}

      switchToActiveChain={true}
      modalTitleIconUrl=""
      welcomeScreen={{
        title: "The Villa",
        subtitle: "Verify $VILLA tokens to enter",
      }}
      onConnect={handleLogin}
      // Add other props as needed
    />
  );
};

export default HotButton;
