// pages/MusicPlayer.tsx

import React, { useState, useEffect, ChangeEvent } from 'react';
import styles from '../styles/MusicPlayer.module.css';


interface Track {
  id: number;
  title: string;
  url: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const newAudio = new Audio(tracks[currentTrackIndex].url);
    setAudio(newAudio);
    
    if (isPlaying) {
      newAudio.play();
    }

    return () => {
      newAudio.pause();
      setAudio(null);
    };
  }, [currentTrackIndex, isPlaying, tracks]);

  useEffect(() => {
    if (!audio) return;

    const updateProgress = () => {
      if (audio) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, [audio]);

  const playPauseHandler = () => {
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipHandler = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'prev'
        ? Math.max(currentTrackIndex - 1, 0)
        : Math.min(currentTrackIndex + 1, tracks.length - 1);
    setCurrentTrackIndex(newIndex);
    setIsPlaying(true);
  };

  const handleTrackClick = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className={styles.musicPlayerContainer}>
      <h2 className={styles.musicPlayerHeader}>Music Player</h2>
      <div className={styles.controls}>
        <button
          className={styles.controlButton}
          onClick={() => skipHandler('prev')}
        >
          Prev
        </button>
        <button
          className={styles.controlButton}
          onClick={playPauseHandler}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          className={styles.controlButton}
          onClick={() => skipHandler('next')}
        >
          Next
        </button>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <ul className={styles.trackList}>
        {tracks.map((track, index) => (
          <li
            key={track.id}
            className={`${styles.trackItem} ${
              index === currentTrackIndex ? styles.active : ''
            }`}
            onClick={() => handleTrackClick(index)}
          >
            {track.title}
          </li>
        ))}
      </ul>
      <div className={styles.timeInfo}>
        <span>{audio ? formatTime(audio.currentTime) : '0:00'}</span>
        <span>{audio ? formatTime(audio.duration) : '0:00'}</span>
      </div>
    </div>
  );
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export default MusicPlayer;
