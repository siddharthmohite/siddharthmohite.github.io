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
import { useState } from "react"
import React from "react"
export default function ControlCenter(){

const connectivity =[
    {id: 1, Icon1: <WifiIcon fill="rgba(255,255,255,1)" height="20px" width="20px" />, textbig: "Wi-Fi",textsmall: "Sid" },
    {id:2 ,Icon1: <BluetoothIcon />, textbig: "Bluetooth",textsmall: "On" },
    {id:3, Icon1: <AirDropIcon />, textbig: "Airdrop",textsmall: "Contacts Only" },
]
const [selectedItems, setSelectedItems] = useState({});
const [brightness, setBrightness] = useState(50);


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
                            <div className="full-screen-mode">
                                <FullScreenIcon />
                                <span className="manager-text">FullScreen</span>
                                <span className="manager-text">Mode</span>
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
                        <div className="audio-image-container">
                            <img className="audio-image" src="/audio.jpg" ></img>
                        </div>
                        <div className="audio-text-container">
                            <span className="audio-desc-text">
                            This helps while coding
                            </span>
                            <span className="audio-desc-text">
                                Lo-FI 
                            </span>
                        </div>
                        <div className="audio-controls">
                            <button className="audio-play">
                                <AudioPlayIcon />
                            </button>
                            <button className="audio-next">
                                <AudioNextIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}