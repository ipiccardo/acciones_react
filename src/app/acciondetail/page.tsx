import React from 'react'
import Header from '../components/Header'
import Checkbox from '../components/checkbox'

const page = () => {
    return (
        <div className='max-w-6xl flex flex-col w-full content-center justify-center mx-auto my-0 pt-10'>
            <Header />
            <Checkbox children={'Tiempo Real'} />
            <Checkbox children={'Histórico'} />
        </div>
    )
}

export default page