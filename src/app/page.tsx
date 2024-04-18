
import api from '../Api'
import Display from "./components/Display";
import SearchBar from './components/SearchBar';
import { ActionsTable } from './components/Table';
import { Suspense } from 'react';
import { redirect } from 'next/navigation'
import { useDebouncedCallback } from "use-debounce";

export default async function Home({ searchParams }: { searchParams: { q: string } }) {


  const data = await api.search(searchParams.q)

  const currentPageData = data.slice(0, 50);


  if (data.length === 0) {
    redirect('/?q=')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar />
      <Suspense fallback={<h1>Loading........</h1>}>
        <ActionsTable currentPageData={currentPageData} />
      </Suspense>
    </div>
  );
}
