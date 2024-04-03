import { ConnectWallet, ThirdwebSDK } from "@thirdweb-dev/react";
import styles from "../styles/Villa.module.css";
import Image from "next/image";
import { NextPage } from "next";
import {ThirdwebProvider} from "@thirdweb-dev/react";
import { title } from "process";
import {use, useEffect} from "react";
import React, { useState } from "react";


import {useRouter} from "next/router";
import { ethers } from "ethers";
import { contractInfo } from "./contractInfo";
import VillaFooter from './VillaFooter'; // Import the footer component
import VillaHeader from "./VillaHeader";






const Furnace: React.FC = () => {
    const router = useRouter();
    const [contract, setContract] = useState<any>(null);
    const [burnAmount, setBurnAmount] = useState<string>("");
  
    useEffect(() => {
      const initContract = async () => {
        try {
          // Initialize the contract with the address and ABI
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, signer);
          setContract(contract);
        } catch (error) {
          console.error("Error initializing contract:", error);
        }
      };
  
      initContract();
    }, []);
  
    const handleBurn = async () => {
      if (!contract || !burnAmount) return;
  
      try {
        // Call the burn function on the contract
        const tx = await contract.burnTokens(ethers.utils.parseEther(burnAmount));
        await tx.wait();
        console.log("Tokens burned successfully!");
        // Optionally, you can navigate to another page or display a success message
      } catch (error) {
        console.error("Error burning tokens:", error);
        // Optionally, you can display an error message to the user
      }
    };
















    
    return (
      <main className={styles.main}>
        <VillaHeader />
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>The Furnace</h1>
            <p className={styles.description}>Burn $VILLA tokens to redeem rewards!</p>
            <p className={styles.description}>Select your reward!</p>
            <p className={styles.description}>Put a picture of the VM 100s NFT</p> 
            <p className={styles.description}>Put a picture mockup of the sticker.</p>
            <p className={styles.description}>Make a note of digital vs physical</p>


            <input
              type="text"
              value={burnAmount}
              onChange={(e) => setBurnAmount(e.target.value)}
              placeholder="Enter amount to burn"
            />
            <button onClick={handleBurn}>Burn Tokens</button>
          </div>
        </div>
        <VillaFooter />
      </main>
    );
  };
  
  export default Furnace;