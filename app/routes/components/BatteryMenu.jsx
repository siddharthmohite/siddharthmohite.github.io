import React, { useEffect, useState } from 'react';
import '../styles/BatteryMenu.scss';

export default function BatteryMenu(){

  const [batteryPercentage, setBatteryPercentage] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        const updateBatteryPercentage = () => {
          setBatteryPercentage(Math.round(battery.level * 100));
        };
        console.log("battery Percentage", batteryPercentage);

        updateBatteryPercentage();

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