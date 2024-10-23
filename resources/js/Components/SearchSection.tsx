import { Search } from "lucide-react";

type Props = {
  setSearchInput: (input: string) => void;
};

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div
      className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 rounded-lg text-white flex flex-col gap-2 
    justify-center items-center"
    >
      <h1 className="text-3xl font-bold text-center">Browse all templates</h1>
      <p className="text-center">What would you like to create today?</p>

      <div className="w-full">
        <div className="flex items-center gap-2 p-2 my-2 border rounded-lg bg-white w-full md:w-[50%] lg:w-[30%] mx-auto">
          <Search className="text-primary"></Search>

          <input
            type="text"
            className="w-full outline-none border-none bg-transparent focus:outline-none focus:ring-0 text-gray-500"
            placeholder="Search"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
