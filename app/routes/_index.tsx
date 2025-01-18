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
  const [monthState, setMonthState] = useState("");
  const [dateState, setDateState] = useState(0);
  const [currentTimeState, setCurrentTimeState] = useState("");
  const [isFirstClick,  setIsFirstClick] = useState(false);

  //Add event listeners to listen for mouse and keyboard events
  useEffect(() => {

    const handleMouseClick = (event:MouseEvent) =>{
      setIsFirstClick(true);
    }

    const handleEnterClick = (event: KeyboardEvent) => {
      if(event.key == "Enter" && isFirstClick == false){
        setIsFirstClick(true);
      }
    }

  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleEnterClick);

  return () => {
    document.removeEventListener("click", handleMouseClick);
    document.removeEventListener("keydown", handleEnterClick);
  };
}, []);


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
      <div className="content-wrapper-upperpart">
        <div className="overlay-upperpart">
          <div className="overlay-upperpart__textwrapper">
              <h1 className="overlay-upperpart__heading">{dayState}, {monthState} {dateState}</h1>
              <p className="overlay-upperpart__time">{currentTimeState}</p>
          </div>
        </div>
      </div>
      <div className="content-wrapper-lowerpart">
      <div className="overlay-lowerpart">
          <div className="overlay-lowerpart__imgcontainer">
            <img className="overlay-lowerpart__img"src="/basketball.png"
            />
            <p className="overlay-lowerpart__text-username">sid</p>
            <input className={`overlay-lowerpart__input ${isFirstClick ? "visible" : "hidden"}`} type="password" placeholder="Enter a password">
            </input>
            <p className="overlay-lowerpart__text-info">Touch ID or Enter Password</p>
          </div>
      </div>
      </div>
  </div>
  
  );
}
