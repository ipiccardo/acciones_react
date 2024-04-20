import React from 'react'
import { SelectInterval } from './SelectInterval'

const IntervalSelector = ({ setInterval, interval }: any) => {
    return (
        <div className='flex gap-10 items-center py-10'>
            <p>Intervalo</p>
            <SelectInterval setInterval={setInterval} interval={interval} />
        </div>
    )
}

export default IntervalSelector