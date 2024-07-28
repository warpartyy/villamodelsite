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
        <li>
            <Link href="/TheVilla">The Villa</Link>
          </li>

          <li>
            <Link href="/EarlyAccess">Early Access</Link>
          </li>

          <li>
            <Link href="/BehindTheScenes">Behind the Scenes</Link>
          </li>
          <li>
            <Link href="/MessageBoard">Message Board</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default VillaHeader;