import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { generatePageNumbers } from '../../utils/utils'
import { InputWithButton } from './Input';

export function PaginationTable({ currentPage, totalPages, setCurrentPage, inputPage, setInputPage }: any) {

    const handlePageChange = (pageNumber: number | string) => {
        setCurrentPage(pageNumber);
    };

    const renderPaginationItems = () => {
        const items = [];
        const pageNumbers = generatePageNumbers(currentPage, totalPages);

        items.push(
            <PaginationItem key="prev">
                <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                />
            </PaginationItem>
        );

        pageNumbers.forEach((pageNumber) => {
            pageNumber !== '...' ?
                items.push(
                    <PaginationItem key={pageNumber}>
                        <PaginationLink
                            href="#"
                            isActive={pageNumber === currentPage}

                            onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </PaginationLink>
                    </PaginationItem>
                ) : items.push(
                    <PaginationItem key={pageNumber}>
                        <div className='pr-2'>
                            {pageNumber}
                        </div>
                    </PaginationItem>
                )
        });
        items.push(
            <PaginationItem key="input">
                <div className='flex'>
                    <InputWithButton
                        type="text"
                        value={inputPage}
                        onChange={(e: any) => setInputPage(e.target.value)}
                        placeholder={`Page (1 - ${totalPages})`}
                        onSubmit={handleGoToPage}
                    />
                </div>
            </PaginationItem>
        );


        items.push(
            <PaginationItem key="next">
                <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                />
            </PaginationItem>
        );
        return items;
    };

    const handleGoToPage = () => {
        const pageNumber = parseInt(inputPage, 10);
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
        setInputPage("");
    };

    return (
        <Pagination>
            <PaginationContent>
                {renderPaginationItems()}
            </PaginationContent>
        </Pagination>
    );
}