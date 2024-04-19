'use server'
import React from 'react'
import api from '@/Api'
import DetailShares from './ui/DetailShares'

async function DetailsLogic({ data }: { data: string }) {

    const price = await api.price(data)

    return (
        <>
            <DetailShares price={price} />
        </>
    )

}
export default DetailsLogic



