"use client";
import { useEffect, useRef, useState } from "react";
import { ORANGE_COLOR } from "../colors";

const Progress = () => {
    const [scrollWidth, setScrollWidth] = useState(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrolled = (scrollTop / docHeight) * 100;
                    setScrollWidth(scrolled);
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
                className="h-full"
                style={{
                    width: `${scrollWidth}%`,
                    backgroundColor: ORANGE_COLOR,
                    transition: 'width 0.1s linear',
                }}
            ></div>
        </div>
    );
};

export default Progress;
