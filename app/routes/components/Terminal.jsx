import "../styles/Terminal.scss";
import React from "react";
import Folder from "./Folder";
import { useState } from "react";
export default function Terminal({ onClose })  {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleButtonClose = () =>
        {
            onClose();
        };  
    return (
        <div className="terminal-container">
            <div className="terminal-topbar">
                <div className="buttons-container">
                    <button 
                    onClick={handleButtonClose}
                    className="button-close">

                    </button>
                    <button className={`button-min ${isExpanded ? 'active' : ''}`}>
                        
                    </button>
                    <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="button-max">
                        
                    </button>
                </div>
                <div className="folder-terminal-container">
                    <Folder />
                </div>
                <span className="terminal-title">sid-- -zsh--365x374</span>
            </div>
            <div className="terminal-body">
                <span className="terminal-text">
                    Last login Date: Fri Jul 9 15:31:49 on console
                </span>
                <span className="terminal-text">
                   sid@sids--Air ~ %
                   <input className="terminal-input" />
                </span>
            </div>
        </div>
    )
}