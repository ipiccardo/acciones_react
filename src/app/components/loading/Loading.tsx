import { Skeleton } from "@/components/ui/skeleton"


export function SkeletonCard() {
    return (
        <div className='flex w-full justify-between border-solid border-neutral-700 px-2 py-2'>
            <Skeleton className="h-4/5 w-4/5 rounded-xl m-auto" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}