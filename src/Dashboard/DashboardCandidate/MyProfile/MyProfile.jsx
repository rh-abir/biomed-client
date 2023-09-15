import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import canvas from "../../../assets/placeholder.jpg";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";

const CompanyForm = () => {
  const { user } = useContext(AuthContext);

  const { data: companyView = [] } = useQuery({
    queryKey: ["companyView"],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/users/${user?.email}`
      );
      return res?.data;
    },
  });

  const { email, updateData } = companyView;

  return (
    <div className="min-h-screen p-6">
      <DashboardTitle title={"My Profile!"} slogan={"Ready to jump back in?"} />
      <div className="bg-white dark:bg-gray-800 min-h-screen">
        <div className="p-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg">
            <div className="md:flex justify-between items-center">
              <div className="flex flex-col items-center md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                <img
                  src={updateData?.image ? updateData?.image : user?.photoURL}
                  alt="Company Logo"
                  className="w-16 h-16 rounded-full object-cover border"
                />
                <Link
                  to={"/dashboard/editProfile"}
                  className="mb-5 flex justify-end"
                >
                  <button className="bg-primary px-3 py-1 rounded-md text-gray-200 hover:bg-hover md:hidden flex items-center gap-1">
                    <BiEdit /> <span>Edit</span>
                  </button>
                </Link>
              </div>
              <Link
                to={"/dashboard/editProfile"}
                className="mb-5 flex justify-end"
              >
                <button className="bg-primary px-4 py-2 rounded-md text-gray-200 hover:bg-hover hidden md:flex items-center gap-1">
                  <BiEdit /> <span>Edit</span>
                </button>
              </Link>
            </div>

            <div className="my-6 dark:text-gray-200">
              <h2>
                <span className="text-lg font-semibold">Name:</span>{" "}
                {updateData?.name2 ? updateData?.name2 : user?.displayName}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Email: {email ? email : "none"}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Phone: {updateData?.phone ? updateData?.phone : "none"}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {updateData?.description ? updateData?.description : "none"}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-lg dark:text-gray-200 font-semibold mb-2">
                Personal Information
              </h2>
              <div className="md:flex items-center md:space-x-10">
                <div className="mb-2">
                  <h2 className="text-sm font-semibold dark:text-gray-200">
                    Country
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {updateData?.country ? updateData?.country : "none"}
                  </p>
                </div>
                <div className="mb-2">
                  <h2 className="text-sm font-semibold dark:text-gray-200">
                    Age
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {updateData?.age ? updateData?.age : "none"}
                  </p>
                </div>
                <div className="mb-2">
                  <h2 className="text-sm font-semibold dark:text-gray-200">
                    Language
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {updateData?.language ? updateData?.language : "none"}
                  </p>
                </div>
                <div className="mb-2">
                  <h2 className="text-sm font-semibold dark:text-gray-200">
                    Education
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {updateData?.education ? updateData?.education : "none"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg dark:text-gray-200 font-semibold mb-2">
              Social
            </h2>
            <div className="flex space-x-4">
              <a
                href={updateData?.facebook ? updateData?.facebook : null}
                className="text-blue-500 text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href={updateData?.twitter ? updateData?.twitter : null}
                className="text-blue-400 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href={updateData?.linkedin ? updateData?.linkedin : null}
                className="text-blue-700 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href={updateData?.github ? updateData?.github : null}
                className="text-gray-600 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href={updateData?.website ? updateData?.website : null}
                className="text-gray-600 text-2xl"
              >
                <TfiWorld />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
