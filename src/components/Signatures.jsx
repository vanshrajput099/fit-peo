import { useEffect, useState } from "react";
import { SIGNATURES_ARR } from "../data";
import { useInView } from "react-intersection-observer";

const easeOutExpo = (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

const Signatures = () => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const end = 513;
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
        <div className='min-h-screen pt-50 bg-black'>
            <div className='w-full p-3 xl:p-0 xl:w-[75%] mx-auto'>
                <div>
                    <h1 ref={ref} className='text-6xl text-white'>#{count}</h1>
                    <div className='flex flex-col items-start xl:flex-row xl:items-center gap-2'>
                        <h1 className="text-xl xl:text-2xl text-white">Signatories and counting in</h1>
                        <p className='text-black bg-orange-500 w-fit px-4 py-1 font-bold rounded-4xl text-xs xl:text-sm'>D! UK</p>
                    </div>
                </div>
                <div className="columns-3 sm:columns-4 lg:columns-6 xl:columns-9 mt-10 text-xs">
                    {SIGNATURES_ARR.map((ele, idx) => (
                        <a className="block text-gray-300" key={idx} href="">{ele}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Signatures;
