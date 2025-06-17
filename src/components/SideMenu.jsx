import React, { useEffect, useState, useRef } from 'react';
import { Plus, House, Info, Mail, Newspaper, Globe } from 'lucide-react';

const SideMenu = ({ showMenu, setChangeBackground }) => {

    const [isFixed, setIsFixed] = useState(true);
    const [showMenuContent, setShowMenuContent] = useState(false);
    const [show, setShow] = useState(false);
    const [changeSign, setChangeSign] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const menuRef = useRef(null);

    const handleMenu = () => {
        setChangeSign(prev => !prev);
        setChangeBackground(prev => !prev);
        if (!show) {
            setTimeout(() => setShow(true), 300);
            setShowMenuContent(prev => !prev);
        } else {
            setShow(false);
            setTimeout(() => setShowMenuContent(prev => !prev), 300);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const stopPoint = document.getElementById(isSmallScreen ? 'stopPoint2' : 'stopPoint');
            if (!stopPoint || !menuRef.current) return;

            const stopPointRect = stopPoint.getBoundingClientRect();
            const windowBottom = window.scrollY + window.innerHeight;

            if (isSmallScreen) {
                const stopPointBottom = stopPoint.offsetTop + stopPoint.offsetHeight;

                if (windowBottom >= stopPointBottom) {
                    setIsFixed(false);
                } else {
                    setIsFixed(true);
                }
            } else {
                const stopPointTop = stopPoint.offsetTop;
                if (windowBottom >= stopPointTop - 20) {
                    setIsFixed(false);
                } else {
                    setIsFixed(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isSmallScreen]);

    useEffect(() => {
        if (showMenu) {
            setTimeout(() => setIsVisible(true), 50);
        } else {
            setIsVisible(false);
        }
    }, [showMenu]);

    if (!showMenu) return null;

    const getDynamicStyle = () => {
        if (!isFixed && menuRef.current) {
            const stopPoint = document.getElementById(isSmallScreen ? 'stopPoint2' : 'stopPoint');

            if (isSmallScreen) {
                const stopPointBottom = stopPoint.offsetTop + stopPoint.offsetHeight;

                return {
                    position: 'absolute',
                    top: `${stopPointBottom - menuRef.current.offsetHeight - 10}px`,
                    right: '20px'
                };
            } else {
                const stopPointTop = stopPoint.offsetTop;

                return {
                    position: 'absolute',
                    top: `${stopPointTop - menuRef.current.offsetHeight - 10}px`,
                    right: '20px'
                };
            }
        }
        return {};
    };

    return (
        <div
            ref={menuRef}
            style={getDynamicStyle()}
            className={`
                z-[9999] w-[90%] 
                ${showMenuContent ? "sm:w-[420px]" : "sm:w-[210px]"} 
                transition-all duration-600 transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
                ${isFixed ? 'fixed bottom-5 right-5' : ''} 
            `}
        >
            <div className="bg-gray-200 text-black text-2xl border">
                <div onClick={handleMenu} className="flex justify-between border-b-1 text-xl sm:text-2xl cursor-pointer hover:bg-[#FF6340]">
                    <h1 className="p-2 px-3">Menu</h1>
                    <h1 className="border border-b-0 border-t-0 border-r-0 p-2 flex items-center justify-center">
                        <Plus className={`h-7 w-7 transition-transform transform duration-200 ${changeSign ? "rotate-145" : "rotate-0"}`} />
                    </h1>
                </div>
                <div className={`overflow-hidden border-b-1 space-y-4 transition-all duration-500 ease-in-out ${show ? 'max-h-[500px] opacity-100 px-2 py-3 sm:px-4' : 'max-h-0 opacity-0'}`}>
                    {[{ icon: House, name: "Home" }, { icon: Info, name: "About" }, { icon: Newspaper, name: "Latest" }, { icon: Mail, name: "Contact" }, { icon: Globe, name: "Choose Global Chapter" },].map((ele, idx) => (
                        <h1 key={idx} className='border-b text-xl sm:text-2xl border-transparent hover:border-black w-fit cursor-pointer flex items-center gap-2'>
                            <ele.icon />
                            {ele.name}
                        </h1>
                    ))}
                </div>
                <h1 className="p-2 px-3 text-xl sm:text-2xl cursor-pointer hover:bg-[#FF6340]">Declare Now</h1>
            </div>
        </div>
    );
};

export default SideMenu;
