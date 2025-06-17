import { useEffect, useRef } from "react";
import { ORANGE_COLOR } from "../colors";

const Progress = () => {
    const progressBarRef = useRef(null);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrolled = (scrollTop / docHeight) * 100;

                    if (progressBarRef.current) {
                        progressBarRef.current.style.width = `${scrolled}%`;
                    }

                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-2 bg-black z-50">
            <div
                ref={progressBarRef}
                className="h-full"
                style={{
                    width: '0%',
                    backgroundColor: ORANGE_COLOR,
                    // You can keep or remove this for instant updates
                    transition: 'width 0.1s linear',
                }}
            ></div>
        </div>
    );
};

export default Progress;
