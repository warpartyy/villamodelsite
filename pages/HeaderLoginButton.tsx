import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css'; // Import CSS styles for header

const HeaderLoginButton: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/VillaAccess');
  };

  return (
    <button className={styles.connectWalletBtn} onClick={handleLogin}>
      The Villa
    </button>
  );
};

export default HeaderLoginButton;
