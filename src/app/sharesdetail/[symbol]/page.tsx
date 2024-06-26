import React, { Suspense } from 'react'
import Header from '../../components/ui/Header'
import api from '../../../Api'
import DetailsCall from '@/app/components/DetailsCall'
import BackToHome from '@/app/components/ui/BackToHome'
import ChartLoader from '@/app/components/ui/loading/Loading'
// import { Skeleton } from '@/components/ui/skeleton'

const page = async ({ params, searchParams }: { params: { symbol: string }, searchParams: { name: string } }) => {

    const data = await api.fetch(params.symbol, searchParams.name)

    return (
        <div className='max-w-6xl flex flex-col w-full content-center justify-center mx-auto my-0 p-4 md:p-24'>
            <Header data={data} />
            <BackToHome />
            <Suspense fallback={<ChartLoader />}>
                <DetailsCall data={data.symbol} />
            </Suspense>
        </div>
    )
}


export default page