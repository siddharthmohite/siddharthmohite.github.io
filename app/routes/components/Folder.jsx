import React, { useEffect, useState } from "react";
import "../styles/Folder.scss";

export default function Folder({filename}){
    const [FileClick,setFileClick ] = useState(false);

    const handleFileClick = () =>{
        setFileClick(!FileClick);
    }

    return(
        <div className="folder-image-container">
            <img 
            onClick={handleFileClick}
            className={`folder-image ${FileClick ? "active" : ""}`} src="/folder.webp"></img>
            <span
             className={`folder-name-text ${FileClick ? "active" : ""}`}>{filename}</span>
        </div>
    )
}