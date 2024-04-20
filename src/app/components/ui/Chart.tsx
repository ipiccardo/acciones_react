import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


const Chart = ({ chartOptions, hoverData, updateSeries }: any) => {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
            <h3>Hovering over {hoverData}</h3>
            <button onClick={updateSeries}>Update Series</button>
        </div>
    )
}

export default Chart