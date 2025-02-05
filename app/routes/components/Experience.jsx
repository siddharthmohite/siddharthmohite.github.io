export default function Experience(){
    // const 
    const handleExpClick = () =>{

    }

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

                    <div 
                    onClick={handleExpClick}
                    className="exp-holder">
                        <div className="exp-holder__img-container">
                            <img className="exp-holder__img" src="/occourt.jpeg"/>
                        </div>
                        <span className="exp-holder__text-name">Orange County Superior Court</span>
                        <span className="exp-holder__text-skills">C++,Python, FastAPI</span>
                        <span className="exp-holder__text-dates">May 31 2024</span>
                        <span className="exp-holder__text-datee">Present</span>
                    </div>

        </div>
        </>
    )
}