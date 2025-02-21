import "../styles/AppleLogoMenu.scss";
import React from "react";
export default function AppleLogoMenu(){

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
                    <span key={idx} className="text">
                      {text}
                    </span>
                  ))}
                  {groupIdx < menuGroups.length - 1 && <div className="divider" />}
                </React.Fragment>
              ))}
            </div>
          );
}