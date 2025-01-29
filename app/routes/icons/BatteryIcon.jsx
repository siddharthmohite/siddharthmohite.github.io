import React, { useEffect, useState } from 'react';

export default function  BatteryIcon(){

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

  // Calculate the width of the fill based on the battery percentage
  const fillWidth = batteryPercentage ? (batteryPercentage / 100) * 18.5 : 0; // 30 is the width of the battery body


  return (
    <svg width="60" height="45" viewBox="0 0 60 45" fill="rgba(0,0,0,1)" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="batteryGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#F0F0F0" />
          <stop offset="100%" stop-color="#E0E0E0" />
        </linearGradient>
        <linearGradient id="chargeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#60D043" />
          <stop offset="100%" stop-color="#40A02B" />
        </linearGradient>
        <filter id="dropShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.2)" />
        </filter>
      </defs>

      {/* Battery Body */}
      <rect x="15.5" y="16" width="21" height="10" rx="2.5" fill="transparent" stroke="gray" stroke-width="1" filter="url(#dropShadow)" />

      {/* Battery Fill */}
      <rect id="batteryFill" x="17.0" y="17.3" width={fillWidth} height="7.5" rx="1" fill="rgb(28, 28, 28)" />

      {/* Battery Cap */}
      <rect x="37" y="19.7" width="0.1" height="2.5" fill="#C0C0C0" stroke="gray" />
      <rect x="36.8" y="19.7" width="1" height="2.5" rx="4" fill="#C0C0C0" stroke="gray" />
    </svg>
  );
};
