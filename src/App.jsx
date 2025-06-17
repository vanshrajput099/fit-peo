import { useEffect, useRef, useState } from 'react';
import DeclareEmergency from './components/DeclareEmergency';
import Design from './components/Design';
import Emergency from './components/Emergency';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Latest from './components/Latest';
import Progress from './components/Progress';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import SideMenu from './components/SideMenu';
import Signatures from './components/Signatures';
import Supporters from './components/Supporters';

const App = () => {

  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);

  useEffect(() => {
    if (footerRef.current) {
      const height = footerRef.current.getBoundingClientRect().height;
      setFooterHeight(height);
    }
  }, []);

  useEffect(() => {
    if (changeBackground) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [changeBackground]);

  return (
    <div className={`min-h-screen max-w-screen flex flex-col text-white relative z-10`}>
      <div className="md:relative md:z-50" style={{ borderRadius: '0 0 2.5% 2.5%' }}>
        <Progress />
        <HeroSection setShowMenu={setShowMenu} />
        <Section1 />
        <Section2 />
        <Emergency />
        <DeclareEmergency />
        <Latest />
        <Design />
        <Signatures />
        <Supporters />
      </div>
      <div className={`fixed inset-0 min-h-screen z-[60] transition-all duration-300 ease-in-out ${changeBackground ? "bg-black/30 backdrop-blur-sm opacity-100 block" : "bg-black/0 backdrop-blur-0 opacity-0 hidden"}`}></div>
      <SideMenu showMenu={showMenu} setChangeBackground={setChangeBackground} />
      <div id="stopPoint" className='hidden md:block bg-transparent border-white' style={{ height: footerHeight + "px" }}></div>
      <div className='md:fixed md:bottom-0 md:w-full md:z-10' ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}

export default App;
