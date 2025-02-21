import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@remix-run/react";
import "/app/routes/styles/index.scss";
import CircleRightIcon from './icons/CircleRightIcon'
import QuestionMarkIcon from './icons/QuestionMarkIcon'
export const meta: MetaFunction = () => {
  return [
    { title: "Sid's" },
    { name: "description", content: "Embedded video in Remix portfolio" },
  ];
};

export default function Index()
{
  const inputRef = useRef<HTMLInputElement>(null);
  const [dayState, setDayState] = useState("");
  const [monthState, setMonthState] = useState("");
  const [dateState, setDateState] = useState(0);
  const [currentTimeState, setCurrentTimeState] = useState("");
  const [shake, setShake] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook
  const [isQuestionMClicked, setIsQuestionMClicked] = useState(false);
  const [isQuestionHovered, setIsQuestionHovered] = useState(false);

  useEffect(() => {
    const handleEvent = (event: KeyboardEvent | MouseEvent) => {
      if ("key" in event && event.key === "Enter") {
        navigate("/homepage");
      }
      else if (event instanceof MouseEvent) {
        navigate("/homepage");
      }
    };
    document.addEventListener("keydown", handleEvent);
    document.addEventListener("click", handleEvent);

    return () => {
      document.removeEventListener("keydown", handleEvent);
      document.removeEventListener("click", handleEvent);
    };
  }, [navigate]);


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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>{
    if(event.key === "Enter" ){
       {
          navigate("/homepage", {
          });
        }
    }
  }

  const handleQuestionMarkClick = () =>{

    setIsQuestionMClicked(!isQuestionMClicked);
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

  return (
  <div className="full-screen-container">
      <img
        className="background-image"
        src="/wallpaper.webp">
      </img>
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
              {isQuestionMClicked ? (
                <div className="overlay-lowerpart__hint">
                  <span className="overlay-lowerpart__hint-text">Password Hint</span>
                  <span className="overlay-lowerpart__pass-text">Hireme</span>
                </div>
              ) : (
                    <img className="overlay-lowerpart__img"src="/basketball2.webp"
                    />
              )}
            <p className="overlay-lowerpart__text-username">sid</p>
                <input
                  ref = {inputRef}
                  value="HireMe"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`overlay-lowerpart__input ${shake ? "shake" : ""}`}
                  type="password"
                />
                  <button 
                  onClick={handleQuestionMarkClick}
                  onMouseEnter={() => {
                    setIsQuestionHovered(true); 
                  }}
                  onMouseLeave={() => {
                    setIsQuestionHovered(false);
                  }}
                  className="question-mark">
                    <QuestionMarkIcon fill={isQuestionHovered ? "white" : "rgba(245,245,247,0.7)"} />
                  </button>
            <p className="overlay-lowerpart__text-info">Touch ID or Enter Password</p>
          </div>
      </div>
      </div>
  </div>
  );
}
