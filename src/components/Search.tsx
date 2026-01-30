import { Search } from "@/lib/icons";

const SearchModule = () => {
  return (
    <div className="relative w-full max-w-40 hidden xl:block">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full border-0 border-b border-gray-300 bg-transparent py-2 pr-10 text-sm outline-none focus:border-gray-500 transition"
      />

      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-lg">
        <Search />
      </div>
    </div>
  );
};

export default SearchModule;
