import React from 'react'
import { SelectInterval } from './SelectInterval'

interface IntervalSelector {
    setInterval: any,
    interval: string
}

const IntervalSelector = ({ setInterval, interval }: IntervalSelector) => {
    return (
        <div className='flex gap-10 items-center py-10'>
            <p>Intervalo</p>
            <SelectInterval setInterval={setInterval} interval={interval} />
        </div>
    )
}

export default IntervalSelector