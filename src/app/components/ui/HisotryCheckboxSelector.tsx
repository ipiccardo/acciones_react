import React from 'react'
import Checkbox from './Checkbox'
import { SelectedInput } from './SelectInput'

interface HisotryCheckboxSelector {
    isRealTime: boolean,
    setIsRealTime: any,
    handleChange: any,
    price: any,
    handleSelect: any,
    sinceDate: string,
    untilDate: string,
    error: boolean,
    errorMessage: string
}


const HisotryCheckboxSelector = ({ isRealTime, setIsRealTime, handleChange, price, handleSelect, sinceDate, untilDate, error, errorMessage }: HisotryCheckboxSelector) => {
    return (
        <div className='flex gap-10 items-center flex-wrap'>
            <Checkbox children={'Histórico'} checked={isRealTime === false ? true : false} setIsRealTime={setIsRealTime} onChange={handleChange} />
            <div className='flex flex-col gap-4 md:flex md:flex-row'>
                <SelectedInput price={price} placeholder='Fecha hora desde' disabled={isRealTime} handleSelect={handleSelect} sinceDate={sinceDate} />
                <SelectedInput price={price} placeholder='Fecha hora hasta' disabled={isRealTime} handleSelect={handleSelect} untilDate={untilDate} />
            </div>
            {
                error && <p className='text-rose-500'>{errorMessage}</p>
            }
        </div>
    )
}

export default HisotryCheckboxSelector