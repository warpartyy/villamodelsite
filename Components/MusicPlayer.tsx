import React, { useState, useEffect } from 'react';
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

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!audio) return;

    const progressContainer = event.currentTarget;
    const offsetX = event.nativeEvent.offsetX;
    const width = progressContainer.clientWidth;
    const newTime = (offsetX / width) * audio.duration;

    audio.currentTime = newTime;
    setProgress((audio.currentTime / audio.duration) * 100);
    setIsPlaying(true); // Start playing if it was paused
  };

  return (
    <div className={styles.musicPlayer}>
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
      <div className={styles.progressContainer} onClick={handleProgressBarClick}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <ul className={styles.songList}>
        {tracks.map((track, index) => (
          <li
            key={track.id}
            className={`${styles.songItem} ${
              index === currentTrackIndex ? styles.active : ''
            }`}
            onClick={() => handleTrackClick(index)}
          >
            <span className={styles.trackNumber}>{track.id}</span>
            {track.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicPlayer;
