import { useInView } from "react-intersection-observer";
import EmergencyForm from "./EmergencyForm"

const DeclareEmergency = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div className='min-h-screen bg-black py-80 relative'>
            <div ref={ref} className={`w-full p-3 flex flex-col gap-7 lg:gap-0 2xl:w-[75%] mx-auto py-5 text-white lg:flex-row justify-between xl:px-5 transition-all duration-400 transform  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}`}>
                <div className="lg:sticky lg:top-8 lg:h-fit">
                    <h1 className='font-bold text-2xl'>Declare Emergency Now</h1>
                </div>
                <div className='w-full sm:w-full lg:w-[55%] xl:w-[57%]'>
                    <h1 className='text-2xl text-color'>Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.</h1>
                    <div className="mt-15">
                        <EmergencyForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeclareEmergency