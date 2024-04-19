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

export function SelectedInput({ price, placeholder, disabled }: { price: { values: Array<any> }, placeholder: string, disabled: boolean }) {

    return (
        <Select disabled={disabled}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{placeholder}</SelectLabel>
                    {
                        price.values?.length &&
                        price.values?.map((date: any) => {
                            return (
                                <SelectItem key={date.datetime} value={date.datetime}>{date.datetime}</SelectItem>
                            )
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}