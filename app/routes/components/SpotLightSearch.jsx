
import { useState, useEffect } from "react";
import SearchIcon from '../icons/SearchIcon';
import "../styles/SpotLightSearch.scss";

export default function SpotLightSearch()
{
     const [isOpen, setIsOpen] = useState(true);

     useEffect(() => {
       const handleKeyDown = (e) => {
         if (e.ctrlKey && e.code === 'Space') {
           e.preventDefault();
           setIsOpen((prev) => !prev);
         }
       };
       window.addEventListener('keydown', handleKeyDown);
       return () => window.removeEventListener('keydown', handleKeyDown);
     }, []);
   
     const handleClose = () => {
       setIsOpen(false);
     };
   
  return (
    <>
      {isOpen && (
        <div className="spotlight-overlay" onClick={handleClose}>
          <div className="spotlight-container" onClick={(e) => e.stopPropagation()}>
            <div className="spotlight-input-wrapper">
                <div className="spotlight-icon">
                    <SearchIcon dimension="33px" />
                </div>
                <input
                type="text"
                className="spotlight-input"
                placeholder="Spotlight Search"
                autoFocus
                />
            </div>
          </div>
        </div>
      )}
    </>
          );
        };