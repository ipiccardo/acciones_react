import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


interface Chart {
    chartOptions: string,
    hoverData: null,
    updateSeries: any,
    error: boolean,
    isClicked: boolean,
    setIsClicked: any,
    message: string
}


const Chart = ({ chartOptions, hoverData, updateSeries, error, isClicked, setIsClicked, message }: Chart) => {
    return (
        <>
            <div className='flex justify-end w-full max-w-2xl pt-10 pb-10'>
                {
                    !isClicked ? (
                        <button disabled={error} onClick={updateSeries} className={`bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 border border-gray-700 rounded-md transition duration-300 ease-in-out`}>
                            Graficar
                        </button>
                    ) :
                        (
                            <button onClick={() => setIsClicked(false)} className='min-w-[97px] bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 border border-gray-700 rounded-md transition duration-300 ease-in-out'>
                                Stop
                            </button>
                        )
                }
            </div>
            <div>
                {message && <p className='text-red-300'>Aún no se registran transacciones</p>}
            </div>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        </>
    )
}

export default Chart