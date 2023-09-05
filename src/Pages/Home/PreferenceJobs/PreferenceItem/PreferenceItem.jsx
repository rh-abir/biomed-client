import React from "react";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const PreferenceItem = ({ data }) => {
  const {
    job_name,
    company_logo,
    job_location,
    company_name,
    salary,
    company_description,
  } = data;

  return (
    <div className="dark:bg-gray-800 bg-white shadow-md rounded-lg overflow-hidden flex flex-col w-full h-[485px]">
      <div className="p-6 flex-grow">
        <div className="flex items-center space-x-4">
          <img className="w-16 h-16 rounded-full" src={company_logo} alt="" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{job_name}</h2>
            <h3 className="text-sm text-gray-600">{company_name}</h3>
          </div>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="text-gray-700">
          <div className="flex items-center mb-2">
            <CiLocationOn className="w-4 h-4 mr-2" /> {job_location}
          </div>
          <div className="flex items-center">
            <CiMoneyCheck1 className="w-4 h-4 mr-2" /> {salary} /year
          </div>
        </div>
        <div className="my-5 flex-grow">
          <p>{company_description}</p>
        </div>
      </div>
      <div className="bg-[#5BBB7B] text-white py-2 text-center hover:bg-opacity-90">
        <Link to="/details" className="flex items-center justify-center">
          <span className="mr-1">View details</span>
          <IoIosArrowForward className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default PreferenceItem;
