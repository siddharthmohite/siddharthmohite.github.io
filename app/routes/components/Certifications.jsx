import { useState } from "react";
export default function Certifications(){
    const [selectedImg, setSelectedImg] =useState(1);

    const certifications = [
        
        {id:1, name:"Microsoft", img:"/microsoftcert.png"},
        {id:2, name:"AWS", img:"/awscert.jpg"},
        {id:3, name:"Degree", img:"/diploma.jpg"},
    ]
    return(
        <>
        <div className="top-bar">
            <span className="title">Certifications</span>
        </div>
        <div className="certification-container">
            <div className="certification-photo-container">
                    <div className="photo-container">
                        <img className="image-certification" src="/microsoftcert.png"></img>
                    </div>
                    <div className="slider-photo-frame">
                        {certifications.map((certification,index ) => (
                        
                        <div 
                        key={certification.id}
                        className="photo-holders">
                            <img className="photo-holders-img" src={certification.img}></img>
                        </div>
                        ))}
                    </div>
            </div>
            <div className="right-sidebar">

            </div>

        </div>
        </>
    )
}