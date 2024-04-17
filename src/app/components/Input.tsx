import React from 'react'

const Input = ({ placeHolder }: any) => {
    return (
        <div>
            <input type={'date'} name={'fecha'} placeholder={placeHolder}>
            </input>
        </div>
    )
}

export default Input