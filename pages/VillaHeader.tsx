import React from 'react';
import Link from 'next/link';
import styles from '../styles/VillaHeader.module.css'; // Import CSS styles for header
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';
import HotButton from "./HotButton";

// Define the VillaHeader component
const VillaHeader: React.FC = () => {
  // Check if the user is signed in to their wallet
  const isSignedIn = /* Logic to check if the user is signed in */ true;

  // Render the header content based on the authentication status
  return (
    <header className={styles.header}>
      {isSignedIn ? ( // If the user is signed in
        <>
          {/* Left side with logo */}
          <div className={styles.logo}>
            <Link href="/">
              Villa Model
            </Link>
          </div>
          {/* Middle section with navigation links */}
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/VillaToken">
                  Tokens
                </Link>
              </li>
              <li>
                <Link href="/NFTs">
                  NFTs
                </Link>
              </li>
              <li>
                <Link href="/Furnace"> {/* Add link to Furnace page */}
                  Furnace
                </Link>
              </li>
              <li>
                <a href="https://villamodel.myshopify.com/" target="_blank" rel="noopener noreferrer">Merch</a>
              </li>
            </ul>
          </nav>
          {/* Right side with social icons */}
          <div className={styles.social}>
            <HotButton />
          </div>

        </>
      ) : (
        // If the user is not signed in, display a message or redirect to sign-in page
        <div className={styles.signInMessage}>
          Please sign in to your wallet to access the site.
        </div>
      )}
    </header>
  );
};

// Export the VillaHeader component
export default VillaHeader;
