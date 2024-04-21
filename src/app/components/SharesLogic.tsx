'use client'
import React from 'react'
import { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from 'next/navigation';
import { formatDate } from '@/utils/utils';
import IntervalSelector from './ui/IntervalSelector';
import ChartLogic from './ChartLogic';
import RealTimeCheckBox from './ui/RealTimeCheckBox';
import HisotryCheckboxSelector from './ui/HisotryCheckboxSelector';
import { Price } from '../../../types'


const SharesLogic = ({ price }: any): React.JSX.Element => {

    const params = useParams()

    const [isRealTime, setIsRealTime] = useState(true)

    const [sinceDate, setSinceDate] = useState('')
    const [untilDate, setUntilDate] = useState('')

    const [interval, setInterval] = useState('Select a interval')

    const [newPrice, setNewPrice] = useState<Price>(price)

    const date = new Date()

    const formatedDate = formatDate(date)

    const [newCall, setNewCall] = useState(false)

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsRealTime(e.target.name === 'Histórico' ? false : true);
    };

    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('until date', untilDate)
        if (e.target.name.includes('desde')) {
            if (untilDate !== '' && e.target.value > untilDate) {
                setError(true)
                setErrorMessage('Elegi una fecha anterior a la fecha hasta.')
                setSinceDate('')
            } else {
                setSinceDate(e.target.value)
                setError(false)
                setErrorMessage('')
            }
        } else if (e.target.value > sinceDate) {
            setUntilDate(e.target.value)
            setError(false)
            setErrorMessage('')
        } else {
            setError(true)
            setErrorMessage('Elegi una fecha posterir a la fecha desde.')
            setUntilDate('')
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
        if (interval !== 'Select a interval' && isRealTime) {

            fetch(`/api/intervals/?symbol=${params.symbol}&interval=${interval}&start_date=${formatedDate}`).then((resp) => resp.json()).then((data) => {
                setNewPrice(data.data)
            })
        } else if (interval !== 'Select a interval') {
            fetch(`/api/intervals/?symbol=${params.symbol}&interval=${interval}&start_date=${sinceDate}&end_date=${untilDate}`).then((resp) => resp.json()).then((data) => {
                setNewPrice(data.data)
            })
        }
    }, [newCall, sinceDate, untilDate, interval, isRealTime])

    return (
        <>
            <RealTimeCheckBox isRealTime={isRealTime} setIsRealTime={setIsRealTime} handleChange={handleChange} />
            <HisotryCheckboxSelector isRealTime={isRealTime} setIsRealTime={setIsRealTime} handleChange={handleChange} price={price} handleSelect={handleSelect} sinceDate={sinceDate} untilDate={untilDate} error={error} errorMessage={errorMessage} />
            <IntervalSelector interval={interval} setInterval={setInterval} />
            <ChartLogic price={newPrice} sinceDate={sinceDate} untilDate={untilDate} isRealTime={isRealTime} interval={interval} setNewCall={setNewCall} newCall={newCall} error={error} />
        </>
    )

}

export default SharesLogic