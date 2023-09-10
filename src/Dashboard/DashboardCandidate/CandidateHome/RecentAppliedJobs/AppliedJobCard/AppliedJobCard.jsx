import { BsBriefcase, BsClock } from "react-icons/bs";
import { PiMoneyLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const AppliedJobCard = ({ appliedJob }) => {
  const { name, image, company, applied_time, job_type, location, salary } =
    appliedJob;

  return (
    <div className="xl:flex gap-4 mb-2 border w-full px-5 py-5 lg:py-10 rounded-xl">
      <div>
        <img className="rounded-md h-12 w-12 mb-2 xl:mb-0" src={image} alt="" />
      </div>
      <div>
        <h3 className="text-xl font-semibold hover:text-blue-700 duration-500 cursor-pointer">{name}</h3>

        <div className="lg:flex items-center gap-4">
          <p className="flex items-center gap-1">
            <BsBriefcase />
            <span>{company}</span>
          </p>
          <p className="flex items-center gap-1">
            <SlLocationPin />
            <span>{location}</span>
          </p>
        </div>
        <div className="lg:flex items-center gap-4">
          <p className="flex items-center gap-1">
            <BsClock />
            <span>{applied_time}</span>
          </p>
          <p className="flex items-center gap-1">
            <PiMoneyLight />
            <span>{salary}</span>
          </p>
        </div>
        {/* Badge Container */}
        
          <div className="flex flex-col md:flex-row text-center mx-10 md:mx-0 space-y-1 md:space-y-0 mt-3">
            {job_type?.map((typeData, index) => (
              <span
                key={index}
                className={`text-white text-sm px-3 py-1 rounded-full border ${typeData.color} ml-2`}
              >
                {typeData.type}
              </span>
            ))}
          </div>
       
      </div>
    </div>
  );
};

export default AppliedJobCard;
