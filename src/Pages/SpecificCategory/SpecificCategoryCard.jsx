  import axios from "axios";
import { useContext, useState } from "react";
import { AiOutlineClockCircle, AiOutlineFileDone } from "react-icons/ai";
import { FaIndustry } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
  
  import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
  
  const SpecificCategoryCard = ({ singleData }) => {
    const { adminRole, clientRole } = useContext(AuthContext);
    const [isbookMark, setIsbookMark] = useState(false);
  
    const { user } = useContext(AuthContext);
    // const BookMarkUserEmail = user?.email;
  
    const {
      industry,
      date,
      _id,
      country,
      deadline,
      companyName,
      description,
      experience,
      jobType,
      logo,
      thumbnail,
      skills,
      startDate,
      title,
      attachment,
      grading,
      appliedCount,
    } = singleData;
  
    const currentDate = new Date();
    const taskDate = new Date(date);
    const timeDifference = currentDate - taskDate;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    const isDisabled = adminRole || clientRole;
    // const BookMarkData = { task, BookMarkUserEmail };
  
    // console.log(task);
  
    // const handleBookmark = () => {
    //   setIsbookMark(true);
  
    //   if (!isbookMark) {
    //     axios.post("https://biomed-server.vercel.app/bookmark", BookMarkData).then((res) => {
    //       if (res.data.acknowledged) {
    //         toast.success("Successfully Bookmark!");
    //       }
    //     });
    //   }
    // };
  
    const [applied, setApplied] = useState(false);
  
    // Apply functionality
    const handleApply = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Apply",
      }).then((result) => {
        if (result.isConfirmed) {
          const applyJob = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
            deadline,
            title,
            companyName,
            country,
            description,
            experience,
            jobType,
            logo,
            thumbnail,
            skills,
            startDate,
            attachment,
            grading,
            isApplied: true,
            taskId: _id,
          };
  
          axios
            .post("https://biomed-server.vercel.app/appliedjob", applyJob)
            .then((response) => {
              if (response.data.acknowledged) {
                setApplied(true);
                Swal.fire("Applied", "Your are successfully apply.", "success");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
  
        axios
          .put(`https://biomed-server.vercel.app/jobs/${_id}/apply`)
          .then(() => {});
      });
    };
  
    return (
      <div className="border p-7 flex flex-col hover:border-hover transition rounded-md w-full dark:border-slate-700 dark:hover:border-slate-600">
        <div className="flex items-center justify-between mb-5">
          <div className="text-3xl font-bold text-gray-600">
            <h2>{title}</h2>
          </div>
          {/* <div className=" cursor-pointer" onClick={handleBookmark}>
            {isbookMark ? (
              <button className="cursor-not-allowed" disabled={true}>
                <BsBookmarkPlus className="text-xl md:text-2xl text-red-400 " />
              </button>
            ) : (
              <BsBookmarkPlus className="text-xl md:text-2xl" />
            )}
          </div> */}
        </div>
  
        <div className="flex items-center gap-5 mb-5">
          <div>
            <img
              className="h-12 w-14 lg:w-20 xl:w-16 xl:h-14 2xl:h-16 bg-gray-50  object-cover rounded-full"
              src={logo}
              alt="logo"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-600">
              Task type: <span className="text-lg">{jobType}</span>
            </h2>
          </div>
        </div>
  
        <div className="grid 2xl:grid-cols-2 justify-center gap-3 xl:gap-5 mb-5">
          <div className="flex gap-2 items-center text-base xl:text-lg text-gray-500 font-semibold">
            <FaIndustry className="md:text-2xl lg:text-base xl:text-3xl text-primary" />{" "}
            {industry}
          </div>
          <div className="flex gap-2 items-center text-base xl:text-lg text-gray-500 font-semibold">
            <MdLocationOn className="md:text-2xl lg:text-base xl:text-3xl text-primary" />{" "}
            {country}
          </div>
          <div className="flex gap-2 items-center text-base xl:text-lg text-gray-500 font-semibold">
            <AiOutlineClockCircle className="md:text-2xl lg:text-base xl:text-3xl text-primary" />{" "}
            {daysAgo === 0
              ? "Today"
              : `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`}
          </div>
          <div className="flex gap-2 items-center text-base xl:text-lg text-gray-500 font-semibold">
            <AiOutlineFileDone className="md:text-2xl lg:text-base xl:text-3xl text-primary" />{" "}
            {appliedCount ? appliedCount : "No"} Applied
          </div>
        </div>
  
        <div className="flex flex-col xl:flex-row items-center space-y-2 xl:space-y-0 gap-3 mb-2">
          <div className="border-2 rounded-3xl text-xs xl:text-sm px-3 py-1 dark:bg-slate-700 bg-gray-100">
            {startDate}
          </div>
          <div className="border-2 rounded-3xl text-xs xl:text-sm px-3 py-1 dark:bg-slate-700 bg-gray-100">
            {industry}
          </div>
        </div>
  
        <div className="my-5">
          <h2 className="text-lg">
            <span className="font-semibold">Dead line:</span> {deadline}
          </h2>
        </div>
  
        <div className="line-clamp-3 mb-5">{description}</div>
  
        <div className="mt-auto grid grid-cols-2 gap-5">
          {!isDisabled ? (
            <Link
              disabled={applied}
              onClick={handleApply}
              className={`flex items-center justify-center bg-[#7566D9] py-3 text-gray-200 rounded-lg text-base lg:text-sm xl:text-lg ${
                applied && "bg-red-300 hover:bg-red-200 cursor-not-allowed"
              }`}
            >
              Apply Now
            </Link>
          ) : (
            <div
              className={`flex items-center justify-center bg-[#7566D9] py-3 text-gray-200 text-base lg:text-sm xl:text-lg rounded-lg ${
                isDisabled ? "cursor-not-allowed" : ""
              }`}
              onClick={(e) => {
                if (isDisabled) {
                  e.preventDefault();
                }
              }}
            >
              Apply Now
            </div>
          )}
          <Link
            className={
              "flex items-center justify-center bg-primary py-3 text-base lg:text-sm xl:text-lg text-gray-200 rounded-lg"
            }
            to={`/tasksDatail/${_id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    );
  };
  
  export default SpecificCategoryCard;
  
