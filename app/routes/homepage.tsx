import "/app/routes/styles/homepage.scss"
import { useEffect, useRef } from "react";
import { useLocation } from "@remix-run/react";


export default function homepage(){
    const location = useLocation();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const { timestamp } = location.state || {}; // Get the timestamp from state
        if (videoRef.current && timestamp !== undefined) {
          videoRef.current.currentTime = timestamp; // Set the video time
          videoRef.current.pause(); // Pause the video at the given timestamp
        }
      }, [location]);

      

    return(
    <div className="homepage-container">
        <video
            ref={videoRef}
            className="background-video"
            src="/22sec.mp4"
        />
        <div className="overlay-topbar">

        </div>
        <div className="overlay-downbar">
            
        </div>

    </div>
    );
}