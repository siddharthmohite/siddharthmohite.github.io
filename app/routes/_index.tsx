import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import "/app/routes/styles/index.scss"; // Import the CSS file

export const meta: MetaFunction = () => {
  return [
    { title: "Sid's" },
    { name: "description", content: "Embedded video in Remix portfolio" },
  ];
};

export default function Index()
{
  const [dayState, setDayState] = useState("");
  const [ monthState, setMonthState] = useState("");
  const [dateState, setDateState] = useState(0);
  const [currentTimeState, setCurrentTimeState] = useState("");

  const updateTime = () =>
  {
    const now = new Date();
    const day = now.toLocaleString("en-US", { weekday: "long" });
    const month = now.toLocaleString("en-US", { month: "long" });
    const date = now.getDate();
    const current_time = `${now.getHours() % 12 || 12}:${now.getMinutes().toString().padStart(2, "0")}`;

    setDayState(day);
    setMonthState(month);
    setDateState(date);
    setCurrentTimeState(current_time);
  }

  useEffect( () =>
  {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () =>
    {
      clearInterval(interval)
    };
  },[]);

  
  

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
  <div className="full-screen-container">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        muted
        loop={true}
      >
        <source src="/22sec.mp4" type="video/mp4" />
      </video>
      <div className="overlay-upperpart">
        <div className="overlay-upperpart__textwrapper">
            <h1 className="overlay-upperpart__heading">{dayState}, {monthState} {dateState}</h1>
            <p className="overlay-upperpart__time">{currentTimeState}</p>
        </div>
      </div>
      {/* <div className="overlay_lowerPart-container">

      </div> */}
  </div>
  );
}
