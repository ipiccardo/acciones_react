'use client'
import React from 'react'
import SearchBar from './SearchBar'
import { ActionsTable } from './Table'
import { PaginationTable } from './Pagination'
import { useState, useEffect } from 'react'
import { generatePaginationItems, handleGoToPage } from '@/utils/utils'

const HomeLayout = ({ data }: any) => {

    const itemsPerPage = data.length > 50 ? 50 : data.length
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [inputPage, setInputPage] = useState("");

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);

    const currentPageData = data.slice(startIndex, endIndex);

    useEffect(() => {
        setCurrentPage(1)
    }, [data])

    const handlePageChange = (pageNumber: number | string | any) => {
        setCurrentPage(pageNumber);
    };

    const paginationItems = generatePaginationItems(currentPage, totalPages, handlePageChange, inputPage, setInputPage, handleGoToPage, setCurrentPage);
    return (
        <>
            <SearchBar />
            <ActionsTable currentPageData={currentPageData} />
            <PaginationTable paginationItems={paginationItems} />
        </>
    )
}

export default HomeLayout