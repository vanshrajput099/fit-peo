import { X } from 'lucide-react';

const CustomCheckbox = ({ label, checked, onChange }) => {
    return (
        <label className="flex items-center gap-2">
            <div
                className={`h-10 w-10 xl:h-12 xl:w-12 border-1 flex items-center justify-center`}
                onClick={onChange}
            >
                <span className={`transform transition-transform duration-300 ${checked ? 'scale-100' : 'scale-0'}`}>
                    <X className="h-8 w-8 xl:h-10 xl:w-10" />
                </span>
            </div>
            <span className="text-color text-lg xl:text-xl">{label}</span>
        </label>
    );
};

export default CustomCheckbox;
