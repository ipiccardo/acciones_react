'use client'

import { useRouter, useSearchParams, redirect } from "next/navigation";
import { useState, useEffect } from 'react'

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
        const debounceTimeout = setTimeout(() => {
            router.push(`/?q=symbol=${serchBySymbol}`);
        }, 300);

        return () => clearTimeout(debounceTimeout);
    }, [router, serchBySymbol]);



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
                <div className="inline-flex gap-2 mb-4">
                    <input className="px-2 border-solid border-2 border-grey rounded" onChange={handleInputChange} type="text" value={searchQuery} />
                    <label>By Name</label>
                </div>
                <div className="inline-flex gap-2 mb-4">
                    <input className="px-2 border-solid border-2 border-grey rounded" onChange={handleSymbolChange} type="text" value={serchBySymbol} />
                    <label>By Symbol</label>
                </div>
            </div>
        </>
    );
}