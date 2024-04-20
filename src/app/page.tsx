import api from '../Api'
import HomeLayout from './components/HomeLayoutLogic'



export default async function Home({ searchParams }: { searchParams: { q: string } }) {

  const data = await api.search(searchParams.q)


  return (
    <div className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <HomeLayout data={data} />
    </div>
  );
}
