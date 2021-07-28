import { useEffect, useState } from "react";


// Ref : https://www.freecodecamp.org/news/make-react-apps-responsive/
// Some mistake from above reference, window should not be exisit in SSR stage


export default function useWindowSize() {

    // Ref : https://stackoverflow.com/questions/38951721/react-js-server-side-issue-window-not-found
    // Window should not be exist  when server side rendering.
    const isSSR = (typeof window === "undefined");

    const [windowSize, setWindowSize] = useState({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight,
    });

    const changeWindowSize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        window.addEventListener("resize", changeWindowSize);
        return () => {
            window.removeEventListener("resize", changeWindowSize);
        }
    }, []);
    return windowSize;
}