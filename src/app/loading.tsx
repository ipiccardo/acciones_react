import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125vh] w-[250vw] rounded-xl" />
        </div>
    )
}

export default loading