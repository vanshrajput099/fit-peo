import { useEffect, useState } from "react";
import { SUPPORTERS_ARR } from "../data";
import { useInView } from "react-intersection-observer";

const easeOutExpo = (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

const Supporters = () => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const end = 661;
        const duration = 4000;
        const startTime = performance.now();

        const animateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = easeOutExpo(progress);
            const currentCount = Math.floor(start + (end - start) * easedProgress);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, [inView]);

    return (
        <div id="stopPoint2" style={{ borderRadius: '0 0 2.5% 2.5%' }} className='min-h-screen bg-black py-13 relative z-10 pb-40'>
            <div className='w-full p-3 xl:p-0 xl:w-[75%] mx-auto'>
                <div>
                    <h1 ref={ref} className='text-6xl text-white'>#{count}</h1>
                    <div className='flex items-center gap-2'>
                        <h1 className="text-xl xl:text-2xl text-white">Global Supporters</h1>
                    </div>
                </div>

                <div className="columns-3 sm:columns-4 lg:columns-6 xl:columns-9 mt-10 text-xs">
                    {SUPPORTERS_ARR.map((ele, idx) => (
                        <div className="mb-3" key={idx}>
                            <p className="block font-bold text-white">{ele.country}</p>
                            {ele.participants.map((ele, index) => (
                                <a className="block text-gray-300" key={index} href="">{ele}</a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Supporters;
