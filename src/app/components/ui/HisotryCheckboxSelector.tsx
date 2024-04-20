import React from 'react'
import Checkbox from './Checkbox'
import { SelectedInput } from './SelectInput'

const HisotryCheckboxSelector = ({ isRealTime, setIsRealTime, handleChange, price, handleSelect, sinceDate, untilDate }: any) => {
    return (
        <div className='flex gap-10 items-center'>
            <Checkbox children={'Histórico'} checked={isRealTime === false ? true : false} setIsRealTime={setIsRealTime} onChange={handleChange} />
            <SelectedInput price={price} placeholder='Fecha hora desde' disabled={isRealTime} handleSelect={handleSelect} sinceDate={sinceDate} />
            <SelectedInput price={price} placeholder='Fecha hora hasta' disabled={isRealTime} handleSelect={handleSelect} untilDate={untilDate} />
        </div>
    )
}

export default HisotryCheckboxSelector