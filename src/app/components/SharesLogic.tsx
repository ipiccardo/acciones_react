'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { formatDate } from '@/utils/utils';
import IntervalSelector from './ui/IntervalSelector';
import ChartLogic from './ChartLogic';
import RealTimeCheckBox from './ui/RealTimeCheckBox';
import HisotryCheckboxSelector from './ui/HisotryCheckboxSelector';


const SharesLogic = ({ price }: any) => {

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
            <RealTimeCheckBox isRealTime={isRealTime} setIsRealTime={setIsRealTime} handleChange={handleChange} />
            <HisotryCheckboxSelector isRealTime={isRealTime} setIsRealTime={setIsRealTime} handleChange={handleChange} price={price} handleSelect={handleSelect} sinceDate={sinceDate} untilDate={untilDate} />
            <IntervalSelector interval={interval} setInterval={setInterval} />
            <ChartLogic price={newPrice} sinceDate={sinceDate} untilDate={untilDate} isRealTime={isRealTime} interval={interval} setNewCall={setNewCall} newCall={newCall} />
        </>
    )

}

export default SharesLogic