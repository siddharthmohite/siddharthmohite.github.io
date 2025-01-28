
import FolderIcon from '../icons/FolderIcon'
import { useState } from 'react';

export default function Finder(){
const [selectedFolderId, setSelectedFolderId] = useState(1);
const [isExpanded, setIsExpanded] = useState(false);
const [selectedTagId, setSelectedTagId] = useState(null);



const folders = [

    {"id": 1, "text":'About Me'},
    {"id": 2, "text":'Experience'},
    {"id": 3, "text":'Projects'},
    {"id": 4, "text":'Certifications'},
    {"id": 5, "text":'Acheivements'}
]

const tags = [
    {"id": 1, "text":'Red'},
    {"id": 2, "text":'Orange'},
    {"id": 3, "text":'Yellow'},
    {"id": 4, "text":'Green'},
    {"id": 5, "text":'Blue'},
    {"id": 6, "text":'Purple'},
    {"id": 7, "text":'Gray'}
]
    return (

        <div className={`container ${isExpanded ? 'expanded' : ''}`}>
            <div className="sidebar">
                <div className="sidebar__buttons">
                    <button className="sidebar__buttons-close">

                    </button>
                    <button className={`sidebar__buttons-min ${isExpanded ? 'active' : ''}`}>
                        
                    </button>
                    <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="sidebar__buttons-max">
                        
                    </button>
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
                                    onClick={() => setSelectedFolderId(folder.id)}
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
                                    onClick={() => setSelectedTagId(tag.id)}
                                    className={`sidebar__tag-item ${selectedTagId === tag.id ? 'selected' : ''}`}>
                                        <FolderIcon/>
                                        <span className="sidebar__tag-item-text">
                                            {tag.text}
                                        </span>
                                    </div>      
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
    )
}