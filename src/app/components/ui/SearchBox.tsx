import React from 'react'

const SearchBox = ({ label, onChange, value, props, children }: any) => {
    return (

        <div className="inline-flex gap-2 mb-4">
            <input className="px-2 border-solid border-2 border-grey rounded" onChange={onChange} type="text" value={value} />
            <label>{label}</label>
        </div>
    )
}

export default SearchBox