import "../styles/AppleLogoMenu.scss";
import "../icons/ArrowUpwardIcon";
import "../icons/CommandIcon";
import React from "react";
export default function AppleLogoMenu({ onMenuItemClick }){

        const menuGroups = [
            ["About Me"],
            ["View Projects", "View Work Experience", "Certificates"],
            ["Read Blogs Here"],
            ["Sleep", "Lock Screen", "Shutdown"],
          ];
          
          return (
            <div className="menu-container">
              {menuGroups.map((group, groupIdx) => (
                <React.Fragment key={groupIdx}>
                  {group.map((text, idx) => (
                    <div 
                    key={idx}
                    onClick={() => onMenuItemClick(text)}
                    className="menu-item">
                    <span key={idx} className="text">
                      {text}
                    </span>
                    { groupIdx === 3 &&
                    <span className="shortcut-text">
                    ^ ⌘ Q
                    </span>
    }
                    </div>
                  ))}
                  {groupIdx < menuGroups.length - 1 && <div className="divider" />}
                </React.Fragment>
              ))}
            </div>
          );
}