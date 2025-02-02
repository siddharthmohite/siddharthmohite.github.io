export default function Experience(){

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
            <span className="info-bar__date-started">Date Started</span>
        </div>
        <div className="divider-horizontal"></div>
        <div className="exp-container">

                    <div className="exp-holder">
                        <div className="exp-holder__img-container">
                            <img className="exp-holder__img" src="/occourt.jpeg"/>
                        </div>
                        <span className="exp-holder__text">Orange County Superior Court</span>
                        <span className="exp-holder__text">C++,Python, FastAPI</span>
                        <span className="exp-holder__text">May 31 2024</span>
                    </div>

        </div>
        </>
    )
}