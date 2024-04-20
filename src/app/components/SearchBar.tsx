'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, ChangeEvent } from 'react'
import SearchBox from "./ui/SearchBox";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
    const [serchBySymbol, setSearchBySymbol] = useState(searchParams.get('q') || '')

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            router.push(`/?q=${searchQuery}`);
        }, 300);

        return () => clearTimeout(debounceTimeout);
    }, [searchQuery, router]);

    useEffect(() => {
        if (serchBySymbol !== '') {
            const debounceTimeout = setTimeout(() => {
                router.push(`/?q=symbol=${serchBySymbol}`);
            }, 300);

            return () => clearTimeout(debounceTimeout);
        } else {
            router.push(`/?q=`);
        }
    }, [router, serchBySymbol]);

    useEffect(() => {
        if (serchBySymbol === '' && searchQuery === '') {
            router.push('/?q=')
        }
    }, [])



    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchBySymbol('')
        setSearchQuery(event.target.value)
    }

    const handleSymbolChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery('')
        setSearchBySymbol(event.target.value)
    }


    return (
        <>
            <div className="flex flex-col w-full gap-8 py-8 md:flex-row ">
                <SearchBox label={'By Name'} onChange={handleInputChange} value={searchQuery} placeholder={'Search by Name...'} />
                <SearchBox label={'By Symbol'} onChange={handleSymbolChange} value={serchBySymbol} placeholder={'Search by Symbol...'} />
            </div>
        </>
    );
}