import React from 'react';
import MusicPlayer from '../Components/MusicPlayer'; // Adjust the import path if needed


//Add the paths to song files
const tracks = [
  { id: 1, title: '34', url: '../audio/34.mp3' },
  { id: 2, title: 'Local', url: '../audio/Local.mp3' },
  { id: 3, title: 'Serotonin', url: '../audio/Serotonin.mp3' },
  // Add more tracks as needed
];

const EarlyAccess: React.FC = () => {
  return (
    <div>

      <h1>Early Access</h1>

      <p>Welcome to the Early Access page! Enjoy some exclusive content.</p>
      <MusicPlayer tracks={tracks} />
    </div>
  );
};

export default EarlyAccess;
