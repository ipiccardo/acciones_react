import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectedInput({ price, placeholder, disabled, handleSelect, sinceDate, untilDate }: { price: { values: Array<any> }, placeholder: string, disabled: boolean, handleSelect: Function, sinceDate?: string, untilDate?: string }) {

    return (
        <div className="flex">
            <Select disabled={disabled}>
                <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder={sinceDate !== '' && untilDate !== '' ? placeholder.includes('desde') ? sinceDate : untilDate : placeholder} />
                </SelectTrigger>
                <SelectContent className="max-h-52">
                    <SelectGroup className="flex flex-col gap-2">
                        <SelectLabel>{placeholder}</SelectLabel>
                        {
                            price.values?.length &&
                            price.values?.map((date: any) => {
                                return (

                                    <input readOnly={true} name={placeholder} className="cursor-pointer py-2 px-1 hover:bg-gray-50" type="select" key={date.datetime} defaultValue={date.datetime} onSelect={(e: any) => handleSelect(e)}></input>

                                )
                            }).reverse()
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}