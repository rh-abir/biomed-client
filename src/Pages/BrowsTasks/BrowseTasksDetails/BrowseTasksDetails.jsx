import axios from "axios";
import copy from "clipboard-copy";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineShareAlt, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiBriefcaseAlt, BiSolidCopyAlt } from "react-icons/bi";
import { BsBookmarkPlus, BsHourglassSplit } from "react-icons/bs";
import { FiPlayCircle } from "react-icons/fi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { PiBriefcaseThin } from "react-icons/pi";
import { TbHomeDot } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import Container from "../../../components/Shared/Container/Container";

const BrowseTasksDetails = () => {
  const shareUrl = window.location.href;
  const { user, adminRole, clientRole } = useContext(AuthContext);
  console.log(user);
  const {
    _id,
    email,
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
  } = useLoaderData();

  console.log(country);

  const [applied, setApplied] = useState(false);
  const isDisabled = adminRole || clientRole;

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
          instrucurEmail: email,
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
          message: [{ text: `${user?.displayName} is Applied` }],
        };

        axios
          .post("http://localhost:5000/appliedjob", applyJob)
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

  const [seeLink, setSeeLink] = useState(false);

  const handleCopyLink = () => {
    const postLink = window.location.href;
    copy(postLink)
      .then(() => {
        // setCopySuccess(true);
        toast.success("Successfully copy linked");
        setSeeLink(false);
      })
      .catch((error) => console.error("Copy failed: ", error));
  };

  return (
    <div className="pt-20">
      <Container>
        <section className="my-10">
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
          <div className="grid lg:grid-cols-2">
            <div>
              <div className=" mx-auto rounded-lg mt-7">
                <div className="pb-10">
                  <img
                    className="w-full h-[500px] object-cover rounded-lg"
                    src={thumbnail}
                    alt="browser details thumbnail"
                  />
                </div>
              </div>
            </div>

            <div className="px-7 py-7">
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
                <TbHomeDot />
                <p>Task Type: {jobType}</p>
              </div>

              <div className="flex gap-16 my-4 justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <FiPlayCircle />
                    <p className="text-sm">START DATE</p>
                  </div>
                  <p>{startDate}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <BiBriefcaseAlt />
                    <p>EXPERIENCE</p>
                  </div>
                  <p>{experience}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <BsHourglassSplit />
                    <p>APPLY BY</p>
                  </div>
                  <p>{deadline}</p>
                </div>
              </div>

              <div className="flex justify-between mb-5">
                <div className="flex items-center gap-2">
                  <AiOutlineUsergroupAdd />
                  <p>{appliedCount ? appliedCount : "No"} applicants</p>
                </div>
                <div className="flex gap-5">
                  <BsBookmarkPlus className="text-3xl" />
                  <div className="relative">
                    <AiOutlineShareAlt
                      onClick={() => {
                        setSeeLink(!seeLink);
                      }}
                      className="text-3xl cursor-pointer"
                    />
                    {seeLink && (
                      <div className="absolute -right-12 flex gap-2 items-center py-2 px-3 bg-gray-200 rounded-lg mt-3 w-52">
                        <button onClick={handleCopyLink}>
                          <BiSolidCopyAlt className="text-4xl" />
                        </button>
                        <div className="flex gap-2 items-center">
                          <FacebookShareButton
                            url={shareUrl}
                            quote={title}
                            hashtag={"#task"}
                          >
                            <FacebookIcon size={40} round={true} />
                          </FacebookShareButton>
                          <LinkedinShareButton url={shareUrl} title={title}>
                            <LinkedinIcon size={40} round={true} />
                          </LinkedinShareButton>
                          <TwitterShareButton url={shareUrl} hashtag={"#task"}>
                            <TwitterIcon size={40} round={true} />
                          </TwitterShareButton>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <hr />

              <div className="mt-5">
                <h3 className="text-xl font-semibold text-primary">
                  How to grading
                </h3>

                <p>{grading}</p>

                <div className="mt-4 border px-5 py-3 rounded-xl">
                  <h5 className="">Activity on Internal</h5>
                  <div className="flex gap-7">
                    <div className="flex items-center gap-2">
                      <LiaBusinessTimeSolid />
                      <p>{country}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <PiBriefcaseThin />
                      <p>{country}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-primary">
                    About the task
                  </h4>
                  <p>Key responsibilities:</p>
                  <p>{description}</p>
                </div>

                <div>
                  <h3 className="mb-3 mt-5 text-xl font-semibold text-primary ">
                    Skill(s) required
                  </h3>
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
                  <h3 className="text-xl font-semibold text-primary">
                    Number of openings
                  </h3>
                  <p>{3}</p>
                </div>

                <div className="my-5">
                  {!isDisabled ? (
                    <button
                      disabled={applied}
                      onClick={handleApply}
                      className={`bg-primary block mx-auto text-gray-100 px-8 py-3 rounded-md hover:bg-[#4ca068] transition  ${
                        applied &&
                        "bg-red-300 hover:bg-red-200 cursor-not-allowed"
                      }`}
                    >
                      Apply Now
                    </button>
                  ) : (
                    <button
                      className={`bg-primary block mx-auto text-gray-100 px-8 py-3 rounded-md hover:bg-[#4ca068] transition ${
                        isDisabled ? "cursor-not-allowed" : ""
                      }`}
                      onClick={(e) => {
                        if (isDisabled) {
                          e.preventDefault();
                        }
                      }}
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default BrowseTasksDetails;
