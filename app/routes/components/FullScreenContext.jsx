import { createContext, useState, useEffect } from "react";

export const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
    const [fullScreenSelected, setFullScreenSelected] = useState(false);

    const toggleFullScreen = () => {
        if (!fullScreenSelected) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }

        setFullScreenSelected(!fullScreenSelected);
    };

    useEffect(() => {
        const handleFullScreenChange = () => {
            if (!document.fullscreenElement) {
                setFullScreenSelected(false);
            }
        };

        document.addEventListener("fullscreenchange", handleFullScreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullScreenChange);
    }, []);

    return (
        <FullScreenContext.Provider value={{ fullScreenSelected, toggleFullScreen }}>
            {children}
        </FullScreenContext.Provider>
    );
};
