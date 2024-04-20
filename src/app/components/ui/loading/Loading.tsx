import { Skeleton } from "@/components/ui/skeleton"

const ChartLoader = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[500px] w-[100%] rounded-xl" />
        </div>
    )
}

export default ChartLoader