import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export function SelectInterval({ setInterval, interval }: any) {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={interval} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="flex flex-col gap-2">
                    <SelectLabel>Intervals</SelectLabel>
                    <input className="cursor-pointer py-2 px-1 hover:bg-gray-50" key={'1min'} defaultValue={'1min'} type='select' name="1min" onSelect={(e: any) => setInterval(e.target.value)}></input>
                    <input className="cursor-pointer py-2 px-1 hover:bg-gray-50" key={'5min'} defaultValue={'5min'} type='select' name="5min" onSelect={(e: any) => setInterval(e.target.value)}></input>
                    <input className="cursor-pointer py-2 px-1 hover:bg-gray-50" key={'15min'} defaultValue={'15min'} type='select' name="15min" onSelect={(e: any) => setInterval(e.target.value)}></input>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
