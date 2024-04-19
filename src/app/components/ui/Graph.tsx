import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useState } from 'react'

const Graph = ({ price }: any) => {

    const newValues = price.values.map((valor: any) => {
        const arrayDeValores = {
            price: valor.open,
            date: valor.datetime,
            time: valor.datetime.substring(11, valor.datetime.length)
        }
        return arrayDeValores
    })

    const sortedNewValues = newValues.reverse()


    const [hoverData, setHoverData] = useState(null);
    const [chartOptions, setChartOptions] = useState<any>({
        xAxis: {
            categories: sortedNewValues.map((time: any) => time.time),
        },
        yAxis: {
            categories: sortedNewValues.map((price: any) => price.price),
        },
        title: {
            text: `${price.meta.symbol}`
        },
        series: [
            { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
        ],
        plotOptions: {
            series: {
                point: {
                    events: {
                        mouseOver(e: any) {
                            setHoverData(e.target.category)
                        }
                    }
                }
            }
        }
    });

    const updateSeries = () => {
        setChartOptions({
            series: [
                { data: [Math.random() * 5, 2, 1] }
            ]
        });
    }

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

export default Graph