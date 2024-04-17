'use client'

import { useRouter, useSearchParams, redirect } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const query = event.currentTarget.query.value;
        router.push(`/?q=${query}`);
    }


    return (
        <form onSubmit={handleSubmit} className="inline-flex gap-2 mb-4">
            <input defaultValue={searchParams.get('q') || ''} className="px-2 border-solid border-2 border-grey rounded" name="query" />
            <button type="submit" className="p-2 bg-white/20">Search</button>
        </form>
    );
}