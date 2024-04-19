import React, { Suspense } from 'react'
import Header from '../../components/ui/Header'
import Checkbox from '../../components/ui/Checkbox'
import { SelectInterval } from '../../components/ui/SelectInterval'
import Link from 'next/link'
import api from '../../../Api'
import DetailsLogic from '@/app/components/DetailsLogic'
import { SkeletonCard } from '@/app/components/loading/Loading'

const page = async ({ params }: { params: { symbol: string } }) => {

    const data = await api.fetch(params.symbol)

    return (
        <div className='max-w-6xl flex flex-col w-full content-center justify-center mx-auto my-0 pt-10'>
            <Header data={data} />
            <Suspense fallback={<div>Loading...</div>}>
                <DetailsLogic data={data.symbol} />
            </Suspense>
            <Link href='/?q='>Back to home</Link>
        </div>
    )
}


export default page