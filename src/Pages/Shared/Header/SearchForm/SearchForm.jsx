import React from "react";

const SearchForm = () => {
  return (
    <div className="2xl:w-80">
      <form>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#5BBB7B] focus:border-[#5BBB7B]"
          placeholder="Search jobs"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-[#5BBB7B] hover:bg-[#52aa6f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
    </div>
  );
};

export default SearchForm;
