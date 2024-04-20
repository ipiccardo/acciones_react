import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


interface Chart {
    chartOptions: string,
    hoverData: null,
    updateSeries: any
}


const Chart = ({ chartOptions, hoverData, updateSeries }: Chart) => {
    return (
        <>
            <div className='flex justify-end w-full max-w-2xl pt-10 pb-10'>
                <button onClick={updateSeries} className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 border border-gray-700 rounded-md transition duration-300 ease-in-out">
                    Graficar
                </button>
            </div>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
                <h3>Hovering over {hoverData}</h3>
            </div>
        </>
    )
}

export default Chart