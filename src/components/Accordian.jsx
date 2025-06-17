import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordian = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-gray-300 overflow-hidden text-color">
            <h1
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-2 sm:py-4 text-left font-medium transition text-2xl cursor-pointer"
            >
                {data.title}
                <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </h1>

            <div
                className={`overflow-hidden sm:flex sm:flex-row sm:flex-wrap sm:justify-between gap-5 text-base transition-all duration-700 ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"
                    }`}
            >
                {data.p.map((ele, idx) => (
                    <div key={idx} className=" sm:w-[46%] sm:text-[1.1rem] py-2 px-2 sm:py-4 pb-5">
                        {ele}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordian;
