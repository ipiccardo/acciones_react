'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { formatDate } from '@/utils/utils';
import SharesRender from './ui/SharesRender';


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
            <SharesRender isRealTime={isRealTime} setIsRealTime={setIsRealTime} handleChange={handleChange}
                price={price}
                handleSelect={handleSelect}
                sinceDate={sinceDate}
                untilDate={untilDate}
                interval={interval}
                newPrice={newPrice}
                setNewCall={setNewCall}
                newCall={newCall} />
        </>
    )

}

export default SharesLogic