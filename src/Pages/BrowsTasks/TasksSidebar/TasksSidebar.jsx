import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Select from "react-select";
import { AuthContext } from "../../../Provider/AuthProvider";

const skills = [
  { value: "react", label: "React" },
  { value: "javascript", label: "JavaScript" },
  { value: "vu.js", label: "Vu.js" },
  { value: "angular", label: "Angular" },
  { value: "reactnative", label: "React Native" },
  { value: "wordpress", label: "WordPress" },
  { value: "laravel", label: "Laravel" },
  { value: "devops", label: "Devops" },
  { value: "python", label: "Python" },
];

const options = [
  { value: "Remote", label: "Remote" },
  { value: "Onsite", label: "Onsite" },
  { value: "Internship", label: "Internship" },
  { value: "Contract", label: "Contract" },
  { value: "Part-Time", label: "Part-Time" },
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
const TasksSidebar = ({ browseJobsData, getData }) => {
  // console.log(browseJobsData);
  const { setTasksSidebarToggle } = useContext(AuthContext);
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [value, setValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [filteredData, setFilteredData] = useState();
  // console.log(categoryValue);

  // Search Handler
  const handleSearch = () => {
    const newData = browseJobsData
      .filter((t) => {
        return jobTitle === ""
          ? t
          : t?.title.includes(jobTitle) || jobTitle.toLowerCase() === ""
          ? t
          : t?.title.toLowerCase().includes(jobTitle);
      })
      .filter((l) => {
        return location === ""
          ? l
          : l?.country.includes(location) || location.toLowerCase() === ""
          ? l
          : l?.country.toLowerCase().includes(location);
      })
      .filter((j) => {
        return j?.jobType === (value === "" ? j.jobType : value);
      })
      .filter((c) => {
        const skillData = c?.skills.map((s) => {
          return s?.label;
        });
        return (
          skillData[0] === (categoryValue === "" ? skillData[0] : categoryValue)
        );
      });
    setFilteredData(newData);
  };
  filteredData ? getData(filteredData) : getData(browseJobsData);

  // Clear Handler
  const handleClear = () => {
    setFilteredData(null);
  };
  return (
    <div>
      <div className="px-4 md:px-10 py-5 h-screen bg-white dark:bg-slate-700">
        <div>
          <div className="flex justify-end lg:hidden">
            <button
              onClick={() => setTasksSidebarToggle(false)}
              className="bg-primary p-2 mt-2 rounded-full text-white hover:bg-hover"
            >
              <AiOutlineClose />
            </button>
          </div>
          <h2 className="py-3">Search by Keywords</h2>
          <div className="relative">
            <input
              onChange={(e) => setJobTitle(e.target.value)}
              type="text"
              placeholder="Job title"
              className="w-full py-3 pl-8 md:pl-14 lg:pl-10 rounded-lg  focus:outline-none  focus:ring focus:ring-[#5BBB7B] text-xs md:text-s dark:bg-slate-700"
            />
            <button className="absolute top-0 left-0 bottom-0 w-10 pl-3">
              <BiSearch></BiSearch>
            </button>
          </div>
        </div>
        <div>
          <h2 className="py-3 mt-2">Location</h2>
          <div className="relative">
            <input
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Country"
              className="w-full py-3 pl-8 md:pl-14 lg:pl-10 rounded-lg  focus:outline-none  focus:ring focus:ring-[#5BBB7B] text-xs md:text-sm dark:bg-slate-700"
            />
            <button className="absolute top-0 left-0 bottom-0 w-10 pl-3">
              <CiLocationOn></CiLocationOn>
            </button>
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="mt-5">Job type</h2>
          <div className="w-full mt-2 md:mt-0">
            <Select
              className="text-sm dark dark:bg-slate-700"
              isSearchable={false}
              options={options}
              defaultValue={value}
              onChange={(newValue) => setValue(newValue.label)}
              placeholder="All Jobs Types"
              styles={selectStyles}
            />
          </div>
        </div>
        <div>
          <h2 className="py-3 mt-5">Category</h2>
          <div className="relative">
            <div className="mb-4">
              <Select
                className="text-sm dark:bg-slate-700"
                isSearchable={false}
                options={skills}
                defaultValue={value}
                onChange={(newValue) => setCategoryValue(newValue.label)}
                placeholder="All Jobs Types"
                styles={selectStyles}
              />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="mt-5 -mb-3">Date Posted</h2>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[20px]" />
            <label htmlFor="">Any time</label>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[20px]" />
            <label htmlFor="">Past month</label>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[20px]" />
            <label htmlFor="">Past week</label>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[20px]" />
            <label htmlFor="">Past 24 hours</label>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <button
            onClick={() => handleClear()}
            className="bg-primary text-gray-100 px-8 py-1 rounded-md hover:bg-[#4ca068] transition cursor-pointer"
          >
            Clear
          </button>
          <button
            onClick={() => handleSearch()}
            className="bg-primary text-gray-100 px-8 py-1 rounded-md hover:bg-[#4ca068] transition cursor-pointer"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksSidebar;
