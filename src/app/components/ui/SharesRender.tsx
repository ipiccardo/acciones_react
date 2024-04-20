import React from 'react'
import Checkbox from '../ui/Checkbox';
import { SelectedInput } from '../ui/SelectInput';
import { SelectInterval } from '../ui/SelectInterval';
import ChartLogic from '../ChartLogic';

const SharesRender = ({ isRealTime, setIsRealTime, handleChange, price, handleSelect, sinceDate, untilDate, interval, newPrice, setNewCall, newCall }: any) => {
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
                <ChartLogic price={newPrice} sinceDate={sinceDate} untilDate={untilDate} isRealTime={isRealTime} interval={interval} setNewCall={setNewCall} newCall={newCall} />
            </div>
        </>
    )
}

export default SharesRender