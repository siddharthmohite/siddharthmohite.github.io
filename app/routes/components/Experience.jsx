import { useState } from "react"

export default function Experience(){
    const [selectedId, setSelectedId] =useState(null);

   const experiences= [

    {id: 1, name:"Orange County Superior Court",position: "Software Engineer Intern", skills: ".NET, Python, FastAPI, React ", startdate:"May 31 2024", enddate:"Present", src:"/occourt.jpeg"},
    {id: 2, name:"California State University, Fullerton",position: "Graduate Student Assistant", skills: "Excel, Accounting, Automation ", startdate:"December 2023", enddate:"May 2024",src:"/csuf.png"},
    {id: 3, name:"OneCommunityGlobal",position: "Software Intern", skills: "React, Javascript, Typescript", startdate:"May 2024", enddate:" August 2024",src:"/onecommunityglobal.jpg"},
    {id:4, name:"Accenture",position: "Software Engineer", skills: "PowerPlatform, kafka, SQL, Database Modeling", startdate:"October 2020", enddate:"July 2022",src:"/Accenture.jpeg"},
    {id:5, name:"Tech Mahindra",position: "Software Intern", skills: "Neo4j, Python, Unity, C#", startdate:"November 2019", enddate:"April 2020",src:"/techmahindra.jpeg"},
    {id:6, name:"BSNL", position: "Software Intern",skills: "TCP/IP, DHCP, DNS,Netstat, Wireshark ", startdate:"November 2019", enddate:"April 2020",src:"/bsnl.png"},
   ]

    return(
        <>
        <div className="top-bar">
            <span className="title">Experience</span>
        </div>
        <div className="info-bar">
            <span className="info-bar__name">Name</span>
            <div className="info-bar__divider-vertical"></div>
            <span className="info-bar__skills">Skills</span>
            <div className="info-bar__divider-vertical"></div>
            <span className="info-bar__date-started">Start Date</span>
            <div className="info-bar__divider-vertical"></div>
            <span className="info-bar__date-started">End Date</span>
        </div>
        <div className="divider-horizontal"></div>
        <div className="exp-container">
            {experiences.map((experience,index) => (
                    <div 
                    key={experience.id}
                    className={`exp-holder ${index % 2 === 0 ? "exp-holder__white" : "exp-holder__black"}
                    ${selectedId === experience.id ? "exp-holder__onselected" : ""}`}
                    onClick={() => setSelectedId(experience.id)}
                    >
                        <div className="exp-holder__img-container">
                            <img className="exp-holder__img" src={experience.src} alt={experience.position} title={experience.position}/>
                        </div>
                        <span className={`exp-holder__text-name ${selectedId === experience.id ? "onselected" : ""}`} title={experience.position}>{experience.name}</span>
                        <span className={`exp-holder__text-skills ${selectedId === experience.id ? "onselected" : ""}`}>{experience.skills}</span>
                        <span className={`exp-holder__text-dates ${selectedId === experience.id ? "onselected" : ""}`}>{experience.startdate}</span>
                        <span className={`exp-holder__text-datee ${selectedId === experience.id ? "onselected" : ""}`}>{experience.enddate}</span>
                    </div>
             ))}
        </div>
        </>
    )
}