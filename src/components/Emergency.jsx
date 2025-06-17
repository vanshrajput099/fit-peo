import { useInView } from 'react-intersection-observer';
import { EMERGENCY_DATA_ARR } from '../data'

const Emergency = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div className='pt-50 xl:mt-0 min-h-screen bg-black relative'>
            <div ref={ref} className={`w-full p-3 flex flex-col gap-7 lg:gap-0 2xl:w-[75%] mx-auto py-5 text-white lg:flex-row justify-between xl:px-5 transition-all duration-400 transform  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}`}>
                <div className='sticky top-8 h-fit'>
                    <h1 className='font-bold text-2xl'>8 Acts of Emergency</h1>
                </div>
                <div className='w-full px-1 sm:w-full lg:w-[55%] xl:w-[57%]'>
                    <h1 className='text-2xl text-gray-300 text-color'>What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:.</h1>
                    <div className='mt-10 border border-t-0 border-b-0'>
                        {
                            EMERGENCY_DATA_ARR.map((ele, idx) => {
                                return (
                                    <div key={idx} className='bg-gray-100 text-black'>
                                        <div className='font-normal text-3xl lg:text-6xl w-full flex'>
                                            <h1 className='border p-3 border-r-0 border-l-0'>{idx + 1}</h1>
                                            <h1 className='border w-full p-3 border-r-0'>{ele.name}</h1>
                                        </div>
                                        <p className='text-lg xl:text-xl p-3'>{ele.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emergency