'use client'
import React from 'react'
import SearchBar from './SearchBar'
import { ActionsTable } from './ui/Table'
import { PaginationTable } from './ui/Pagination'
import { useState, useEffect } from 'react'
import { generatePaginationItems, handleGoToPage } from '@/utils/utils'
import { SkeletonInTable } from './loading/skeletonTable'
import { FirstData } from '../../../types'

const HomeLayout = ({ data }: FirstData) => {

    const itemsPerPage = data.length > 50 ? 50 : data.length
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [inputPage, setInputPage] = useState("");
    const [loading, setLoading] = useState(true)

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


    useEffect(() => {
        currentPageData ? setLoading(false) : setLoading(true)
    }, [false])


    const paginationItems = generatePaginationItems(currentPage, totalPages, handlePageChange, inputPage, setInputPage, handleGoToPage, setCurrentPage);
    return (
        <>
            <SearchBar />
            {
                loading ? (
                    <SkeletonInTable />
                ) : (
                    <ActionsTable currentPageData={currentPageData} />
                )
            }
            {
                data.length > 0 && (
                    <PaginationTable paginationItems={paginationItems} />
                )
            }
        </>
    )
}

export default HomeLayout