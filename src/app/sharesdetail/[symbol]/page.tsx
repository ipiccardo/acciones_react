import React from 'react'
import Header from '../../components/ui/Header'
import Checkbox from '../../components/ui/Checkbox'
import { SelectInterval } from '../../components/ui/SelectInterval'
import Link from 'next/link'
import api from '../../../Api'
import DetailsLogic from '@/app/components/DetailsLogic'

const page = async ({ params }: { params: { symbol: string } }) => {

    const data = await api.fetch(params.symbol)

    const price = await api.price(params.symbol)


    console.log(price)

    if (data) {

        return (
            <div className='max-w-6xl flex flex-col w-full content-center justify-center mx-auto my-0 pt-10'>
                <Header data={data} />
                <DetailsLogic />
                <Link href='/?q='>Back to home</Link>
            </div>
        )
    }

}

export default page