import React from 'react'
import Checkbox from './Checkbox'

const RealTimeCheckBox = ({ isRealTime, setIsRealTime, handleChange }: any) => {
    return (
        <div className='flex gap-10 items-center py-10'>
            <Checkbox children={'Tiempo Real'} checked={isRealTime} setIsRealTime={setIsRealTime} onChange={handleChange} />
        </div>
    )
}

export default RealTimeCheckBox