
import { ActionsTable } from "./components/Table";
import SearchBar from "./components/SearchBar";
import { PaginationTable } from "./components/Pagination";
import api from '../Api'

export default async function Home() {

  const data = await api.list()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar />
      <ActionsTable data={data} />
      <PaginationTable />

    </div>
  );
}
