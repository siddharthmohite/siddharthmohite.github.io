import WifiIcon from "../icons/WifiIcon"
import ChevronRight from "../icons/ChevronRight"
import BluetoothIcon from "../icons/BluetoothIcon"
import AirDropIcon from "../icons/AirDropIcon"
import FocusIcon from "../icons/FocusIcon"
import StageManagerIcon from "../icons/StageManagerIcon"
import FullScreenIcon from "../icons/FullScreenIcon"
import { useState } from "react"
export default function ControlCenter(){

const connectivity =[
    {id: 1, Icon1: <WifiIcon fill="rgba(255,255,255,1)" height="20px" width="20px" />, textbig: "Wi-Fi",textsmall: "Sid" },
    {id:2 ,Icon1: <BluetoothIcon />, textbig: "Bluetooth",textsmall: "On" },
    {id:3, Icon1: <AirDropIcon />, textbig: "Airdrop",textsmall: "Contacts Only" },
]
const [selectedItems, setSelectedItems] = useState({});


const handleSelected = (id) =>{
    setSelectedItems((prevState) => ({
        ...prevState,
        [id]: !prevState[id], // Toggle selected state for each item independently
    }));
}


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



        </div>
    )
}