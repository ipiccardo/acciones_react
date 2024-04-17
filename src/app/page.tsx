
import { ActionsTable } from "./components/homeComponents/Table";
import SearchBar from "./components/homeComponents/SearchBar";
import { PaginationTable } from "./components/homeComponents/Pagination";
import api from '../Api'
import Display from "./components/homeComponents/Display";

export default async function Home() {

  const data = await api.list()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Display data={data} />

    </div>
  );
}
