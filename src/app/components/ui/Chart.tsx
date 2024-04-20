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
                <button className='bg-gray-400 w-24 p-2 border-solid border-2 border-black rounded'>Graficar</button>
            </div>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
                <h3>Hovering over {hoverData}</h3>
                <button onClick={updateSeries}>Update Series</button>
            </div>
        </>
    )
}

export default Chart