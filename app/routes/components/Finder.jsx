
import FolderIcon from '../icons/FolderIcon'

export default function Finder(){

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
                    key={folder.id}
                    className="sidebar__folder-holder">
                                <ul className="sidebar__folder-list">
                                    <div className="sidebar__folder-item">
                                        <FolderIcon/>
                                        <span className="sidebar__folder-item-text">
                                            {folder.text}
                                        </span>
                                    </div>
                                </ul>
                        
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}