
import FolderIcon from '../icons/FolderIcon'
import { useState } from 'react';

export default function Finder(){
const [selectedFolderId, setSelectedFolderId] = useState(1);

const folders = [

    {"id": 1, "text":'About Me'},
    {"id": 2, "text":'Experience'},
    {"id": 3, "text":'Projects'},
    {"id": 4, "text":'Certifications'},
    {"id": 5, "text":'Acheivements'}
]    
    return (

        <div className="container">
            <div className="sidebar">
                <div className="sidebar__buttons">
                    <button className="sidebar__buttons-close">

                    </button>
                    <button className="sidebar__buttons-min">
                        
                    </button>
                    <button className="sidebar__buttons-max">
                        
                    </button>
                </div>
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
            </div>
        </div>
    )
}