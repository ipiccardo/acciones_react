'use server'
import React from 'react'
import api from '@/Api'
import SharesDetail from './SharesLogic'

async function DetailsCall({ data }: { data: string }) {

    const price = await api.price(data)

    return (
        <>
            <SharesDetail price={price} />
        </>
    )

}
export default DetailsCall



