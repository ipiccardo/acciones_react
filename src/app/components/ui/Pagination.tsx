import React from 'react';
import {
    Pagination,
    PaginationContent,
} from "@/components/ui/pagination";


export function PaginationTable({ paginationItems }: any) {
    return (
        <Pagination>
            <PaginationContent className='flex-col md:flex-row'>
                {paginationItems.map((item: any) => (
                    <React.Fragment key={item.key}>
                        {item.component}
                    </React.Fragment>
                ))}
            </PaginationContent>
        </Pagination>
    );

}