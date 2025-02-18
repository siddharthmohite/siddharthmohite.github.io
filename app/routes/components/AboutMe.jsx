export default function AboutMe(){


    return(
        <div className="aboutme-container">
            <div className="top-bar">
                <span className="title">About Me</span>
            </div>
            <div className="main-content">
                {/* <div className="img-container">
                    <img className="me" src="/groot.gif" />
                </div> */}
                <div className="aboutme-text-container">
                <div className="img-container">
                    <img className="me" src="/groot.gif" />
                </div>
                    <span className="introduction">
                    I'm Siddharth Mohite, a full-stack developer with a sharp eye for detail crafting UI components that don’t just function, but captivate.        
                Currently, Bringing long buried ideas to life straight from the depths of my mind. 
                    </span>
                    <span className="introduction-1">
                    Hope you have a great time exploring my site welcome back and enjoy!
                    </span>
                    <span className="introduction-ending">
                        -Siddharth J Mohite
                    </span>
                </div>
            </div>
        </div>
    )
}