'use client'

import { useRouter, useSearchParams, redirect } from "next/navigation";
import { useState, useEffect } from 'react'
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



    const handleInputChange = (event: any) => {
        setSearchBySymbol('')
        setSearchQuery(event.target.value)
    }

    const handleSymbolChange = (event: any) => {
        setSearchQuery('')
        setSearchBySymbol(event.target.value)
    }


    return (
        <>
            <div className="flex w-full gap-8">
                <SearchBox label={'By Name'} onChange={handleInputChange} value={searchQuery} />
                <SearchBox label={'By Symbol'} onChange={handleSymbolChange} value={serchBySymbol} />
            </div>
        </>
    );
}