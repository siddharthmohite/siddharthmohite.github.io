import React, { useEffect, useState } from 'react';
import '../styles/BatteryMenu.scss';

export default function BatteryMenu(){

  const [batteryPercentage, setBatteryPercentage] = useState(null);

  useEffect(() => {
    // Ensure this code runs only in the browser
    if (typeof window !== 'undefined' && 'getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        // Convert battery level (0 to 1) to percentage (0 to 100)
        const updateBatteryPercentage = () => {
          setBatteryPercentage(Math.round(battery.level * 100));
        };
        console.log("battery Percentage", batteryPercentage);

        // Set initial battery percentage
        updateBatteryPercentage();

        // Update battery percentage when it changes
        battery.addEventListener('levelchange', updateBatteryPercentage);
      });
    } else {
      console.warn('Battery Status API is not supported in this browser.');
    }
  }, []);
    return(
        <div className="battery-menu-container">
            <div className="battery-menu-1">
                <span className="battery-menu-text">
                    Battery
                </span>
                <span className="battery-percentage">
                    {batteryPercentage}%
                </span>
            </div>
            <span className="battery-menu-gray-text">
                Power Source: Battery
            </span>
            <div className='battery-menu-divider'>

            </div>
            <span className="battery-menu-gray-text">
                No Apps Using Significant Energy
            </span>
            <div className='battery-menu-divider'>

            </div>
            <span className="battery-menu-settings-text">
                Battery Settings...
            </span>
        </div>
    )
}