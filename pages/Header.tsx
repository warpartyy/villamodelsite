import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';
import HeaderLoginButton from "./HeaderLoginButton";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          Villa Model
        </Link>
      </div>
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
            <a href="https://villamodel.myshopify.com/" target="_blank" rel="noopener noreferrer">Merch</a>
          </li>
        </ul>
      </nav>
      <div className={styles.social}>
      <div className={styles.social}>
        <a href="https://www.twitter.com/villa_model/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/villa.model/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://open.spotify.com/artist/2Xv8NRrv3DKbD3DF5HKRtt" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a href="http://itunes.apple.com/album/id/1531848492" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faApple} />
        </a>

        <div className={styles.loginButton}>
        <HeaderLoginButton />
      </div>

     </div> 
     </div>


    </header>
  );
};

export default Header;
