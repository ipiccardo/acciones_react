import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useState, useEffect } from 'react'

const Graph = ({ price, sinceDate, untilDate }: any) => {


    const [chartValues, setChartValues] = useState([])
    const [newChartValues, setNewChartValues] = useState([])

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
        setChartValues(sortedNewValues)
    }, [])

    useEffect(() => {
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

        setNewChartValues(sortedUpdatedValues)
    }, [sinceDate, untilDate])


    console.log(newChartValues, 'nuevos')
    console.log(chartValues, 'originales')

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
                categories: newChartValues.map((time: any) => time.time),
            },
            yAxis: {
                categories: newChartValues.map((price: any) => price.price),
            },
            series: [
                { data: newChartValues.length > 10 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : Array.from({ length: newChartValues.length }, (_, index) => index) }
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