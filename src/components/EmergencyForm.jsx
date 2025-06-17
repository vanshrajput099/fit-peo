import { useCallback, useEffect, useRef, useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { COUNTRIES_ARR, DISCIPLINE_ARR } from "../data";
import { ChevronRight } from 'lucide-react';
import CustomOption from "./CustomOption";

const EmergencyForm = () => {
    const [selected, setSelected] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        website: '',
        country: 'United States',
        discipline: '',
        email: '',
        reason: '',
        agreement1: false,
        agreement2: false,
    });

    const [showDiscipline, setShowDiscipline] = useState(false);
    const [showCountries, setShowCountries] = useState(false);
    const ignoreNextClick = useRef(false);

    const countriesRef = useRef(null);
    const disciplineRef = useRef(null);
    const selectedOptionRef = useRef(null);

    const handleSelect = (key) => {
        setSelected(prev => prev === key ? '' : key);
        setFormData({ ...formData, name: '' });
    };

    const handleInputChange = (field) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: !prevData[field]
        }));
    };

    const handleSelectChange = useCallback((name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        console.log('Selected Type:', selected);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ignoreNextClick.current) {
                ignoreNextClick.current = false;
                return;
            }

            if (showCountries && countriesRef.current && !countriesRef.current.contains(event.target)) {
                setShowCountries(false);
            }

            if (showDiscipline && disciplineRef.current && !disciplineRef.current.contains(event.target)) {
                setShowDiscipline(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCountries, showDiscipline]);

    useEffect(() => {
        if (showCountries && selectedOptionRef.current) {
            selectedOptionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [showCountries]);

    return (
        <form className='border p-4 xl:p-10' onSubmit={handleSubmit}>
            <h1 className="text-2xl xl:text-6xl">I am Declaring Emergency</h1>

            <div className="mt-5 flex flex-wrap gap-5 text-color">
                <CustomCheckbox label="As a business" checked={selected === 'business'} onChange={() => handleSelect('business')} />
                <CustomCheckbox label="As an individual" checked={selected === 'individual'} onChange={() => handleSelect('individual')} />
                <CustomCheckbox label="As a public institution" checked={selected === 'publicInstitution'} onChange={() => handleSelect('publicInstitution')} />
                <CustomCheckbox label="As a team or department" checked={selected === 'team'} onChange={() => handleSelect('team')} />
            </div>

            <div className="border mt-10">
                {selected && (
                    <div className="flex flex-col xl:flex-row xl:gap-2 p-4 text-lg xl:text-xl border-b-1">
                        <label>
                            {selected === "business" || selected === "team" ? 'Business Name:*' :
                                selected === "individual" ? 'Individual Name:*' :
                                    'Institution Name:*'}
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="flex-1 border-none focus:outline-none"
                            required
                        />
                    </div>
                )}

                {
                    selected === "team" && <div className="flex flex-col xl:flex-row xl:gap-2 p-4 text-lg xl:text-xl border-b-1">
                        <label>Team Name*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="flex-1 border-none focus:outline-none"
                            required
                        />
                    </div>
                }

                <div className="flex flex-col xl:flex-row xl:gap-2 p-4 text-lg xl:text-xl border-b-1">
                    <label>Website:*</label>
                    <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full border-none focus:outline-none"
                        required
                    />
                </div>


                <div className="flex flex-col xl:flex-row xl:gap-2 p-4 text-lg xl:text-xl border-b-1 relative">
                    <label>Country:*</label>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            ignoreNextClick.current = true;
                            setShowDiscipline(false);
                            setShowCountries(prev => !prev);
                        }}
                        className="select-none w-full bg-black border-none focus:outline-none flex justify-between"
                    >
                        {formData.country}
                        <ChevronRight className="transform rotate-90" />
                    </div>
                    {showCountries && (
                        <div
                            ref={countriesRef}
                            className="z-[50] h-[400px] sm:w-[50%] left-[16%] top-[90%] overflow-y-scroll absolute bg-black border p-3"
                        >
                            {COUNTRIES_ARR.map((ele, idx) => {
                                const optionRef = ele === formData.country ? selectedOptionRef : null;
                                return (
                                    <div key={idx} ref={optionRef}>
                                        <CustomOption
                                            value={formData.country}
                                            name={"country"}
                                            handleSelectChange={handleSelectChange}
                                            setShowCountries={setShowCountries}
                                            ele={ele}
                                            key={idx}
                                        />
                                    </div>

                                )
                            })}
                        </div>
                    )}
                </div>


                <div className="flex flex-col xl:flex-row xl:gap-2 p-4 text-lg xl:text-xl border-b-1 relative">
                    <label>Discipline:*</label>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            ignoreNextClick.current = true;
                            setShowDiscipline(prev => !prev);
                            setShowCountries(false);
                        }}
                        className={`select-none w-full bg-black border-none focus:outline-none flex ${formData.discipline ? "justify-between" : "justify-end"}`}
                    >
                        {formData.discipline}
                        <ChevronRight className="transform rotate-90" />
                    </div>
                    {showDiscipline && (
                        <div
                            ref={disciplineRef}
                            className="z-[50] left-[16%] top-[90%] overflow-y-scroll absolute bg-black border p-3"
                        >
                            {DISCIPLINE_ARR.map((ele, idx) => (
                                <CustomOption
                                    value={formData.discipline}
                                    setShowDiscipline={setShowDiscipline}
                                    name={"discipline"}
                                    handleSelectChange={handleSelectChange}
                                    setShowCountries={setShowCountries}
                                    ele={ele}
                                    key={idx}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-col xl:flex-row xl:gap-2 p-4 text-lg xl:text-xl border-b-1">
                    <label>Email:*</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-none focus:outline-none"
                        required
                    />
                </div>

                <textarea
                    placeholder="Why are you doing declaring? In a sentance or two, tell us why you're joining Design Declares."
                    rows={'5'}
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="placeholder:text-[#c1beb8] p-4 text-xl w-full border-none focus:outline-none"
                    required
                />
            </div>

            <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2">
                    <CustomCheckbox checked={formData.agreement1 === true} onChange={() => handleInputChange("agreement1")} />
                    <p className="text-xs w-[90%]">I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.</p>
                </div>
                <div className="flex items-center gap-2">
                    <CustomCheckbox checked={formData.agreement2 === true} onChange={() => handleInputChange("agreement2")} />
                    <p className="text-xs w-[90%]">I would like to be added to the Design Declares! newsletter and receive further updates.</p>
                </div>
            </div>

            <div className="space-y-5 mt-5">
                <p className="text-xs hover:text-orange-500 cursor-pointer underline text-color">View our Privacy Policy</p>
                <button type="submit" className="bg-gray-200 mt-5 px-7 py-3 rounded-4xl text-black font-bold text-xl">Declare Emergency Now</button>
            </div>
        </form>
    )
}

export default EmergencyForm;
