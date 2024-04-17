
import api from '../Api'
import Display from "./components/homeComponents/Display";

export default async function Home({ searchParams }: { searchParams: { q: string } }) {
  const data = await api.search(searchParams.q)


  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Display data={data} />
    </div>
  );
}
