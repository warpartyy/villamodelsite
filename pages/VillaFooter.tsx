// Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from '../styles/VillaFooter.module.css'; // Import CSS styles for footer
export const runtime = "edge";
const VillaFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Right side with social icons */}
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
      </div>

      {/* Copyright text */}
      <p>&copy; 2024 Villa Model.</p>
    </footer>
  );
};

export default VillaFooter;
