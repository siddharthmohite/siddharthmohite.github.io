import React, { useEffect, useState } from "react";
import "../Styles/Folder.scss";

export default function Folder({filename}){
    const [FileClick,setFileClick ] = useState(false);

    const handleFileClick = () =>{
        console.log("handleFileClick Clicked");
        console.log()
        setFileClick(!FileClick);
    }

    useEffect(()=>{

        console.log("File Click: ",FileClick)
    },[FileClick]);


    return(
        <div className="folder-image-container">
            <img 
            onClick={handleFileClick}
            className={`folder-image ${FileClick ? "active" : ""}`} src="/folder.png"></img>
            <span
             className={`folder-name-text ${FileClick ? "active" : ""}`}>{filename}</span>
        </div>
    )
}