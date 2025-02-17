import WifiIcon from "../icons/WifiIcon"
import ChevronRight from "../icons/ChevronRight"
import BluetoothIcon from "../icons/BluetoothIcon"
import AirDropIcon from "../icons/AirDropIcon"
import FocusIcon from "../icons/FocusIcon"
import StageManagerIcon from "../icons/StageManagerIcon"
import FullScreenIcon from "../icons/FullScreenIcon"
import BrightnessIcon from "../icons/BrightnessIcon"
import VolumeIcon from "../icons/VolumeIcon"
import AudioPlayIcon from "../icons/AudioPlayIcon"
import AudioNextIcon from "../icons/AudioNextIcon"
import AudioPauseIcon from "../icons/AudioPauseIcon"
import { FullScreenContext } from "./FullScreenContext";
import { useState, useRef, useContext} from "react"
import React from "react"
export default function ControlCenter(){

const connectivity =[
    {id: 1, Icon1: <WifiIcon fill="rgba(255,255,255,1)" height="20px" width="20px" />, textbig: "Wi-Fi",textsmall: "Sid" },
    {id:2 ,Icon1: <BluetoothIcon />, textbig: "Bluetooth",textsmall: "On" },
    {id:3, Icon1: <AirDropIcon />, textbig: "Airdrop",textsmall: "Contacts Only" },
]

const audioList = [
    {
        src: "audio1.mp3",
        title: "This is helpful while coding pt.1",
        description: "Lo-Fi लो-फाई (siddharth's playlist)"
    },
    {
        src: "audio2.mp3",
        title: "This is helpful while coding pt.2",
        description: "Lo-Fi लो-फाई (siddharth's playlist)"
    }
];
const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef(null);
const [selectedItems, setSelectedItems] = useState({});
const [brightness, setBrightness] = useState(50);
const {fullScreenSelected, toggleFullScreen } = useContext(FullScreenContext);


const handlePlayPause = () => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.currentTime = 0; 
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
};

const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioList.length);
    setIsPlaying(false); 
};

const handleLofiWebsite = () =>{
    window.open("https://lofigirl.com/releases/sleeping-soul/", "");
}
const handleSelected = (id) =>{
    setSelectedItems((prevState) => ({
        ...prevState,
        [id]: !prevState[id], // Toggle selected state for each item independently
    }));
}

const handleChange = (event) => {
      const value = Number(event.target.value);
      setBrightness(value);
    };
 
    return(
        <div className="control-menu-container">
            <div className="upper-controls">
                <div className="left-controls">
                    <div className="connectivity-container">
                        {connectivity.map((con) => (
                            <div
                            onClick={() => handleSelected(con.id)}
                            className="connectivity-holder">
                                <div 
                                key={con.id}
                                className={`circle-wrapper ${selectedItems[con.id] ? "selected" : ""}` }>
                                    {con.Icon1}
                                </div>
                                <div className="connectivity-text-wrapper">
                                    <span className="connectivity-text-big">
                                            {con.textbig}
                                    </span>
                                    <span className="connectivity-text-small">
                                    {selectedItems[con.id] ? "Off" : con.textsmall}
                                    </span>
                                </div>
                                <div className="chevron-right">
                                    <ChevronRight />
                                </div>
                            </div>
                        ))}    
                    </div>
                </div>
                <div className="right-controls">
                        <div className="focus">
                            <div className="circle-wrapper-right">
                                <FocusIcon />
                            </div>
                            <span className="focus-text">Focus</span>
                        </div>
                        <div className="manager-container">
                            <div className="stage-manager">
                                <StageManagerIcon />
                                <span className="manager-text">Stage</span>
                                <span className="manager-text">Manager</span>
                            </div>
                            <div 
                            onClick={toggleFullScreen}
                            className={`full-screen-mode ${fullScreenSelected ? "selected" : ""}`}>
                                <FullScreenIcon fill={fullScreenSelected ? "rgba(54,121,247,1)" : "rgba(0,0,0,1)"} />
                                <span className={`manager-text ${fullScreenSelected ? "selected" : ""}`}>FullScreen</span>
                                <span className={`manager-text ${fullScreenSelected ? "selected" : ""}`}>Mode</span>
                            </div>
                        </div>
                </div>
            </div>
            <div className="lower-controls">
                <div className="brightness-container">
                    <span className="display-text">Display</span>
                    <div className="slider-container">
                        <div className="slider-wrapper">
                            <div
                            className="slider-icon"
                            >
                            <BrightnessIcon  className="icon"/>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={brightness}
                                onChange={handleChange}
                                className="slider"
                                style={{
                                    background: `linear-gradient(to right, white ${brightness}%, #d1d1d1 ${brightness}%)`,
                                }}
                            />
                            <div
                                className="slider-thumb"
                                style={{ transform: `translateX(${brightness * 2.3}px)` }}
                            ></div>
                        </div>
                </div>    
                </div>
                <div className="volume-container">
                <span className="sound-text">Sound</span>
                    <div className="slider-container">
                        <div className="slider-wrapper">
                            <div
                            className="slider-icon"
                            >
                            <VolumeIcon  className="icon"/>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={brightness}
                                onChange={handleChange}
                                className="slider"
                                style={{
                                    background: `linear-gradient(to right, white ${brightness}%, #d1d1d1 ${brightness}%)`,
                                }}
                            />
                            <div
                                className="slider-thumb"
                                style={{ transform: `translateX(${brightness * 2.3}px)` }}
                            ></div>
                        </div>
                </div>
                </div>
                <div className="audio-player">
                    <div className="player-container">
                        <div 
                        onClick={handleLofiWebsite}
                        className="audio-image-container">
                            <img className="audio-image" src="/audio.jpg" ></img>
                        </div>
                        <audio  
                        ref={audioRef} 
                        src={audioList[currentTrackIndex].src} 
                        onEnded={() => setIsPlaying(false)}
                        />
                        <div 
                        onClick={handleLofiWebsite}
                        className="audio-text-container">
                            <span className="audio-desc-text-big">
                            {audioList[currentTrackIndex].title}
                            </span>
                            <span className="audio-desc-text-small">
                            {audioList[currentTrackIndex].description}
                            </span>
                        </div>
                        <div className="audio-controls">
                            <button onClick={handlePlayPause} className="audio-play">
                            {isPlaying ? <AudioPauseIcon /> : <AudioPlayIcon />}
                            </button>
                            <button onClick={handleNext} className="audio-next">
                                <AudioNextIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}