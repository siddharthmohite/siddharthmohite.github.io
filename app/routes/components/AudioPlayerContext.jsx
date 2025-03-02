import React, { createContext, useState, useRef, useEffect } from 'react';

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
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

  const [volume, setVolume] = useState(80); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(audioList[currentTrackIndex].src);
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
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % audioList.length;
    setCurrentTrackIndex(nextIndex);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100; // Update volume
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{ isPlaying, handlePlayPause, handleNext,  volume,
        handleVolumeChange, currentTrackIndex, audioList }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioPlayerContext;
