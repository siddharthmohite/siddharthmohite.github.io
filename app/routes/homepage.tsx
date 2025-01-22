import "/app/routes/styles/homepage.scss"
import "app/routes/styles/VsCodeEditor.scss"
import AppleLogoIcon from './icons/AppleLogoIcon'
import VsCodeEditor from './components/VsCodeEditor'
import { useEffect, useRef, useState } from "react";
import sdk from "@stackblitz/sdk"
import { useLocation } from "@remix-run/react";


export default function homepage(){
    const location = useLocation();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const frameWrapperRef = useRef<HTMLDivElement>(null); // Ref for draggable element
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isExpanded, setIsExpanded] = useState(false);


    const images = [
        { id: 1, src: "/finder.png" },
        { id: 2, src: "/mail.png" },
        { id: 3, src: "/news.png" },
        { id: 4, src: "/terminal.png" },
        { id: 5, src: "/chrome.png" },
        { id: 6, src: "/calculator.png" },
        { id: 7, src: "/vscode.png"}
      ];

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


    useEffect(() => {
        const { timestamp } = location.state || {}; // Get the timestamp from state
        if (videoRef.current && timestamp !== undefined) {
          videoRef.current.currentTime = timestamp; // Set the video time
          videoRef.current.pause(); // Pause the video at the given timestamp
        }
      }, [location]);
    
      // Drag Handlers for the Window
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameWrapperRef.current) return;

    setIsDragging(true);
    const rect = frameWrapperRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    document.body.style.userSelect = "none"; // Prevent text selection during drag
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !frameWrapperRef.current) return;

    // Calculate the new position
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;

    // Move the element
    frameWrapperRef.current.style.left = `${newX}px`;
    frameWrapperRef.current.style.top = `${newY}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = ""; // Re-enable text selection
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);  

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
        onMouseDown={handleMouseDown}
        >
          <div className="frame-wrapper__buttons">
            <button className="frame-wrapper__button-close">
            
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