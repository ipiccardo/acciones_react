"use client"
import styles from './ui.module.css'


const Checkbox = ({ children, checked, onChange }: any) => {


    return (
        <div className="flex gap-2 relative ">
            <input
                type="checkbox"
                name={children}
                checked={checked}
                onChange={(e) => onChange(e)}
                className="rounded-full appearance-none cursor-pointer w-6 h-6 border border-gray-300 checked:bg-white focus:outline-none"
            />

            {
                checked && (
                    <div className={`bg-black ${styles.innerButton} rounded-full absolute `}>
                    </div>
                )
            }
            <label>{children}</label>
        </div>
    );
};

export default Checkbox;