import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Importing logout icon
import styles from '../styles/VillaHeader.module.css';

const VillaHeader: React.FC = () => {
  const router = useRouter();

  const handleExit = () => {
    router.push('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.exitButton} onClick={handleExit}>
        <FontAwesomeIcon icon={faSignOutAlt} /> {/* Using logout icon */}
      </div>
      <nav className={styles.nav}>
        <ul>




        </ul>
      </nav>
    </header>
  );
};

export default VillaHeader;
