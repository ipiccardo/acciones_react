import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useState, useEffect } from 'react'

const Chart = ({ price, sinceDate, untilDate, isRealTime }: any) => {


    const [chartValues, setChartValues] = useState([])

    const newValues = price.values.map((valor: any) => {
        const updatedDate = valor.datetime >= sinceDate && valor.datetime <= untilDate ? valor.datetime : 'undefined'
        const arrayDeValores = {
            price: valor.open,
            date: updatedDate ? updatedDate : valor.datetime,
            time: valor.datetime.substring(11, valor.datetime.length)
        }
        return arrayDeValores
    })

    const sortedNewValues = newValues.reverse()

    useEffect(() => {
        if (isRealTime) {
            setChartValues(sortedNewValues)
        }
    }, [isRealTime])

    useEffect(() => {
        if (!isRealTime) {
            const updatedValues = price.values.map((valor: any) => {
                const updatedDate = valor.datetime >= sinceDate && valor.datetime <= untilDate ? valor.datetime : ''
                const newArray = {
                    price: valor.open,
                    date: updatedDate,
                    time: valor.datetime.substring(11, valor.datetime.length)
                }
                return newArray
            }).filter((data: any) => data.date)

            const sortedUpdatedValues = updatedValues.reverse()

            setChartValues(sortedUpdatedValues)
        }
    }, [sinceDate, untilDate, isRealTime])

    const [hoverData, setHoverData] = useState(null);
    const [chartOptions, setChartOptions] = useState<any>({
        xAxis: {
            categories: chartValues.map((time: any) => time.time),
        },
        yAxis: {
            categories: chartValues.map((price: any) => price.price),
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
            xAxis: {
                categories: chartValues.map((time: any) => time.time),
            },
            yAxis: {
                categories: chartValues.map((price: any) => price.price),
            },
            series: [
                { data: chartValues.length > 10 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : Array.from({ length: chartValues.length }, (_, index) => index) }
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

export default Chart