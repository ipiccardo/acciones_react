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

export function SelectedInput({ price, placeholder, disabled, handleSelect, sinceDate, untilDate }: { price: { values: Array<any> }, placeholder: string, disabled: boolean, handleSelect: Function, sinceDate?: string, untilDate?: string }) {


    return (
        <Select disabled={disabled}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={sinceDate !== '' && untilDate !== '' ? placeholder.includes('desde') ? sinceDate : untilDate : placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="flex flex-col gap-2">
                    <SelectLabel>{placeholder}</SelectLabel>
                    {
                        price.values?.length &&
                        price.values?.map((date: any) => {
                            return (
                                <input name={placeholder} className="cursor-pointer py-2 px-1 hover:bg-gray-50" type="select" key={date.datetime} defaultValue={date.datetime} onSelect={(e: any) => handleSelect(e)}></input>
                            )
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}