import type { MetaFunction } from "@remix-run/node";
import { useRef, useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio Video" },
    { name: "description", content: "Embedded video in Remix portfolio" },
  ];
};

export default function Index() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false)

  const videoChunks = [
    "/video-chunks/chunks_000.mp4",
    "/video-chunks/chunks_001.mp4",
    "/video-chunks/chunks_002.mp4",
  ]

  const handleVideoEnd = () => {
    setCurrentChunkIndex((prevIndex) => (prevIndex + 1) % videoChunks.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;

      const handleTimeUpdate = () => {
        if (
          videoElement.currentTime >= videoElement.duration - 0.1 &&
          currentChunkIndex < videoChunks.length - 1
        ) {
          setCurrentChunkIndex((prevIndex) => (prevIndex + 1) % videoChunks.length);
        }
      };

      videoElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentChunkIndex]);

  useEffect(() => {
    if (videoRef.current && !isTransitioning) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentChunkIndex, isTransitioning]);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoChunks[currentChunkIndex]}
        onEnded={handleVideoEnd}
        autoPlay
        muted
        loop={false}
      />
    </div>
  );
}
