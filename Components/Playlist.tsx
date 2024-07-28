import { useState, useRef } from "react";
import styles from "../styles/Villa.module.css";

const tracks = [
  { title: "Local Updated", src: "../public/audio/Local_Updated.mp3" },
  { title: "Serotonin", src: "../public/audio/Serotonin.mp3" },
  { title: "34", src: "../public/audio/34.mp3" }
];

const Playlist: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0].src);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTrackChange = (src: string) => {
    setCurrentTrack(src);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <div className={styles.playlistContainer}>
      <audio ref={audioRef} controls>
        <source src={currentTrack} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <ul className={styles.playlist}>
        {tracks.map((track, index) => (
          <li key={index} onClick={() => handleTrackChange(track.src)}>
            {track.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
