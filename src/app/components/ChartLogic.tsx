import React from 'react';
import { useState, useEffect } from 'react';
import Chart from './ui/Chart';
import { ChartType } from '../../../types';

const ChartLogic = ({ price, sinceDate, untilDate, isRealTime, interval, setNewCall, newCall }: ChartType) => {

    const newValues = price.values?.map((valor: any) => {
        const arrayDeValores = {
            price: valor.open,
            date: valor.datetime,
            time: valor.datetime.substring(11, valor.datetime.length)
        }
        return arrayDeValores
    })

    const sortedNewValues = newValues?.reverse()

    const [chartValues, setChartValues] = useState(sortedNewValues)

    useEffect(() => {
        if (!isRealTime) {
            const updatedValues = price.values?.map((valor: any) => {
                const updatedDate = valor.datetime >= sinceDate && valor.datetime <= untilDate ? valor.datetime : ''
                const newArray = {
                    price: valor.open,
                    date: updatedDate,
                    time: valor.datetime.substring(11, valor.datetime.length)
                }
                return newArray
            }).filter((data: any) => data.date)

            const sortedUpdatedValues = updatedValues?.reverse()

            setChartValues(sortedUpdatedValues)
        } else {
            setChartValues(sortedNewValues)
            if (isRealTime && interval !== 'Select a interval') {
                const intervalId = setInterval(updateSeries, parseInt(interval === '15min' ? '15' : interval.charAt(0)) * 60 * 1000)
                return () => clearInterval(intervalId);
            }
        }
    }, [sinceDate, untilDate, isRealTime, price])


    const [hoverData, setHoverData] = useState(null);
    const [chartOptions, setChartOptions] = useState<any>({
        xAxis: {
            categories: chartValues?.map((time: any) => time.time.slice(0, 5)),
        },
        yAxis: {
            title: {
                text: 'Precio',
            },
        },
        title: {
            text: `${price.meta?.symbol}`
        },
        series: [
            {
                name: 'intervalo',
                data: chartValues?.map((price: any) => parseFloat(price.price))
            },
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
    }
    );

    const updateSeries = () => {
        setNewCall(!newCall)
        setChartOptions({
            xAxis: {
                categories: chartValues?.map((time: any) => time.time.slice(0, 5)),
            },
            yAxis: {
                title: {
                    text: 'Precio',
                },
            },
            series: [
                {
                    name: 'intervalo',
                    data: chartValues?.map((price: any) => parseFloat(price.price))
                },
            ],
        });
    }

    return (
        <Chart chartOptions={chartOptions} hoverData={hoverData} updateSeries={updateSeries} />
    )
}

export default ChartLogic