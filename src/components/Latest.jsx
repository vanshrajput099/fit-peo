import { useInView } from "react-intersection-observer";

const Latest = () => {
    const { ref: textRef, inView: textInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { ref: divRef, inView: divInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div className='min-h-screen bg-black relative'>
            <div className='w-full p-3 flex flex-col gap-7 lg:gap-0 2xl:w-[75%] mx-auto py-5 text-white lg:flex-row justify-between xl:px-5'>
                <div ref={textRef} className={`sticky top-8 h-fit transition-all duration-400 transform  ${textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}`}>
                    <h1 className='font-bold text-2xl'>Latest</h1>
                </div>
                <div className='w-full sm:w-full lg:w-[55%] xl:w-[57%] space-y-10'>
                    <div ref={divRef} className={`transition-all duration-400 transform delay-100  ${divInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}`}>
                        <div className="flex gap-2 text-sm items-center">
                            <p className="px-4 py-1 bg-gray-900 rounded-4xl">Events</p>
                            <p className="px-4 py-1 bg-gray-900 rounded-4xl">D! UK</p>
                            <p>24.04.2025, 15:30</p>
                        </div>
                        <div className="space-y-5 flex flex-col xl:flex-row mt-5 justify-between">
                            <h1 className="text-2xl xl:text-3xl xl:w-1/2">SD4P Collective: How can Service Design drive meaningful sustainability impact</h1>
                            <div className="text-gray-300 space-y-5 text-lg xl:text-xl xl:w-1/2">
                                <h2>Recap: SD4P Collective working session – 28th March 2025</h2>
                                <p>Read story</p>
                            </div>
                        </div>
                    </div>
                    <div ref={divRef} className={`transition-all duration-400 transform delay-100  ${divInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}`}>
                        <div className="flex gap-2 text-sm items-center">
                            <p className="px-4 py-1 bg-gray-900 rounded-4xl">Events</p>
                            <p className="px-4 py-1 bg-gray-900 rounded-4xl">D! UK</p>
                            <p>24.04.2025, 15:30</p>
                        </div>
                        <div className="space-y-5 flex flex-col xl:flex-row mt-5 justify-between">
                            <h1 className="text-2xl xl:text-3xl xl:w-1/2">SD4P Collective: How can Service Design drive meaningful sustainability impact</h1>
                            <div className="text-gray-300 space-y-5 text-lg xl:text-xl xl:w-1/2">
                                <h2>Recap: SD4P Collective working session – 28th March 2025</h2>
                                <p>Read story</p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-gray-200 text-xl w-full lg:w-fit text-black font-medium px-7 py-2 xl:py-3 rounded-4xl">See all the latest</button>
                </div>
            </div>
        </div>
    )
}

export default Latest