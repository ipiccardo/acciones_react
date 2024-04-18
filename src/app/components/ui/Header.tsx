import React from 'react'

const Header = ({ data }: any) => {


    return (
        <div className='flex w-full justify-between border-b-2 border-solid border-neutral-700 px-2 py-2'>
            <p>{`${data.symbol} - ${data.name} - ${data.currency}`}</p>
            <p>Usuario: Juan</p>
        </div>
    )
}

export default Header