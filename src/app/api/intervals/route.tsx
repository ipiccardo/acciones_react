import type { NextRequest } from "next/server";

const apiKey = process.env.REACT_APP_API_KEY_B;

export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url);
    const params = searchParams.get("symbol");
    const interval = searchParams.get("interval")
    const date = searchParams.get("start_date")
    const endDate = searchParams.get("end_date")

    const symbol = params

    // const res = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&start_date=2021-04-16%2009:48:00'&end_date=2021-04-16%2019:48:00&apikey=${apiKey}`,

    const res = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&start_date=${date}&${endDate && `end_date=${endDate}`}&apikey=${apiKey}`,

    )
    const data = await res.json()



    return Response.json({ data })
}