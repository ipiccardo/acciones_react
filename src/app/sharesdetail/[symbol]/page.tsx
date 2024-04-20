import React, { Suspense } from 'react'
import Header from '../../components/ui/Header'
import api from '../../../Api'
import DetailsCall from '@/app/components/DetailsCall'
import BackToHome from '@/app/components/ui/BackToHome'

const page = async ({ params, searchParams }: { params: { symbol: string }, searchParams: { name: string } }) => {

    const data = await api.fetch(params.symbol, searchParams.name)

    return (
        <div className='max-w-6xl flex flex-col w-full content-center justify-center mx-auto my-0 p-4 md:p-24'>
            <Header data={data} />
            <Suspense fallback={<div>Loading...</div>}>
                <DetailsCall data={data.symbol} />
            </Suspense>
            <BackToHome />
        </div>
    )
}


export default page