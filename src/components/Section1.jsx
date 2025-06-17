import { useInView } from "react-intersection-observer";
import { ACCORDIAN_ARR } from "../data"
import Accordian from "./Accordian"

const Section1 = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div className={`min-h-screen bg-black relative`}>
            <div ref={ref} className={`w-full p-3 flex flex-col gap-7 lg:gap-0 2xl:w-[75%] mx-auto py-5 text-white lg:flex-row justify-between xl:px-5 transition-all duration-400 transform  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}`}>
                <div className="lg:w-[35%] sticky top-8 h-fit">
                    <h1 className='font-bold text-xl lg:text-2xl'>This is Breakdown</h1>
                </div>

                <div className='w-full sm:w-full lg:w-[60%] xl:w-[57%] overflow-y-auto max-h-[100vh] pb-10'>
                    <h1 className='text-2xl sm:text-4xl lg:text-6xl'>
                        The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
                    </h1>
                    <div className="mt-20 space-y-10">
                        {ACCORDIAN_ARR.map((ele, idx) => (
                            <Accordian data={ele} key={idx} />
                        ))}
                    </div>
                    <button className="bg-gray-200 w-full md:w-fit text-black font-bold px-7 py-2 xl:py-3 rounded-4xl sm:text-xl xl:text-xl mt-10">
                        View our D! Intro Video
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Section1