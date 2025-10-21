import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faSpotify, faApple, faTiktok } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css'; // Import CSS styles for footer

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Right side with social icons */}
      <div className={styles.social}>
        <a 
          href="https://www.twitter.com/villa_model/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Follow us on Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a 
          href="https://www.tiktok.com/@villa.model" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Follow us on TikTok"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>

        <a 
          href="https://www.instagram.com/villa.model/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Follow us on Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

 


      </div>
    </footer>
  );
};

export default Footer;
