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

export function SelectInterval() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a interval" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Intervals</SelectLabel>
                    <SelectItem value="apple">1 min</SelectItem>
                    <SelectItem value="banana">5 min</SelectItem>
                    <SelectItem value="blueberry">15 min</SelectItem>

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
