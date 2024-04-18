'use client'

import { useRouter, useSearchParams, redirect } from "next/navigation";
import { useState, useEffect } from 'react'

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            router.push(`/?q=${searchQuery}`);
        }, 300);

        return () => clearTimeout(debounceTimeout);
    }, [searchQuery, router]);

    const handleInputChange = (event: any) => {
        setSearchQuery(event.target.value)

    }

    return (
        <>
            <form className="inline-flex gap-2 mb-4">
                <input className="px-2 border-solid border-2 border-grey rounded" onChange={handleInputChange} type="text" value={searchQuery} />
                <label>Search</label>
            </form>
        </>
    );
}