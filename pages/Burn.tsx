import { ConnectWallet, ThirdwebSDK } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import {ThirdwebProvider} from "@thirdweb-dev/react";
import { title } from "process";
import {use, useEffect} from "react";
import {useRouter} from "next/router";
import { ethers } from "ethers";

import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the footer component

import React, { useState } from 'react'; // Import useState from React


const Burn: React.FC = () => {
  const [tokensToBurn, setTokensToBurn] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<string>('');

  // Function to handle burning ERC20 tokens
  const handleBurn = () => {
    // Implement logic to burn tokens and distribute items
    // This would typically involve interacting with a smart contract
    // and updating the UI accordingly
    console.log(`Burning ${tokensToBurn} tokens for item: ${selectedItem}`);
  };

  return (
    <div>
      <Header />
      <div>
        <h1>Burn Tokens for Items</h1>
        <div>
          <label>Number of Tokens to Burn:</label>
          <input
            type="number"
            value={tokensToBurn}
            onChange={(e) => setTokensToBurn(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Select Item:</label>
          <select
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
          >
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            {/* Add more items as needed */}
          </select>
        </div>
        <button onClick={handleBurn}>Burn Tokens</button>
      </div>
      <Footer />
    </div>
  );
};

export default Burn;