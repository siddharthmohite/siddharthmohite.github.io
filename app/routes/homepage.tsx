import { createContext, useEffect, useRef, useState ,useContext } from "react";
import sdk from "@stackblitz/sdk"
import { useLocation } from "@remix-run/react";
import "/app/routes/styles/homepage.scss"
import Folder from './components/Folder'
import Finder from './components/Finder'
import AppleLogoMenu from './components/AppleLogoMenu'
import BatteryMenu from './components/BatteryMenu'
import ControlCenter from './components/ControlCenter'
import SendAMessage from './components/SendAMessage'
import Calculator from './components/Calculator'
import Blog from './components/Blog'
import Terminal from './components/Terminal'
import SpotLightSearch from './components/SpotLightSearch'
import AppleLogoIcon from './icons/AppleLogoIcon'
import BatteryIcon from './icons/BatteryIcon'
import SearchIcon from './icons/SearchIcon'
import WifiIcon from './icons/WifiIcon'
import ControlCenterIcon from  './icons/ControlCenterIcon'
import React from "react";
import { FullScreenProvider } from "./components/FullScreenContext";
import { AudioPlayerProvider } from './components/AudioPlayerContext';

export default function homepage(){
    const location = useLocation();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [selectedId, setSelectedId] = useState<number | null>(1);
    const [selectedFolderId, setSelectedFolderId] = useState<number | null>(1);
    const frameWrapperRef = useRef<HTMLDivElement>(null);
    const folderWrapperRef = useRef<HTMLDivElement>(null); 
    const [isDraggingFrame, setIsDraggingFrame] = useState(false);
    const [isDraggingFolder, setIsDraggingFolder] =useState(false);
    const [offSetFolder, setOffSetFolder] = useState({x : 0, y : 0});
    const [offSetFrame, setOffSetFrame] = useState({ x: 0, y: 0 });
    const [isExpanded, setIsExpanded] = useState(false);
    const [dayState, setDayState] = useState("");
    const [monthState, setMonthState] = useState("");
    const [dateState, setDateState] = useState(0);
    const [currentTimeState, setCurrentTimeState] = useState("");
    const [appleButtonClicked,setAppleButtonClicked] = useState(false);
    const [batteryButtonClicked, setBatteryButtonClicked] = useState(false);
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);
    const [controlCenterButtonClicked, setControlCenterButtonClicked] = useState(false);


    const images = [
        { id: 1, src: "/finder.webp", name:"Finder" },
        { id: 2, src: "/mail.webp",name:"Contact Me" },
        { id: 3, src: "/news.webp" ,name:"Blog"},
        { id: 4, src: "/terminal.webp" ,name:"Terminal"},
        { id: 5, src: "/chrome.webp",name:"Google Chrome" },
        { id: 6, src: "/calculator.webp" ,name:"Calculator"},
        { id: 7, src: "/vscode.webp",name:"Visual Studio Code"},
        { id: 8, src: "/trash.webp",name:"Trash"}
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

    const handleMenuItemClick = (menuItem: string) => {
      if (menuItem === "About Me") {
        setSelectedId(1); // 1 opens Finder as per your existing logic
        setSelectedFolderId(1); // Optional: ensure the correct folder is shown
        setAppleButtonClicked(false); // Optionally close the Apple menu after selection
      }
      else if (menuItem === "Certificates") {
        setSelectedId(1); // 1 opens Finder as per your existing logic
        setSelectedFolderId(4); // Optional: ensure the correct folder is shown
        setAppleButtonClicked(false); // Optionally close the Apple menu after selection
      }
      else if (menuItem === "View Work Experience") {
        setSelectedId(1); // 1 opens Finder as per your existing logic
        setSelectedFolderId(2); // Optional: ensure the correct folder is shown
        setAppleButtonClicked(false); // Optionally close the Apple menu after selection
      }
      else if (menuItem === "View Projects") {
        setSelectedId(1); // 1 opens Finder as per your existing logic
        setSelectedFolderId(3); // Optional: ensure the correct folder is shown
        setAppleButtonClicked(false); // Optionally close the Apple menu after selection
      }

    };

    const handleAppleButtonClick = () =>{

      setAppleButtonClicked(!appleButtonClicked);
    };
    
    const handleBatteryButtonClick = () =>{

      setBatteryButtonClicked(!batteryButtonClicked);
    }
    const handleSearchButtonClick = () =>{
      setSearchButtonClicked(!searchButtonClicked);
      console.log("search button clicked", searchButtonClicked)
    }

    const handleControlButtonClick = () =>{

      setControlCenterButtonClicked(!controlCenterButtonClicked);
      console.log("control button clicked", controlCenterButtonClicked)
    } 

    const handleImageClick = (id: number) => {
        setSelectedId(id);
        const element = document.querySelector(
          `.overlay-downbar__icons-container[data-id="${id}"]`
        );
        if (element) {
          element.classList.add("animate");
          setTimeout(() => {
            element.classList.remove("animate");
          }, 800);
        }
      };
    
    const handlemaximize = () =>{
      setIsExpanded(!isExpanded);
    };

    const handleClose = () =>{
      setSelectedId(null);
      setSelectedFolderId(null);
    }

    useEffect(() => {
        const { timestamp } = location.state || {};
        if (videoRef.current && timestamp !== undefined) {
          videoRef.current.currentTime = timestamp; 
          videoRef.current.pause(); 
        }
      }, [location]);
    
  const handleMouseDownFrame = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameWrapperRef.current) return;

    setIsDraggingFrame(true);
    const rect = frameWrapperRef.current.getBoundingClientRect();
    setOffSetFrame({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    document.body.style.userSelect = "none";
  };

  const handleDoubleClick = (folderId: number) => {
    setSelectedFolderId(folderId);
    setSelectedId(1);
  };
  const handleMouseDownFolder = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!folderWrapperRef.current) return;

    setIsDraggingFolder(true);
    const rect = folderWrapperRef.current.getBoundingClientRect();
    setOffSetFolder({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    document.body.style.userSelect = "none";
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
  document.body.style.userSelect = ""; 
};

const handleMouseUpFolder = () => {
  setIsDraggingFolder(false);
  document.body.style.userSelect = "";
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
      <AudioPlayerProvider>
      <FullScreenProvider>  
    <div className="homepage-container">
        <img
            className="background-image"
            src="/wallpaper.webp"
        />
        {appleButtonClicked &&
          <div className="Menu-container">
             <AppleLogoMenu onMenuItemClick={handleMenuItemClick} />
          </div>
        }
        { batteryButtonClicked &&

          <div className="battery-container-1">
            <BatteryMenu />
          </div>
        }
        {
          searchButtonClicked &&
            <SpotLightSearch />
        }
        {controlCenterButtonClicked &&
           <div className="controlcenter-container">
              <ControlCenter />
          </div>
        }
        { selectedId == 1 &&
          <Finder onClose={handleClose} folderId={selectedFolderId || 1}/>
        }
        {selectedId == 2 &&
        <div className="contact-me-container">
          <SendAMessage onClose={handleClose} />
        </div>  
        }
        {
          selectedId == 6 &&
          <Calculator />
        }
        {
          selectedId == 3 &&
          <Blog onClose={handleClose}/>
        }
         {
          selectedId == 4 &&
          <Terminal onClose={handleClose}/>
        }
         {
          selectedId == 5 &&
            <div></div>
        }
        <div
        ref={folderWrapperRef}
        onDoubleClick={() => handleDoubleClick(3)}
        className="folder-wrapper"
        onMouseDown={handleMouseDownFolder}
        >
          <Folder filename="Projects"/>
        </div>
        <div
        ref={folderWrapperRef}
        onDoubleClick={() => handleDoubleClick(2)}
        className="folder-wrapper-exp"
        onMouseDown={handleMouseDownFolder}
        >
          <Folder filename="Experience"/>
        </div>
        <div
        onDoubleClick={() => handleDoubleClick(4)}
        ref={folderWrapperRef}
        className="folder-wrapper-certifications"
        onMouseDown={handleMouseDownFolder}
        >
          <Folder filename="Certifications"/>
        </div>
        <div
        ref={folderWrapperRef}
        onDoubleClick={() => handleDoubleClick(1)}
        className="folder-wrapper-aboutme"
        onMouseDown={handleMouseDownFolder}
        >
          <Folder filename="About Me"/>
        </div>
        <div 
        className={`frame-wrapper ${selectedId === 7 ? "visible" : "hidden"}`}
        ref={frameWrapperRef}
        style={{
          position: "absolute",
          top: isExpanded ? "0": "60px",
          left:isExpanded ? "0": "100px", 
          width: isExpanded ? "100%": "60%",
          height: isExpanded ? "100%": "650px",
          maxWidth: isExpanded ? "100vw" : "",
          maxHeight: isExpanded ? "100vh" : "",
          zIndex: 10,
          backgroundColor: "rgba(50, 50, 51, 0.95)",
          paddingTop: "10px",
          cursor: "grab", 
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
            <div 
            onClick={handleAppleButtonClick}
            className={`overlay-topbar__container ${appleButtonClicked ? 'selected' : ''}`}>
                    <AppleLogoIcon/>
            </div>
            <div className="overlay-topbar__container-right">
              <div 
              onClick={handleBatteryButtonClick}
              className="overlay-topbar__battery">
                <BatteryIcon />
              </div>
              <div className="overlay-topbar__wifi">
                <WifiIcon  fill="rgba(0,0,0,1)" height="20px" width="20px"/>
              </div>
              <div
              onClick={handleSearchButtonClick} 
              className="overlay-topbar__search">
                <SearchIcon dimension="18px" />
              </div>
              <div 
              onClick={handleControlButtonClick}
              className="overlay-topbar__control-center">
                <ControlCenterIcon/>
              </div>
              <div 
              className="overlay-topbar__siri">
                <img className="overlay-topbar__siri-img" src="/Siri.webp"/>
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
        {images.map((image, index) => (
          <React.Fragment key={image.id}>
            {index === images.length - 1 && (
            <div className="overlay-downbar__divider"></div>
        )}  
            <div 
            key= {image.id}
            data-id ={image.id}
            onClick={() => handleImageClick(image.id)}
            className="overlay-downbar__icons-container">
              <div className="name">
                    {image.name} 
                </div> 
                <div className="overlay-downbar__image-container">
                    <img 
                    src={image.src}
                    alt={`Image ${image.id}`}
                    data-id={image.id} 
                    className="overlay-downbar__image"></img>
                    {selectedId == image.id &&(
                        <div className="overlay-downbar__image-notifier"/>
                    )}
                </div>
            </div>
          </React.Fragment>
        ))}
        </div>
    </div>
    </FullScreenProvider>
    </AudioPlayerProvider>
    );
}