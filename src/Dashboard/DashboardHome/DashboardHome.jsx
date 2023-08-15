import React from "react";
import { BiBriefcase, BiMessageDetail } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const DashboardHome = () => {
  return (
    <div className="p-6">
      <div>
        <h2 className="text-3xl font-semibold">Dashboard Home!</h2>
        <p className="text-gray-600 text-base py-3">Ready to jump?</p>
        <button className="text-base text-primary hover:text-green-600 flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 lg:hidden">
          <HiOutlineMenuAlt3 /> Menu
        </button>
      </div>
      <div className="mt-6 space-y-8 md:space-y-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-6">
        {/* box-1 */}
        <div className="p-8 flex justify-between w-full bg-white rounded-lg items-center">
          <div className="bg-blue-100 p-4 rounded-lg">
            <BiBriefcase className="text-blue-800  text-5xl" />
          </div>
          <div>
            <p className="text-blue-800 text-4xl font-semibold text-end">22</p>
            <p>Posted Jobs</p>
          </div>
        </div>
        {/* box-2 */}
        <div className="p-8 flex justify-between w-full bg-white rounded-lg items-center">
          <div className="bg-red-100 p-4 rounded-lg">
            <FaRegFileAlt className="text-red-700 text-5xl" />
          </div>
          <div>
            <p className="text-red-700 text-4xl font-semibold text-end">9382</p>
            <p>Application</p>
          </div>
        </div>
        {/* box-3 */}
        <div className="p-8 flex justify-between w-full bg-white rounded-lg items-center">
          <div className="bg-yellow-100 p-4 rounded-lg">
            <BiMessageDetail className="text-yellow-500  text-5xl" />
          </div>
          <div>
            <p className="text-yellow-500 text-4xl font-semibold text-end">74</p>
            <p>Messages</p>
          </div>
        </div>
        {/* box-4 */}
        <div className="p-8 flex justify-between w-full bg-white rounded-lg items-center">
          <div className="bg-green-100 p-4 rounded-lg">
            <GoBookmark className="text-green-700  text-5xl" />
          </div>
          <div>
            <p className="text-green-700 text-4xl font-semibold text-end">32</p>
            <p>Shortlist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
