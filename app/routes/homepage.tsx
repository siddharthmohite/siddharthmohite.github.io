import "/app/routes/styles/homepage.scss"
import "app/routes/styles/Folder.scss"
import "app/routes/styles/Finder.scss"
import AppleLogoIcon from './icons/AppleLogoIcon'
import { useEffect, useRef, useState } from "react";
import sdk from "@stackblitz/sdk"
import { useLocation } from "@remix-run/react";
import Folder from './components/Folder'
import Finder from './components/Finder'
import BatteryIcon from './icons/BatteryIcon'
import SearchIcon from './icons/SearchIcon'
import WifiIcon from './icons/WifiIcon'


export default function homepage(){
    const location = useLocation();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const frameWrapperRef = useRef<HTMLDivElement>(null); // Ref for draggable element
    const folderWrapperRef = useRef<HTMLDivElement>(null); // Ref for draggable element
    const [isDraggingFrame, setIsDraggingFrame] = useState(false);
    const [isDraggingFolder, setIsDraggingFolder] =useState(false);
    const [offSetFolder, setOffSetFolder] = useState({x : 0, y : 0});
    const [offSetFrame, setOffSetFrame] = useState({ x: 0, y: 0 });
    const [isExpanded, setIsExpanded] = useState(false);
    const [dayState, setDayState] = useState("");
    const [monthState, setMonthState] = useState("");
    const [dateState, setDateState] = useState(0);
    const [currentTimeState, setCurrentTimeState] = useState("");



    const images = [
        { id: 1, src: "/finder.png" },
        { id: 2, src: "/mail.png" },
        { id: 3, src: "/news.png" },
        { id: 4, src: "/terminal.png" },
        { id: 5, src: "/chrome.png" },
        { id: 6, src: "/calculator.png" },
        { id: 7, src: "/vscode.png"},
        { id: 8, src: "/trash.png"}
      ];
    
    const updateTime = () =>
        {
          const now = new Date();
          const day = now.toLocaleString("en-US", { weekday: "long" }).slice(0,3);
          const month = now.toLocaleString("en-US", { month: "long" }).slice(0,3);
          const date = now.getDate();
          const current_time = `${now.getHours() % 12 || 12}:${now.getMinutes().toString().padStart(2, "0")} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
      
          setDayState(day);
          setMonthState(month);
          setDateState(date);
          setCurrentTimeState(current_time);
        }  

    const handleImageClick = (id: number) => {
        setSelectedId(id); // Update the selected ID when an image is clicked

        // Find the element and add the animate class
        const element = document.querySelector(
          `.overlay-downbar__icons-container[data-id="${id}"]`
        );
        if (element) {
          element.classList.add("animate");
          setTimeout(() => {
            element.classList.remove("animate"); // Remove the class after animation ends
          }, 800); // Match animation duration (0.8s)
        }
      };
    
    const handlemaximize = () =>{
      setIsExpanded(!isExpanded);
    };

    const handleClose = () =>{
      setSelectedId(null);
    }

    useEffect(() => {
        const { timestamp } = location.state || {}; // Get the timestamp from state
        if (videoRef.current && timestamp !== undefined) {
          videoRef.current.currentTime = timestamp; // Set the video time
          videoRef.current.pause(); // Pause the video at the given timestamp
        }
      }, [location]);
    
      // Drag Handlers for the Window
  const handleMouseDownFrame = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameWrapperRef.current) return;

    setIsDraggingFrame(true);
    const rect = frameWrapperRef.current.getBoundingClientRect();
    setOffSetFrame({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });


    document.body.style.userSelect = "none"; // Prevent text selection during drag
  };

  const handleMouseDownFolder = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!folderWrapperRef.current) return;

    setIsDraggingFolder(true);
    const rect = folderWrapperRef.current.getBoundingClientRect();
    setOffSetFolder({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    document.body.style.userSelect = "none"; // Prevent text selection during drag
  };

  

  const handleMouseMoveFrame = (e: MouseEvent) => {
    if (!frameWrapperRef.current) return;
  
    const newX = e.clientX - offSetFrame.x;
    const newY = e.clientY - offSetFrame.y;
    frameWrapperRef.current.style.left = `${newX}px`;
    frameWrapperRef.current.style.top = `${newY}px`;
  };
  
  const handleMouseMoveFolder = (e: MouseEvent) => {
    if (!folderWrapperRef.current) return;
  
    const newX = e.clientX - offSetFolder.x;
    const newY = e.clientY - offSetFolder.y;
    folderWrapperRef.current.style.left = `${newX}px`;
    folderWrapperRef.current.style.top = `${newY}px`;
  };

const handleMouseUpFrame = () => {
  setIsDraggingFrame(false);
  document.body.style.userSelect = ""; // Re-enable text selection
};

const handleMouseUpFolder = () => {
  setIsDraggingFolder(false);
  document.body.style.userSelect = ""; // Re-enable text selection
};

useEffect( () =>
  {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () =>
    {
      clearInterval(interval)
    };
  },[]);

useEffect(() => {
    if (isDraggingFrame) {
      document.addEventListener("mousemove", handleMouseMoveFrame);
      document.addEventListener("mouseup", handleMouseUpFrame);
    } else {
      document.removeEventListener("mousemove", handleMouseMoveFrame);
      document.removeEventListener("mouseup", handleMouseUpFrame);
    }
  
    if (isDraggingFolder) {
      document.addEventListener("mousemove", handleMouseMoveFolder);
      document.addEventListener("mouseup", handleMouseUpFolder);
    } else {
      document.removeEventListener("mousemove", handleMouseMoveFolder);
      document.removeEventListener("mouseup", handleMouseUpFolder);
    }
  
    return () => {
      document.removeEventListener("mousemove", handleMouseMoveFrame);
      document.removeEventListener("mouseup", handleMouseUpFrame);
      document.removeEventListener("mousemove", handleMouseMoveFolder);
      document.removeEventListener("mouseup", handleMouseUpFolder);
    };
  }, [isDraggingFrame, isDraggingFolder]);
  

      useEffect(() => {
        
        sdk.embedProject(
            'overlay-topbar__frame',
            {
              title: 'Node Starter',
              description: 'A basic Node.js project',
              template: 'node',
              files: {
                'index.js': `console.log('Hello World!');`,
                'package.json': `{
                "name": "my-project",
                "scripts": { "hello": "node index.js", "start": "serve node_modules" },
                "dependencies": { "serve": "^14.0.0" },
                "stackblitz": { "installDependencies": true, "startCommand": "npm start" },
              }`,
              },
            },
            {
              clickToLoad: false,
              openFile: 'index.js',
              terminalHeight: 30,
              view: "editor",
              height: '100%',
              width: '100%',
            },
          );
      }, [selectedId]);
    

    return(
    <div className="homepage-container">
        <video
            ref={videoRef}
            className="background-video"
            src="/22sec.mp4"
        />
        {( selectedId == 1 &&
          <Finder/>
        )}
        
        <div
        ref={folderWrapperRef}
        className="folder-wrapper"
        onMouseDown={handleMouseDownFolder}
        >
          <Folder/>
        </div>
        <div 
        className={`frame-wrapper ${selectedId === 7 ? "visible" : "hidden"}`}
        ref={frameWrapperRef}
        style={{
          position: "absolute",
          top: isExpanded ? "0": "60px", // Initial top position
          left:isExpanded ? "0": "100px", // Initial left position
          width: isExpanded ? "100%": "60%",
          height: isExpanded ? "100%": "650px",
          maxWidth: isExpanded ? "100vw" : "",
          maxHeight: isExpanded ? "100vh" : "",
          zIndex: 10,
          backgroundColor: "rgba(50, 50, 51, 0.95)", // Background color
          paddingTop: "10px",
          cursor: "grab", // Show grab cursor
          borderRadius: "5px",
        }}
        onMouseDown={handleMouseDownFrame}
        >
          <div className="frame-wrapper__buttons">
            <button
            onClick={handleClose}
            className="frame-wrapper__button-close">
            
            </button>
            <button className="frame-wrapper__button-minimize">
              
            </button>
            <button
             onClick={handlemaximize}
             className="frame-wrapper__button-maximize">
              
            </button>
          </div>
          <iframe
            id="overlay-topbar__frame"
            />
        </div>
        <div className="overlay-topbar">
            <div className="overlay-topbar__container">
                    <AppleLogoIcon/>
            </div>
            <div className="overlay-topbar__container-right">
              <div className="overlay-topbar__battery">
              <BatteryIcon />
              </div>
              <div className="overlay-topbar__wifi">
              <WifiIcon />
              </div>
              <div className="overlay-topbar__search">
              <SearchIcon />
              </div>
              <div className="overlay-topbar__siri">
                <img className="overlay-topbar__siri-img" src="/Siri.png"/>
              </div>
              <span className="overlay-topbar__day-text">
                {dayState}  {monthState} {dateState}
              </span>
              <span className="overlay-topbar__time-text">
              {currentTimeState}
              </span>
            </div>
        </div>
        <div className="overlay-downbar">
        {images.map((image) => (
            <div 
            key= {image.id}
            data-id ={image.id}
            onClick={() => handleImageClick(image.id)}
            className="overlay-downbar__icons-container">
                <div className="overlay-downbar__image-container">
                    <img 
                    src={image.src}
                    alt={`Image ${image.id}`} // Accessible alt text
                    data-id={image.id} //
                    className="overlay-downbar__image"></img>
                    {selectedId == image.id &&(
                        <div className="overlay-downbar__image-notifier">

                        </div>
                    )}
                </div>
            </div>
        ))}
        </div>
    </div>
    );
}