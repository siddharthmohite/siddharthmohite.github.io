import type { MetaFunction } from "@remix-run/node";
import { useRef, useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Sid's" },
    { name: "description", content: "Embedded video in Remix portfolio" },
  ];
};

export default function Index() {

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop={true}
      >
      <source src="/22sec.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}
