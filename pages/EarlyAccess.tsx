import React from 'react';
import MusicPlayer from '../Components/MusicPlayer'; // Adjust the import path if needed
import VillaHeader from "./VillaHeader";
import VillaFooter from "./VillaFooter";
import styles from '../styles/EarlyAccess.module.css';

// Add the paths to song files
const tracks = [
  { id: 1, title: '34', url: '/audio/34.mp3' }, // Use absolute paths from the public directory
  { id: 2, title: 'Local', url: '/audio/Local.mp3' },
  { id: 3, title: 'Serotonin', url: '/audio/Serotonin.mp3' },
  // Add more tracks as needed
];

const EarlyAccess: React.FC = () => {
  return (
    <>
      <VillaHeader />
      <main>
        <div>
          <h1>Early Access</h1>
          <p>This music player consists of songs that are in progress. They are mostly instrumentals and will be released later. </p>
          <MusicPlayer tracks={tracks} />
        </div>
      </main>
      <VillaFooter />
    </>
  );
};

export default EarlyAccess;
