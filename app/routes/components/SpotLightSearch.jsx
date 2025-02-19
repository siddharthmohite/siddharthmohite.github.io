
import { useState, useEffect } from "react";
import SearchIcon from '../icons/SearchIcon';
export default function SpotLightSearch()
{
     // Control the visibility of the overlay
     const [isOpen, setIsOpen] = useState(true);
   
   
   
     // Toggle the overlay when user presses Ctrl+Space
     useEffect(() => {
       const handleKeyDown = (e) => {
         // Check for Ctrl+Space
         if (e.ctrlKey && e.code === 'Space') {
           e.preventDefault();
           setIsOpen((prev) => !prev);
         }
       };
       window.addEventListener('keydown', handleKeyDown);
       return () => window.removeEventListener('keydown', handleKeyDown);
     }, []);
   
     // Close the overlay and reset the search
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