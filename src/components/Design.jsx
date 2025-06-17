import { useInView } from "react-intersection-observer";
import designImage from "../assets/design.webp";

const Design = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div className='min-h-screen bg-black relative'>
            <div ref={ref} className={`w-full p-3 flex flex-col gap-7 lg:gap-0 2xl:w-[75%] mx-auto py-5 text-white lg:flex-row justify-between xl:px-5 transition-all duration-400 transform  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}`}>
                <div className="lg:w-[30%] sticky top-8 h-fit">
                    <h1 className='font-bold text-2xl'>The Design Declares Newsletter and Toolkit</h1>
                </div>
                <div className='w-full sm:w-full lg:w-[55%] xl:w-[57%] space-y-10'>
                    <img src={designImage} className="object-contain" alt="" />
                    <h1 className="text-2xl">Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.</h1>
                    <p>Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.</p>
                    <div className="flex gap-2 p-4 text-xl border">
                        <label className="text-gray-300" htmlFor="">Email:*</label>
                        <input type="text" className="flex-1 border-none focus:border-none focus:outline-none active:border-none" />
                    </div>
                    <div className="flex items-center gap-2">
                        <input className="h-14 w-14" type="checkbox" />
                        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus, iste qui vero voluptatem numquam odio assumenda tempora sint architecto!</p>
                    </div>
                    <div className="space-y-5 mt-5">
                        <p className="text-xs">View our Privacy Policy</p>
                        <button className="bg-gray-200 w-full lg:w-fit px-7 py-3 rounded-4xl text-black font-medium text-xl">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design