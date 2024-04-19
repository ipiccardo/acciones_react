'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Checkbox from '../components/ui/Checkbox'
import { SelectInterval } from '../components/ui/SelectInterval'
import { Input } from '@/components/ui/input'
import { SelectedInput } from '../components/ui/SelectInput'

const DetailsLogic = ({ price }: { price: { values: Array<any> } }) => {

    const [isRealTime, setIsRealTime] = useState(true)
    const handleChange = (e: any) => {
        setIsRealTime(e.target.name === 'Histórico' ? false : true);
    };

    if (price) {
        return (
            <>
                <div className='flex gap-10 items-center py-10'>
                    <Checkbox children={'Tiempo Real'} checked={isRealTime} setIsRealTime={setIsRealTime} onChange={handleChange} />
                </div>
                <div className='flex gap-10 items-center'>
                    <Checkbox children={'Histórico'} checked={isRealTime === false ? true : false} setIsRealTime={setIsRealTime} onChange={handleChange} />
                    <SelectedInput price={price} placeholder='Fecha hora desde' disabled={isRealTime} />
                    <SelectedInput price={price} placeholder='Fecha hora hasta' disabled={isRealTime} />
                </div>
                <div className='flex gap-10 items-center py-10'>
                    <p>Intervalo</p>
                    <SelectInterval />
                </div>
                <div className='flex justify-end w-full max-w-2xl pt-10'>
                    <button className='bg-gray-400 w-24 p-2 border-solid border-2 border-black rounded'>Graficar</button>
                </div>
                <div>
                    {/* ACA VA EL GRÁFICO */}
                </div>
            </>
        )
    }
}

export default DetailsLogic