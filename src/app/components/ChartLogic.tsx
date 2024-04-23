import React from 'react';
import { useState, useEffect } from 'react';
import Chart from './ui/Chart';
import { ChartType } from '../../../types';
import Swal from 'sweetalert2';


const ChartLogic = ({ price, sinceDate, untilDate, isRealTime, interval, setNewCall, newCall, error }: ChartType) => {


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

    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        if (!isRealTime) {
            const updatedValues: any = price.values?.map((valor: any) => {
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
            setIsClicked(false)
        } else {
            setChartValues(sortedNewValues)
            if (isRealTime && interval !== 'Select a interval' && isClicked) {
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
        subtitle: {
            text: `${chartValues === undefined ? 'Aún no hay movimientos' : price.meta?.exchange}`
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
        if (isRealTime && !isClicked) {
            setIsClicked(true)
        }
        setNewCall(!newCall)
        setChartOptions({
            xAxis: {
                categories: chartValues === undefined ? [price.message] : chartValues?.map((time: any) => time.time.slice(0, 5)),
            },
            yAxis: {
                title: {
                    text: 'Precio',
                },
            },
            series: [
                {
                    name: 'intervalo',
                    data: chartValues === undefined ? [price.message] : chartValues?.map((price: any) => parseFloat(price.price))
                },
            ],
        });
        if (isRealTime) {
            Swal.fire({
                title: 'Intervalo actualizado',
                text: 'Gráfico actializado',
                icon: 'success',
                position: 'top-end',
                timer: 1500,
                showConfirmButton: false
            });
        }
    }

    return (
        <Chart chartOptions={chartOptions} hoverData={hoverData} updateSeries={updateSeries} error={error} isClicked={isClicked} setIsClicked={setIsClicked} message={chartValues === undefined && isClicked ? price?.message : ''} />
    )
}

export default ChartLogic