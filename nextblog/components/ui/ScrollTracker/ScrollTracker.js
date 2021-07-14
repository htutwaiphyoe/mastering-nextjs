import { useEffect, useRef } from "react";

import classes from "./ScrollTracker.module.css";

const ScrollTracker = (props) => {
    const trackerRef = useRef();
    const scrollHandler = () => {
        // document.body.scrollHeight => total height of body
        // window.innerHeight => height of window viewport (the viewport height on screen)
        // to get the height of body to scroll which are not on screen, substract them
        // window.scrollY => the number of pixels the document is scrolled
        // to get ratio of how many pixels scroll and total pixels to scroll
        const heightToScroll = document.body.scrollHeight - window.innerHeight;
        const trackerWidth = (window.scrollY / heightToScroll) * 100;
        trackerRef.current.style.width = `${trackerWidth}%`;
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    return <div className={classes.scrollTracker} ref={trackerRef}></div>;
};

export default ScrollTracker;
