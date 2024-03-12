import Image from "next/image";
import TableNew from "../components/table/Table"
import SearchBar from "../components/SearchBar/SearchBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar placeHolder="Search invoice..." />
      <TableNew />
    </main>
  );
}
