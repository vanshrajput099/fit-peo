import { useState } from "react"
import { ORANGE_COLOR } from "../colors"
import CustomCheckbox from "./CustomCheckbox"

const Footer = () => {
    const [checked, setChecked] = useState(false);
    const onChangeFunction = () => {
        setChecked(prev => !prev);
    }
    return (
        <div style={{ backgroundColor: ORANGE_COLOR }} className='pb-10 -mt-10 border py-20 text-black'>
            <div className='w-full p-3 xl:p-0 xl:w-[75%] mx-auto flex flex-col md:flex-row justify-between space-y-10'>
                <div style={{ fontFamily: 'Druk Bold Trial' }} className='font-black text-[5rem] leading-17 md:w-[30%]'>
                    <h1>DESIGN</h1>
                    <h1>DECLARES</h1>
                </div>
                <div className='w-full md:w-[65%]'>
                    <div className="flex flex-col md:flex-row justify-between space-y-10">
                        <ul className="space-y-2 text-lg xl:text-xl grid grid-cols-2 sm:grid-cols-1 md:block">
                            <li>Contact</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <div className="w-full md:w-[50%]">
                            <h1 className="font-bold">Sign up to the D! Newsletter</h1>
                            <div className="flex flex-col md:flex-row gap-2 p-4 text-xl border mt-4 xl:mt-0">
                                <label htmlFor="">Email:*</label>
                                <input type="text" className="w-full border-none focus:border-none focus:outline-none active:border-none" />
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between mt-5 space-y-3">
                                <div className="w-full xl:w-[70%] space-y-2">
                                    <div className="flex items-center gap-2">
                                        <CustomCheckbox checked={checked} onChange={onChangeFunction} label={""} />
                                        <p className="text-xs">I would like to be added to the Design Declares! newsletter and recieve furthur updates.</p>
                                    </div>
                                    <p className="text-xs mt-4 hover:text-white cursor-pointer transition-colors duration-150 underline">View our Privacy Policy</p>
                                </div>
                                <button className="bg-gray-200 w-full font-bold text-2xl md:text-xl xl:text-2xl xl:w-fit py-3 md:px-2 footer-btn xl:px-7 rounded-4xl">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="text-xs space-y-5 mt-20">
                        <p>This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand. <span className="text-xs mt-4 hover:text-white cursor-pointer transition-colors duration-150 underline">Learn more about our carbon footprint.</span> </p>
                        <p>Empowered by <span className="text-xs mt-4 hover:text-white cursor-pointer transition-colors duration-150 underline">Driftime®</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer