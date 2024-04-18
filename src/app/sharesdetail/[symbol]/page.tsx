import React from 'react'
import Header from '../../components/ui/Header'
import Checkbox from '../../components/ui/Checkbox'
import { SelectInterval } from '../../components/ui/SelectInterval'
import Link from 'next/link'
import api from '../../../Api'

const page = async ({ params }: { params: { symbol: string } }) => {

    const data = await api.fetch(params.symbol)


    if (data) {

        return (
            <div className='max-w-6xl flex flex-col w-full content-center justify-center mx-auto my-0 pt-10'>
                <Header data={data} />
                <div className='flex gap-10 items-center py-10'>
                    <Checkbox children={'Tiempo Real'} />
                </div>
                <div className='flex gap-10 items-center'>
                    <Checkbox children={'Histórico'} />
                    <SelectInterval />
                    <SelectInterval />
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
                <Link href='/?q='>Back to home</Link>
            </div>
        )
    }

}

export default page