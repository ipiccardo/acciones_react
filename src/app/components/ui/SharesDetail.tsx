'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import { SelectedInput } from './SelectInput';
import { SelectInterval } from './SelectInterval';
import Graph from './Chart';
import { useParams } from 'next/navigation';
import { formatDate } from '@/utils/utils';


const SharesDetail = ({ price }: any) => {

    const params = useParams()

    const [isRealTime, setIsRealTime] = useState(true)

    const [sinceDate, setSinceDate] = useState('')
    const [untilDate, setUntilDate] = useState('')

    const [interval, setInterval] = useState('Select a interval')

    const [newPrice, setNewPrice] = useState(price)

    const date = new Date()

    const formatedDate = formatDate(date)

    const [newCall, setNewCall] = useState(false)

    const handleChange = (e: any) => {
        setIsRealTime(e.target.name === 'Histórico' ? false : true);
    };

    const handleSelect = (e: any) => {
        if (e.target.name.includes('desde')) {
            setSinceDate(e.target.value)
        } else {
            setUntilDate(e.target.value)
        }
    }

    useEffect(() => {
        if (isRealTime) {
            setSinceDate('')
            setUntilDate('')
        } else {
            setNewPrice(price)
        }
    }, [isRealTime])





    useEffect(() => {
        if (interval !== 'Select a interval') {
            fetch(`/api/intervals/?symbol=${params.symbol}&interval=${interval}&start_date=${formatedDate}`).then((resp) => resp.json()).then((data) => {
                setNewPrice(data.data)
            })
        }
    }, [interval, newCall])


    return (
        <>
            <div className='flex gap-10 items-center py-10'>
                <Checkbox children={'Tiempo Real'} checked={isRealTime} setIsRealTime={setIsRealTime} onChange={handleChange} />
            </div>
            <div className='flex gap-10 items-center'>
                <Checkbox children={'Histórico'} checked={isRealTime === false ? true : false} setIsRealTime={setIsRealTime} onChange={handleChange} />
                <SelectedInput price={price} placeholder='Fecha hora desde' disabled={isRealTime} handleSelect={handleSelect} sinceDate={sinceDate} />
                <SelectedInput price={price} placeholder='Fecha hora hasta' disabled={isRealTime} handleSelect={handleSelect} untilDate={untilDate} />
            </div>
            <div className='flex gap-10 items-center py-10'>
                <p>Intervalo</p>
                <SelectInterval setInterval={setInterval} interval={interval} />
            </div>
            <div className='flex justify-end w-full max-w-2xl pt-10 pb-10'>
                <button className='bg-gray-400 w-24 p-2 border-solid border-2 border-black rounded'>Graficar</button>
            </div>
            <div>
                <Graph price={newPrice} sinceDate={sinceDate} untilDate={untilDate} isRealTime={isRealTime} interval={interval} setNewCall={setNewCall} newCall={newCall} />
            </div>
        </>
    )

}

export default SharesDetail