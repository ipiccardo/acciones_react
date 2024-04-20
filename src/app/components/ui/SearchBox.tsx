import React from 'react'

interface SearchBox {
    label: string,
    onChange: any,
    value: string,
    placeholder: string
}

const SearchBox = ({ label, onChange, value, placeholder }: SearchBox) => {
    return (

        <div className="inline-flex gap-2 mb-4">
            <input className="px-2 border-solid border-2 border-grey rounded placeholder-gray-500 placeholder-opacity-50 placeholder:italic" onChange={onChange} type="text" value={value} placeholder={placeholder} />
            <label>{label}</label>
        </div>
    )
}

export default SearchBox