"use client"


const Checkbox = ({ children, checked, onChange }: any) => {


    return (
        <div className="flex gap-2 ">
            <input
                type="checkbox"
                name={children}
                checked={checked}
                onChange={(e) => onChange(e)}
                className="rounded-full appearance-none cursor-pointer w-6 h-6 border border-gray-300 checked:bg-black checked:border-transparent focus:outline-none"
            />
            <label>{children}</label>
        </div>
    );
};

export default Checkbox;