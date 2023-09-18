/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const { setSearch, setIndustry, getSearchData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchData = form.search.value;
    const industry = form.Categories.value;
    setSearch(searchData);
    setIndustry(industry);
    navigate("/search-show");
  };

  return (
    <div className="lg:flex">
      <div className="border border-gray-700 rounded-lg p-4 max-w-2xl">
        <form onSubmit={handleOnSearch} className="space-y-4">
          <div className=" flex flex-col lg:flex-row lg:flex lg:items-center lg:space-x-4 gap-2 lg:gap-0">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="What are you looking for?"
                  className="w-full py-2 pl-5 pr-4 outline-none rounded-lg border-r dark:border-r-0 dark:bg-gray-800"
                />
              </div>
            </div>
            <div className="lg:w-1/3">
              <select
                name="Categories"
                // onChange={handleCategoryChange}
                id="XBpUo_category"
                className="w-full dark:bg-slate-800 py-2 pl-2 pr-8 rounded-lg outline-none"
              >
                <option>Categories</option>
                <option>Science</option>
                <option>Mathematics</option>
                <option>Literature</option>
                <option>History</option>
                <option>Technology</option>
                <option>Business</option>
                <option>Healthcare</option>
                <option>Arts</option>
                <option>Social Sciences</option>
              </select>
            </div>
            <div className="flex-shrink">
              <button
                type="submit"
                className="px-10 w-full py-4 bg-primary text-white rounded-md hover:bg-hover focus:outline-none focus:ring focus:border-focus focus:ring-opacity-50 "
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
