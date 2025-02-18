import { useState } from "react";
export default function Projects(){

const [selectedProject, setSelectedProject] = useState(null);    
const projects =[

    {id:1, name: "RagVec", link:"https://github.com/siddharthmohite/RagVec" , img:"/ragvec.png"},
    {id:2, name: "Titan Organize", link:"https://github.com/siddharthmohite/TitanOrganize" , img:"/titanorganize.jpg"},
    {id:3, name: "Trail Buddy", link:"https://github.com/siddharthmohite/BikeTrail" , img:"/trailbuddy.jpeg"},
    {id:4, name: "Bear Minimum", link:"https://github.com/siddharthmohite/BearMinimum" , img:"/bearminimum.png"},
    {id:5, name: "Algorithmic Trading Bot", link:"https://github.com/siddharthmohite/AlgoBot" , img:"/algobot.png"},
    {id:6, name: "Netflix Clone", link:"https://github.com/siddharthmohite/Netflix-Clone" , img:"/netflixclone.png"},
]

const handleProjectClick = (url ,id) => {
    setSelectedProject(id);
    window.open(url, "");
}
    return(
        <>
        <div className="top-bar">
            <span className="title">Projects</span>
            <div title="Icon View" className="view-container">
                <img title="Icon View" className="view" src="/Icon.png">
                </img>
            </div>
        </div>
        <div className="projects-container">
            <div className="projects-flex-wrapper">
                {projects.map((project) => (
                <div 
                onClick={() => handleProjectClick(project.link, project.id)}
                className="projects-details-container">
                    <div className={`projects-image-container ${selectedProject == project.id ? "selected":""}`}>
                        <img className="project-image" src={project.img}/>
                    </div>
                    <span className={`project-name-text ${selectedProject == project.id ? "selected": ""}`}>
                        {project.name}
                    </span>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}