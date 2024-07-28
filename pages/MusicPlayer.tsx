import React, { useRef, useState, useEffect } from 'react';
import styles from './MusicPlayer.module.css'; // Adjust the import path as necessary

interface Song {
  title: string;
  artist: string;
  url: string;
}

const MusicPlayer: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [songs, setSongs] = useState<Song[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [dataArray, setDataArray] = useState<Uint8Array | null>(null);

  useEffect(() => {
    if (audioRef.current && canvasRef.current) {
      const audio = audioRef.current;
      const canvas = canvasRef.current;
      const canvasCtx = canvas.getContext('2d');

      if (audio && canvasCtx) {
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(audio);

        source.connect(analyser);
        analyser.connect(audioContext.destination);

        setAnalyser(analyser);
        setDataArray(new Uint8Array(analyser.frequencyBinCount));

        const draw = () => {
          if (canvas && canvasCtx && dataArray) {
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            analyser.getByteFrequencyData(dataArray);
            // Drawing logic...
            requestAnimationFrame(draw);
          }
        };

        draw();
      }
    }
  }, [currentSong, audioElement]); // Make sure to include all relevant dependencies

  const loadSong = (song: Song) => {
    if (audioRef.current) {
      audioRef.current.src = song.url;
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    // Logic for handling the next song
  };

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.visualizerContainer}>
        <canvas ref={canvasRef} className={styles.visualizer} />
      </div>
      <div className={styles.trackInfo}>
        {currentSong && (
          <>
            <h2>{currentSong.title}</h2>
            <p>{currentSong.artist}</p>
          </>
        )}
      </div>
      <div className={styles.controls}>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}></div>
      </div>
      <ul className={styles.songList}>
        {songs.map((song, index) => (
          <li
            key={index}
            className={`${styles.songItem} ${currentSong === song ? styles.active : ''}`}
            onClick={() => loadSong(song)}
          >
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayer;
