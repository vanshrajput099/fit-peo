const CustomOption = ({ value, ele, setShowCountries, handleSelectChange, name, setShowDiscipline }) => {


    const handleClick = () => {
        handleSelectChange(name, ele);
        if (name === "country") {
            setShowCountries(false)
        } else {
            setShowDiscipline(false);
        }
    }

    return (
        <div onClick={handleClick} className={`${value === ele && "text-orange-500"} border select-none border-transparent hover:border-white p-1`}>
            {ele}
        </div>
    )
}

export default CustomOption