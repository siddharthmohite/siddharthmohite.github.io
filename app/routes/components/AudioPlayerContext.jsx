// AudioPlayerContext.js
import React, { createContext, useState, useRef, useEffect } from 'react';

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  // Define your list of audio tracks.
  const audioList = [
    {
        src: "audio1.webm",
        title: "This is helpful while coding pt.1",
        description: "Lo-Fi लो-फाई (siddharth's playlist)"
    },
    {
        src: "audio2.webm",
        title: "This is helpful while coding pt.2",
        description: "Lo-Fi लो-फाई (siddharth's playlist)"
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  // Whenever the track index changes, update the audio source.
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(audioList[currentTrackIndex].src);
    // Optionally, resume playing if the previous track was playing.
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrackIndex]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Optionally reset to start if needed:
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    // Calculate the next track index and update the state.
    const nextIndex = (currentTrackIndex + 1) % audioList.length;
    setCurrentTrackIndex(nextIndex);
    // The useEffect hook will handle updating the audio source.
  };

  return (
    <AudioPlayerContext.Provider
      value={{ isPlaying, handlePlayPause, handleNext, currentTrackIndex, audioList }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioPlayerContext;
