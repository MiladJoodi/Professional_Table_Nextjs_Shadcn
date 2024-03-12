import Image from "next/image";
import TableNew from "../components/table/Table"
import SearchBar from "../components/SearchBar/SearchBar"

export default function Home({searchParams}) {

  const query = searchParams?.query || ''
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <SearchBar placeHolder="Search invoice..." />
      <TableNew query={query} />
    </main>
  );
}
