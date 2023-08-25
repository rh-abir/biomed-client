import React from "react";
import DashboardTitle from "../../../../components/DashboardTitle/DashboardTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import canvas from "../../../../assets/placeholder.jpg"
 
const CompanyView = () => {
  const { user } = useContext(AuthContext);

  const { data: companyView = [] } = useQuery({
    queryKey: ["companyView"],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/users/${user?.email}`);
      return res?.data;
    },
  });

  const { email, updateData } = companyView;


  return (
    <div className="min-h-screen p-6">
      <DashboardTitle
        title={"Company Profile!"}
        slogan={"Ready to jump back in?"}
      />
      <div className="bg-white dark:bg-gray-800 min-h-screen">
        <div className="p-10">
          <Link
            to={"/dashboard/company-profile"}
            className="mb-5 flex justify-end"
          >
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
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-semibold"></h1>
                  <p className="text-gray-500 dark:text-gray-200">
                    Team Size: {updateData?.teamSize ? updateData?.teamSize : "no data"}
                  </p>
                </div>
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
                <a href={updateData?.github ? updateData?.github : null} className="text-gray-600 text-2xl">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="mb-6 dark:text-gray-200">
              <h2>
                <span className="text-lg font-semibold">Company name:</span>{" "}
                {updateData?.companyName ? updateData?.companyName : "none"}
              </h2>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">About Company</h2>
              <p className="text-gray-600 dark:text-gray-300">{updateData?.aboutCompany ? updateData?.aboutCompany : "none"}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-lg dark:text-gray-200 font-semibold mb-2">
                Contact Information
              </h2>
              <div className="flex items-center space-x-2">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Address, {updateData?.address ? updateData?.address : "none"}
                  </p>
                  <a
                    href={updateData?.website}
                    className="text-blue-500 hover:underline"
                  >
                    {updateData?.website ? updateData?.website : "none"}
                  </a>
                  <p className="text-gray-600 dark:text-gray-300">Email: {email ? email : "none"}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">Company Culture</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We are a diverse team of passionate individuals working together
                to create innovative solutions that make a positive impact on
                the world. Our company values collaboration, creativity, and
                continuous learning.
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">Achievements</h2>
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

export default CompanyView;
