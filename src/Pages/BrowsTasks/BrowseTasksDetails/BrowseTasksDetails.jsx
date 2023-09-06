import { useContext, useState } from "react";
import { AiOutlineShareAlt, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BsBookmarkPlus, BsHourglassSplit } from "react-icons/bs";
import { FiPlayCircle } from "react-icons/fi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { PiBriefcaseThin } from "react-icons/pi";
import { TbHomeDot } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import ApplyModal from "../../../components/Modal/ApplyModal/ApplyModal";
import Container from "../../../components/Shared/Container/Container";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";

const BrowseTasksDetails = () => {
  const { myProfileData, user } = useContext(AuthContext);
  console.log(myProfileData);
  const {
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
  } = useLoaderData();

  const showInfoCompany = {
    _id,
    title,
    deadline,
  };

  const [isOpenApply, setIsOpenApply] = useState(false);
  const [applied, setApplied] = useState(false);

  const closeApplyModal = () => {
    setIsOpenApply(false);
  };

  const openApplyModal = () => {
    setIsOpenApply(true);
  };

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
          ...myProfileData,
          deadline,
          title,
          companyName,
          taskId: _id,
          email: user?.email,
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

      axios.put(`http://localhost:5000/jobs/${_id}/apply`).then(() => {});
    });
  };

  return (
    <div className="pt-20">
      <Container>
        <section className="my-10 ">
          <div className="flex items-center justify-between gap-5">
            <h1 className="text-center md:text-xl font-semibold text-[#666]">
              {jobType} Based: {title}
            </h1>
            <Link
              target="_blank"
              className="bg-primary hover:bg-hover hover:text-gray-100 rounded-md text-gray-50 py-2 px-3"
              to={attachment}
            >
              Download Attachment
            </Link>
          </div>
          <div className=" mx-auto border rounded-lg mt-7">
            <div className="pb-10">
              <img
                className="w-full h-[500px] object-cover"
                src={thumbnail}
                alt=""
              />
            </div>

            <div className="px-7">
              <div className="mb-5 flex justify-between">
                <div>
                  <h2 className=" text-lg font-semibold text-[#666]">
                    {title}
                  </h2>
                </div>
                <div>
                  <img
                    src={logo}
                    className="rounded-full object-cover w-[60px] h-[60px]"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 my-3 ">
                <TbHomeDot></TbHomeDot>
                <p>{jobType}</p>
              </div>

              <div className="flex gap-16 my-4 justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <FiPlayCircle></FiPlayCircle>
                    <p className="text-sm">START DATE</p>
                  </div>
                  <p>{startDate}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <BiBriefcaseAlt></BiBriefcaseAlt>
                    <p>EXPERIENCE</p>
                  </div>
                  <p>{experience}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <BsHourglassSplit></BsHourglassSplit>
                    <p>APPLY BY</p>
                  </div>
                  <p>{deadline}</p>
                </div>
              </div>

              <div className="flex justify-between mb-5">
                <div className="flex items-center gap-2">
                  <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>
                  <p>{4} applicants</p>
                </div>
                <div className="flex gap-5">
                  <BsBookmarkPlus></BsBookmarkPlus>
                  <AiOutlineShareAlt></AiOutlineShareAlt>
                </div>
              </div>

              <hr />

              <div className="mt-5">
                <h3>How to grading</h3>

                <p>{grading}</p>

                <div className="mt-4 border px-5 py-3 rounded-xl">
                  <h5 className="">Activity on Internshala</h5>
                  <div className="flex gap-7">
                    <div className="flex items-center gap-2">
                      <LiaBusinessTimeSolid></LiaBusinessTimeSolid>
                      <p>{country}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <PiBriefcaseThin></PiBriefcaseThin>
                      <p>{country}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4>About the job</h4>
                  <p>Key responsibilities:</p>
                  <p>{description}</p>
                </div>

                <div>
                  <h3 className="mb-3 mt-5">Skill(s) required</h3>
                  {skills
                    ? skills.map((skill, index) => (
                        <span
                          key={index}
                          className="dark:bg-slate-700 bg-slate-100 py-1 px-2 mr-2  rounded-full text-sm"
                        >
                          {skill.value}
                        </span>
                      ))
                    : "no skills"}
                </div>

                <div className="mt-5">
                  <h3>Number of openings</h3>
                  <p>{3}</p>
                </div>

                <div className="my-5">
                  <button
                    disabled={applied}
                    onClick={handleApply}
                    className={`bg-primary block mx-auto text-gray-100 px-8 py-3 rounded-md hover:bg-[#4ca068] transition  ${
                      applied && "bg-red-300 hover:bg-red-200 cursor-not-allowed"
                    }`}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <ApplyModal
        closeModal={closeApplyModal}
        isOpen={isOpenApply}
        showInfoCompany={showInfoCompany}
      />
    </div>
  );
};

export default BrowseTasksDetails;
