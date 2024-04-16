
import { ActionsTable } from "./components/Table";
import SearchBar from "./components/SearchBar";
import { PaginationTable } from "./components/Pagination";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar />
      <ActionsTable />
      <PaginationTable />

    </div>
  );
}
