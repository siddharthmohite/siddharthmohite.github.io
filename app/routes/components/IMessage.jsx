import '../styles/IMessage.scss';
import { useState } from "react";
export default function IMessage({ onClose ,  dayState, monthState, dateState, currentTime }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClose = () =>
        {
            onClose();
        }; 
    return (
    <div className="container">
        <div className="sidebar">
            <div className="sidebar__buttons">
                <button 
                onClick={handleButtonClose}
                className="sidebar__buttons-close">

                </button>
                <button className={`sidebar__buttons-min ${isExpanded ? 'active' : ''}`}>
                    
                </button>
                <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="sidebar__buttons-max">
                    
                </button>
            </div>
            <div className='sidebar__Message-container'>
                <div className='sidebar__Message-photo-container'>
                    <div className='sidebar__Message-photo-holder'>
                        <img className='sidebar__Message-photo' src='/favicon.ico'></img>
                    </div>
                </div>
                <div className='sidebar__Message-info-container'>
                    <span className='sidebar__Message-title'>Siddharth J Mohite</span>
                    <span className='sidebar__Message-subtitle'>Welcome to my portfolio website..</span>
                </div>
            </div>
        </div>
        <div className="blog-main-container">
            <div className="top-bar">
                <span className="title1">To:</span>
                <span className="title2">Siddharth J Mohite</span>
            </div>
            <div className='IMessage-container'>
                <div className='IMessage-center-message'>
                    <span className='IMessage-title'>iMessage</span>
                    <span className='IMessage-date'>{dayState}, {monthState} {dateState} at {currentTime}</span>
                </div>
                <div className='Message-holder'>
                    <span className='Message-content'>I'm Siddharth Mohite, a full-stack developer with a sharp eye for detail crafting UI components that don’t just function, but captivate. Currently, Bringing long buried ideas to life straight from the depths of my mind.</span>
                </div>
                 <div className='Message-holder'>
                    <span className='Message-content'>Hope you have a great time exploring my site welcome back and enjoy!</span>
                </div>
                <div className='Search-bar-container'>
                    <input type="text" className="search-bar" placeholder="iMessage" />
                </div>
            </div> 
        </div>
    </div>    
    )
}