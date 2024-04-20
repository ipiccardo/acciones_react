'use server'
import React from 'react'
import api from '@/Api'
import SharesLogic from './SharesLogic'



async function DetailsCall({ data }: { data: string }) {

    const price = await api.price(data)

    return <SharesLogic price={price} />

}
export default DetailsCall



