'use client'
import React from 'react'
import SearchBar from './SearchBar'
import { ActionsTable } from './Table'
import { PaginationTable } from './Pagination'
import { useState } from 'react'

const Display = ({ data }: any) => {

    const itemsPerPage = 50;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [inputPage, setInputPage] = useState("");

    const totalPages = Math.round(data.data.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.data.length);

    const currentPageData = data.data.slice(startIndex, endIndex);



    return (
        <>
            <SearchBar />
            <ActionsTable currentPageData={currentPageData} />
            <PaginationTable setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} setInputPage={setInputPage} inputPage={inputPage} />
        </>
    )
}

export default Display