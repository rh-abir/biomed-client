import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import canvas from "../../../assets/placeholder.jpg";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

  const { data: adminView = [] } = useQuery({
    queryKey: ["adminView"],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_BASE_URL}/users/${user?.email}`
      );
      return res?.data;
    },
  });

  const { email, updateData } = adminView;

  return (
    <div className="min-h-screen p-6">
      <DashboardTitle
        title={"Admin Profile!"}
        slogan={"Manage your profile here"}
      />
      <div className="bg-white dark:bg-gray-800 min-h-screen">
        <div className="p-10">
          <Link to={"/dashboard/admin-profile-edit"} className="mb-5 flex justify-end">
            <button className="bg-primary px-10 py-2 rounded-md text-gray-200 hover:bg-hover">
              Edit
            </button>
          </Link>
          <div className="bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={updateData?.image ? updateData?.image : canvas}
                  alt="Company Logo"
                  className="w-16 h-16 rounded-full object-cover border"
                />
              </div>
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
              </div>
            </div>
            <div className="mb-6 dark:text-gray-200">
              <h2>
                <span className="text-lg font-semibold">Admin Name:</span>{" "}
                {updateData?.companyName ? updateData?.companyName : "none"}
              </h2>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
                About Admin
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {updateData?.aboutCompany ? updateData?.aboutCompany : "none"}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-lg dark:text-gray-200 font-semibold mb-2">
                Contact Information
              </h2>
              <div className="flex items-center space-x-2">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Address,{" "}
                    {updateData?.address ? updateData?.address : "none"}
                  </p>
                  <a
                    href={updateData?.website}
                    className="text-blue-500 hover:underline"
                  >
                    {updateData?.website ? updateData?.website : "none"}
                  </a>
                  <p className="text-gray-600 dark:text-gray-300">
                    Email: {email ? email : "none"}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
                Company Culture
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We are a diverse team of passionate individuals working together
                to create innovative solutions that make a positive impact on
                the world. Our company values collaboration, creativity, and
                continuous learning.
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
                Achievements
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                <li>Winner of the Tech Innovation Award, 2022</li>
                <li>Featured in Forbes Top 100 Companies to Watch</li>
                <li>Recognized for Excellence in Customer Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
