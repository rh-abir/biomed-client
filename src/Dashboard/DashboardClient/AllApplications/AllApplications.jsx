import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Select from "react-select";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import AllApplicationsCard from "./AllApplicationsCard";
import Skeleton from "react-loading-skeleton";

const AllApplications = () => {
  const [setValue] = useState(null);
  const [page, setPage] = useState(1);
  const { isLoading, data: AllApplications} = useQuery({
    queryKey: ["shortlistedResumes"],
    queryFn: async () => {
      const res = await axios(
        "/shortlistedResumesData/shortlistedResumesData.json"
      );
      return res.data;
    },
  });
  if (isLoading) {
    return <Skeleton count={10} />;
  }
  // console.log(shortlistedResumes);
  const options = [
    { value: "Newest", label: "Newest" },
    { value: "Last 12 Months", label: "Last 12 Months" },
    { value: "Last 16 Months", label: "Last 16 Months" },
    { value: "Last 24 Months", label: "Last 24 Months" },
    { value: "Last 5 year", label: "Last 5 year" },
  ];
  const selectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#f0f5f7",
      borderRadius: "0.375rem",
      borderColor: "1px solid #ced4da",
      boxShadow: "none",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
  };
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= AllApplications.length / 6 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div className="md:p-20 p-5">
      {/* Title Section */}
      <DashboardTitle
        title={"All Applicants!"}
        slogan={"Ready to jump back in?"}
      />
      <div className="md:mt-10 mt-7 dark:bg-gray-800 dark:text-white bg-white md:p-7 p-5 rounded-xl shadow-sm">
        <div className="md:flex md:justify-between py-2">
          <p className="text-lg font-medium">Applicant</p>
          <div className="md:flex">
            <div className="relative mt-3 md:mt-0">
              <div className="relative mb-0 ">
                <span
                  style={{ lineHeight: "45px" }}
                  className="absolute flex items-center text-gray-600 left-4 h-11 w-11 z-10 text-center "
                >
                  <BiSearch size={20} />
                </span>
                <input
                  className="relative block text-sm max-w-full me-7 w-60 lg:w-72 md:w-52 h-11 leading-6 pt-1 pr-5 pb-1 pl-12 focus:border-transparent focus:outline-none bg-[#f0f5f7] rounded-lg"
                  type="search"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="w-32 mt-2 md:mt-0">
              <Select
                className="text-sm"
                isSearchable={false}
                options={options}
                defaultValue={setValue}
                placeholder="Newest"
                styles={selectStyles}
              />
            </div>
          </div>
        </div>
        <div className="dark:bg-gray-800  bg-[#F5F7FC] p-5 pt-5 rounded-2xl">
          <div className="flex  justify-between gap-x-2  font-semibold">
            <p className="dark:bg-gray-800  p-1 text-blue-600">Total(s):{AllApplications.length}</p>
            <p className=" text-green-600">Approved:2</p>
            <p className="text-red-600">Rejected(s):4</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-9 gap-4 mt-7">
          {AllApplications
            .slice(page * 6 - 6, page * 6)
            .map((shortlistedResume) => (
              <AllApplicationsCard key={shortlistedResume.id}
                shortlistedResume={shortlistedResume} />
            ))}
        </div>
        {AllApplications.length > 0 && (
          <div className="flex md:gap-10 gap-6 justify-center items-center md:mt-20 mt-14 mb-8">
            <FaArrowLeft
              size={18}
              className={
                page > 1
                  ? "flex text-[#696969] hover:text-[#1967d2] items-center cursor-pointer"
                  : "opacity-0"
              }
              onClick={() => selectPageHandler(page - 1)}
            ></FaArrowLeft>
            {[...Array(AllApplications.length / 6)].map((_, i) => {
              return (
                <div
                  className={
                    page === i + 1
                      ? "text-white bg-primary hover:bg-hover w-11 h-11 rounded-full flex items-center justify-center"
                      : "text-[#696969]"
                  }
                  key={i}
                >
                  <button onClick={() => selectPageHandler(i + 1)}>
                    {i + 1}
                  </button>
                </div>
              );
            })}

            <FaArrowRight
              size={18}
              className={
                page < AllApplications.length / 6
                  ? "flex text-[#696969] hover:text-[#1967d2] items-center cursor-pointer"
                  : "opacity-0"
              }
              onClick={() => selectPageHandler(page + 1)}
            ></FaArrowRight>
          </div>
        )}
      </div>
      <p className="text-center mt-20">
        © 2023 Biomed by <span className="text-green-400">ib-themes.</span> All
        Right Reserved.
      </p>
    </div>
  );
};

export default AllApplications;
