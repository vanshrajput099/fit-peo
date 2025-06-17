import { useInView } from "react-intersection-observer";
import { ORANGE_COLOR } from "../colors"
import { useEffect, useState } from "react";

const HeroSection = ({ setShowMenu }) => {

  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(false);

  const { ref: Dref, inView: DinView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: EXRef, inView: EXInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: TextRef, inView: TextInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: otherRef, inView: otherInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: divRef, inView: divInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleTransitionEnd = () => {
    setHide2(true);
    setShowMenu(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
      
    }, 1300)
  }, [])

  return (
    <div className='min-h-screen bg-black'>
      <div className='w-full p-3 flex flex-col gap-7 lg:gap-0 2xl:w-[78%] mx-auto py-5 text-white lg:flex-row justify-between xl:px-5'>
        <div style={{ fontFamily: 'Druk Bold Trial' }} className="font-black text-8xl leading-20 sm:leading-38 sm:text-[12rem] xl:text-[16rem] xl:leading-50">
          <div>
            {
              hide ?
                <div className="flex">
                  <h1 ref={Dref} className={`transition-opacity delay-200 ${DinView ? "opacity-100" : "opacity-0"}`}>D</h1>
                  <h1 onTransitionEnd={handleTransitionEnd} ref={EXRef} className={`transition-opacity delay-800 ${EXInView ? "opacity-100" : "opacity-0"}`}>!</h1>
                </div>
                :
                <>
                  <div ref={TextRef} className="relative overflow-hidden mb-4">
                    <h1 className={`transition-transform duration-500 ease-in-out ${TextInView ? "translate-y-0" : "translate-y-[200px]"}`}>
                      DESIGN
                    </h1>
                    <div className={`bg-black absolute left-0 bottom-0 w-full h-full transition-transform duration-1000 ease-out ${TextInView ? "-translate-y-[200px]" : "-translate-y-5"}`}>
                    </div>
                  </div>

                  <div ref={otherRef} className="relative overflow-hidden mb-4">
                    <h1 className={`transition-transform duration-500 delay-50 ease-in-out ${otherInView ? "translate-y-0" : "translate-y-[200px]"}`}>
                      DECLARES
                    </h1>
                    <div className={`bg-black absolute left-0 bottom-0 w-full h-full transition-transform duration-1000 ease-out ${TextInView ? "-translate-y-[200px]" : "-translate-y-5"}`}>
                    </div>
                  </div>

                  <div onTransitionEnd={handleTransitionEnd} ref={otherRef} className="relative overflow-hidden mb-4">
                    <h1 style={{ color: ORANGE_COLOR }} className={`transition-transform duration-500 delay-50 ease-in-out ${otherInView ? "translate-y-0" : "translate-y-[200px]"}`}>
                      UK
                    </h1>
                    <div className={`bg-black absolute left-0 bottom-0 w-full h-full transition-transform duration-1000 ease-out ${TextInView ? "-translate-y-[200px]" : "-translate-y-5"}`}>
                    </div>
                  </div>
                </>
            }

          </div>
        </div>

        {
          hide2 && <div ref={divRef} className={`w-[100%] lg:w-[35%] transition-all duration-500 transform delay-800  ${divInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} `} >
            <p className='text-lg sm:text-lg xl:text-lg text-color'>Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.</p>
          </div>
        }

      </div>
    </div>
  )
}

export default HeroSection