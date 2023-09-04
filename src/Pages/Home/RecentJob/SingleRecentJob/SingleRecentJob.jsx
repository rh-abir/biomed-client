import React from "react";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const SingleRecentJob = ({ job }) => {
  const {
    // logo,
    location,
    company_name,
    job_type,
    job_title,
    job_description,
    rating,
    salary,
  } = job;

  return (
    <div className="bg-white shadow-lg p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="flex justify-between border-b-2">
        <img
          src=""
          className="rounded-full p-4 object-cover object-center"
        />
        <div className="p-2">
          <p className="text-gray-600 text-base">{location}</p>
          <p className="text-[#1A034B] text-lg font-bold">{company_name}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-2 p-4">
        {job_type.map((type, index) => (
          <div key={index} className="flex items-center mr-2 mb-2">
            <RxCounterClockwiseClock className="text-[#FCB402] mr-1" />
            <p className="text-gray-700">{type}</p>
          </div>
        ))}
      </div>
      <div className="p-4">
        <h2 className="text-xl text-[#060502] font-semibold">{job_title}</h2>
        <div className="mt-4">
          <div className="text-gray-700">{job_description}</div>
        </div>
        <div className="mt-4">
          <div className="text-gray-700">
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
          </div>
          <div className="text-gray-700 flex items-center gap-2 mt-4">
            <BsCurrencyDollar className="text-[#ffb700b0] text-xl" />
            {salary}
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center gap-10">
        <button className="bg-[#5f5e5b] hover:bg-[#474747] text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out">
          <AiOutlinePlus />
        </button>
        <button className="bg-[#e6b949] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Job Detail
        </button>
      </div>
    </div>
  );
};

export default SingleRecentJob;
