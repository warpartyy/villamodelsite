import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faSpotify, faApple, faTiktok } from '@fortawesome/free-brands-svg-icons';
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

        <a href="https://www.tiktok.com/@villa.model" target="_blank" rel="noopener noreferrer"> {/* Add your TikTok link */}
          <FontAwesomeIcon icon={faTiktok} />
        </a>

        <a href="https://www.instagram.com/villa.model/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
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
