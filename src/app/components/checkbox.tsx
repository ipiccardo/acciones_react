"use client"

// const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
const Checkbox = ({ children }: any) => {

    return (
        <div className="flex gap-2 ">
            <input
                type="checkbox"
                checked={false}
                onChange={() => { }}
                className="rounded-full appearance-none cursor-pointer w-6 h-6 border border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <label>{children}</label>
        </div>
    );
};

export default Checkbox;