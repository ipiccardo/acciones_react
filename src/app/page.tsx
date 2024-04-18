
import api from '../Api'
import HomeLayout from './components/HomeLayoutLogic'
import SearchBar from './components/SearchBar';
import { ActionsTable } from './components/Table';
import { redirect } from 'next/navigation'


export default async function Home({ searchParams }: { searchParams: { q: string } }) {

  const data = await api.search(searchParams.q)

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <HomeLayout data={data} />
    </div>
  );
}
