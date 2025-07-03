
import FolderIcon from '../icons/FolderIcon'
import ColoredCircle from '../components/ColoredCircle'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Achievements from '../components/Achievements'
import "../styles/Finder.scss";
import { useEffect, useState } from 'react';

export default function Finder({onClose , folderId}){

const [selectedFolderId, setSelectedFolderId] = useState(folderId || 1);
const [isExpanded, setIsExpanded] = useState(false);
const [selectedTagId, setSelectedTagId] = useState(null);

useEffect(() => {
    console.log("folderId", folderId);
    if (folderId !== undefined) {
      setSelectedFolderId(folderId);
    }
    else
    {
        setSelectedFolderId(1);
    }
  }, [folderId]);

const handleButtonClose = () =>
{
    onClose();
};


const folders = [

    {"id": 2, "text":'Experience'},
    {"id": 3, "text":'Projects'},
    {"id": 4, "text":'Certifications'},
    {"id": 5, "text":'Acheivements'}
]

const tags = [
    {"id": 1, "text":'Red' ,"color":'red'},
    {"id": 2, "text":'Orange', "color":'orange'},
    {"id": 3, "text":'Yellow', "color":'yellow'},
    {"id": 4, "text":'Green', "color":'green'},
    {"id": 5, "text":'Blue', "color":'blue'},
    {"id": 6, "text":'Purple',"color":'purple'},
    {"id": 7, "text":'Gray',"color":'gray'}
]

    return (

        <div className={`container ${isExpanded ? 'expanded' : ''}`}>
            <div className="sidebar">
                <div className="sidebar__buttons">
                    <button 
                    onClick={handleButtonClose}
                    className="sidebar__buttons-close">
                    </button>
                    <button className={`sidebar__buttons-min ${isExpanded ? 'active' : ''}`}/>
                    <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="sidebar__buttons-max"/>
                </div>
                <div className='overflowy-wrapper'>
                <span className="sidebar__favorites-text">
                    Favorites
                </span>
                <div className="sidebar__folder-container">
                {folders.map((folder) => (
                    <div
                    title={folder.text}
                    key={folder.id}
                    className="sidebar__folder-holder">
                        <div 
                        onClick={() => {setSelectedFolderId(folder.id); setSelectedTagId(null);}}
                        className={`sidebar__folder-item ${selectedFolderId === folder.id ? 'selected' : ''}`}>
                            <FolderIcon/>
                            <span className="sidebar__folder-item-text">
                                {folder.text}
                            </span>
                        </div>      
                    </div>
                ))}
                </div>
                <span className="sidebar__tags-text">
                    Tags
                </span>
                <div className="sidebar__tag-container">
                {tags.map((tag) => (
                    <div
                    title={tag.text}
                    key={tag.id}
                    className="sidebar__tag-holder">
                        <div 
                        onClick={() => {setSelectedTagId(tag.id); setSelectedFolderId(null);}}
                        className={`sidebar__tag-item ${selectedTagId === tag.id ? 'selected' : ''}`}>
                            <ColoredCircle color= {tag.color}/>
                            <span className="sidebar__tag-item-text">
                                {tag.text}
                            </span>
                        </div>      
                    </div>
                ))}
                </div>
            </div>
            </div>
            <div className="main-container">
             {(selectedFolderId == 2 &&
                <Experience />
            )}
             {(selectedFolderId == 3 &&
                <Projects />
            )}
             {(selectedFolderId == 4 &&
                <Certifications />
            )}   
             {(selectedFolderId == 5 &&
                <Achievements />
            )} 
            </div>    
        </div>
    )
}