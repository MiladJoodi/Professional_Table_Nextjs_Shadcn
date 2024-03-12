import Image from "next/image";
import TableNew from "../components/table/Table"
import SearchBar from "../components/SearchBar/SearchBar"

export default function Home({searchParams}) {

  const query = searchParams?.query || ''
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar placeHolder="Search nvoice..." />
      <TableNew query={query} />
    </main>
  );
}
