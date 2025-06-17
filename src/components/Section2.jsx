import { useInView } from "react-intersection-observer";

const Section2 = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div className='min-h-[65vh] bg-black pt-30 relative'>
            <div  ref={ref} className={`w-full p-3 flex flex-col gap-7 lg:gap-0 2xl:w-[75%] mx-auto py-5 text-white lg:flex-row justify-between xl:px-5 transition-all duration-400 transform  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}`}>
                <div className="sticky top-8 h-fit">
                    <h1 className='font-bold text-xl lg:text-2xl'>Donate to D!</h1>
                </div>
                <div className='w-full sm:w-full lg:w-[60%] xl:w-[57%]'>
                    <h1 className='text-lg sm:text-2xl text-gray-300 text-color'>Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.</h1>
                    <div className="flex flex-col lg:flex-row text-black font-medium sm:text-xl xl:text-xl mt-10 gap-2">
                        <button className="bg-gray-200 px-7 py-2 xl:py-3 rounded-4xl">Donate £10</button>
                        <button className="bg-gray-200 px-7 py-2 xl:py-3 rounded-4xl">Donate £20</button>
                        <button className="bg-gray-200 px-7 py-2 xl:py-3 rounded-4xl">Donate £50</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2