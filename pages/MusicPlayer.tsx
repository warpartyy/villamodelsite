import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Villa.module.css';

const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const songs = [
    { src: '/audio/34.mp3', name: '34' },
    { src: '/audio/Local.mp3', name: 'Local' },
    { src: '/audio/Serotonin.mp3', name: 'Serotonin' }
  ];

  const loadSong = (index: number) => {
    if (audioRef.current) {
      audioRef.current.src = songs[index].src;
      audioRef.current.load();
      setCurrentTime(0); // Reset current time when loading a new song
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      if (!audioRef.current.src) {
        loadSong(currentSongIndex);
      }
      audioRef.current.play();
      setIsPlaying(true);

      if (!audioCtxRef.current) {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();

        audioCtxRef.current = audioCtx;
        analyserRef.current = analyser;

        const source = audioCtx.createMediaElementSource(audioRef.current);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);

        const canvas = canvasRef.current;
        const canvasCtx = canvas?.getContext('2d');
        if (canvasCtx) {
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);

          let hue = 0;

          const draw = () => {
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

            analyser.getByteFrequencyData(dataArray);

            const barWidth = (canvas.width / bufferLength) * 2.5;
            let barHeight;
            let x = 0;

            canvasCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;
            hue = (hue + 0.5) % 360;

            for (let i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i];
              canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
              x += barWidth + 1;
            }

            requestAnimationFrame(draw);
          };

          draw();
        }
      }
    }
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = (e.target as HTMLDivElement).getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (offsetX / width) * (audioRef.current.duration || 0);
      audioRef.current.currentTime = newTime;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio && audio.duration) {
        setCurrentTime(audio.currentTime);
        if (progressBarRef.current) {
          const progress = (audio.currentTime / audio.duration) * 100;
          progressBarRef.current.style.width = `${progress}%`;
        }
      }
    };

    audio?.addEventListener('timeupdate', updateProgress);

    return () => {
      audio?.removeEventListener('timeupdate', updateProgress);
    };
  }, [isPlaying]);

  useEffect(() => {
    loadSong(currentSongIndex); // Load the initial song when the component mounts or index changes
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleSongEnd = () => {
      handleNext(); // Move to the next song when the current song ends
      handlePlay(); // Start playing the next song
    };

    if (audio) {
      audio.addEventListener('ended', handleSongEnd);

      return () => {
        audio.removeEventListener('ended', handleSongEnd);
      };
    }
  }, [currentSongIndex]);

  useEffect(() => {
    if (isPlaying) {
      handlePlay(); // Ensure the song starts playing if `isPlaying` is true
    }
  }, [isPlaying, currentSongIndex]);

  return (
    <div className={styles.musicPlayer}>
      <audio ref={audioRef} />

      <div className={styles.visualizerContainer}>
        <canvas ref={canvasRef} className={styles.visualizer} />
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev} aria-label="Previous">
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button onClick={handlePlay} aria-label="Play">
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={handlePause} aria-label="Pause">
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button onClick={handleNext} aria-label="Next">
          <FontAwesomeIcon icon={faStepForward} />
        </button>
      </div>

      <div className={styles.trackInfo}>
        <span>{songs[currentSongIndex].name}</span>
      </div>

      <div className={styles.progressContainer} onClick={handleProgressClick}>
        <div
          className={styles.progressBar}
          ref={progressBarRef}
        />
      </div>

      <ul className={styles.songList}>
        {songs.map((song, index) => (
          <li
            key={index}
            className={`${styles.songItem} ${index === currentSongIndex ? styles.active : ''}`}
            onClick={() => {
              setCurrentSongIndex(index);
              loadSong(index)import React, { useRef, useState, useEffect } from 'react';
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
                        if (canvas && canvasCtx) {
                          canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
                          analyser?.getByteFrequencyData(dataArray as Uint8Array);
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
              ;
              handlePlay();
            }}
          >
            <span className={styles.trackNumber}>{index + 1}.</span> {song.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicPlayer;
