import React from 'react'
import Header from '../components/Header'
import Checkbox from '../components/checkbox'
import Input from '../components/Input'
import { SelectInterval } from '../components/SelectInterval'

const page = () => {
    return (
        <div className='max-w-6xl flex flex-col w-full content-center justify-center mx-auto my-0 pt-10'>
            <Header />
            <div className='flex gap-10 items-center py-10'>
                <Checkbox children={'Tiempo Real'} />
                <SelectInterval />
                <SelectInterval />
            </div>
            <div className='flex gap-10 items-center'>
                <Checkbox children={'Histórico'} />
                <SelectInterval />
            </div>
            <div className='flex justify-end w-full max-w-2xl pt-10'>
                <button className='bg-gray-400 w-24 p-2 border-solid border-2 border-black rounded'>Graficar</button>
            </div>
        </div>
    )
}

export default page