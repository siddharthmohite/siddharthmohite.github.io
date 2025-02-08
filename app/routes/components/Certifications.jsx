import { useState, useEffect } from "react";
export default function Certifications(){
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') {
                setCurrentIndex(prev => (prev - 1 + certifications.length) % certifications.length);
            } else if (e.key === 'ArrowRight') {
                setCurrentIndex(prev => (prev + 1) % certifications.length);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);
    const certifications = [
        
        {id:1, name:"PL-900", img:"/microsoftcert.png",number:"C5385F-51FY09",date_issued:"March 16, 2021, 00:00 AM",expiry_date:"No Expiry",display_name:"Microsft Certified: Power Platform Fundamnetals.png",img_type:"PNG image - 678 KB", issued_by:"Microsoft"},
        {id:2, name:"AWS", img:"/awscert.jpg",number:"94N3MQBY2411Q92",date_issued:"January 15, 2024, 00:00 AM",expiry_date:"January 15, 2027, 00:00 AM",display_name:"AWS Certified: Solutions Architect_Associate.jpeg",img_type:"JPEG image - 320 KB", issued_by:"Amazon"},
        {id:3, name:"Master's Degree", img:"/diploma.jpg",number:"2024",date_issued:"May 18, 2024, 00:00 AM",expiry_date:"No Expiry",display_name:"Masters of Science Computer Science.jpeg",img_type:"JPEG image - 320 KB", issued_by:"CSU, Fullerton"},
    ]
    return(
        <>
        <div className="top-bar">
            <span className="title">Certifications</span>
        </div>
        <div className="certification-container">
            <div className="certification-photo-container">
                    <div className="photo-container">
                        <img 
                        className="image-certification" 
                        src={certifications[currentIndex].img} 
                        alt={certifications[currentIndex].name}    
                        ></img>
                    </div>
                    <div className="slider-photo-frame">
                        {certifications.map((certification,index ) => (
                        
                        <div 
                        key={certification.id}
                        className={`photo-holders ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        >
                            <img className="photo-holders-img" src={certification.img}></img>
                        </div>
                        ))}
                    </div>
            </div>
            <div className="right-sidebar">
                <div className="info-container">
                    <div className="info-container-left">
                        <div className="info-container-img-container">
                            <img className="photo-holders-img" src={certifications[currentIndex].img}></img>
                        </div>
                    </div>
                    <div className="info-container-right">
                        <span className="info-container-name-text">
                                {certifications[currentIndex].display_name}
                        </span>
                        <span className="info-container-img-type-text">
                        {certifications[currentIndex].img_type}
                        </span>
                    </div>
                </div>
                <div className="certification-info-container">
                    <span className="certifications-info-text">Information</span>
                    <div className="certification-name-holder">
                        <span className="certification-name">Name</span>
                        <span className="certification-name-answers">{certifications[currentIndex].name}</span>
                    </div>
                    <div className="certification-divider"></div>
                    <div className="certification-number-holder">
                        <span className="certification-number">Number</span>
                        <span className="certification-number-answers">{certifications[currentIndex].number}</span>
                    </div>
                    <div className="certification-divider"></div>
                    <div className="certification-date-issued-holder">
                        <span className="certification-date-issued">Date issued</span>
                        <span className="certification-date-issued-answers">{certifications[currentIndex].date_issued}</span>
                    </div>
                    <div className="certification-divider"></div>
                    <div className="certification-expiry-date-holder">
                        <span className="certification-expiry-date">Expiry date</span>
                        <span className="certification-expiry-date-answers">{certifications[currentIndex].expiry_date}</span>
                    </div>
                    <div className="certification-divider"></div>
                    <div className="certification-issued-by-holder">
                        <span className="certification-issued-by">Issued by</span>
                        <span className="certification-issued-by-answers">{certifications[currentIndex].issued_by}</span>
                    </div>
                </div>
            </div>           
        </div>
        </>
    )
}