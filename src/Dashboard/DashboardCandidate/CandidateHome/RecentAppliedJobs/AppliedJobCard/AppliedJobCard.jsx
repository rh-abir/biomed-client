import { BsBriefcase, BsClock } from "react-icons/bs";
import { PiMoneyLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const AppliedJobCard = ({ appliedJob }) => {
  const { title, logo, industry, startDate, address } = appliedJob;

  return (
    <div className="xl:flex gap-4 mb-6 border w-full px-6 py-6 lg:py-10 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
      <div>
        <img className="rounded-full h-16 w-16 mb-2 xl:mb-0 border-4 border-white" src={logo} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-2xl font-semibold hover:text-blue-700 duration-500 cursor-pointer mb-2">{title}</h3>

        <div className="lg:flex items-center gap-4 mb-4">
          <p className="flex items-center gap-2">
            <BsBriefcase />
            <span className="text-gray-600">{industry}</span>
          </p>
          <p className="flex items-center gap-2">
            <SlLocationPin />
            <span className="text-gray-600">{address}</span>
          </p>
        </div>
        <div className="lg:flex items-center gap-4">
          <p className="flex items-center gap-2">
            <BsClock />
            <span className="text-gray-600">{startDate}</span>
          </p>
          <p className="flex items-center gap-2">
            <PiMoneyLight />
            <span className="text-gray-600">$90,000 - $120,000</span>
          </p>
        </div>
        {/* Badge Container */}
        <div className="flex gap-2 mt-2">
          <button className="bg-green-500 text-white rounded-full px-3 py-1 text-sm">Remote</button>
          <button className="bg-red-500 text-white rounded-full px-3 py-1 text-sm">Urgent</button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
