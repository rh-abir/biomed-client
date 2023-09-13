import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const TeamMemberCard = ({ teamMember }) => {
  const { photo, name, position, facebook, linkedin, github } = teamMember;
  return (
    <div className="max-w-2xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white dark:bg-slate-700 dark:text-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32 w-full"
          src={photo}
          alt="Team Member Photo"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-gray-500 dark:text-gray-400">{position}</p>
      </div>
      <div className="p-4 border-t mx-8 mt-2">
        <div className="flex justify-center items-center space-x-2">
          <a href={facebook} target="_blank" className="text-blue-500 text-xl">
            <FaFacebookF />
          </a>
          <a href={linkedin} target="_blank" className="text-blue-700 dark:bg-white text-xl">
            <FaLinkedin />
          </a>
          <a href={github} target="_blank" className="text-gray-800 dark:bg-white text-xl dark:rounded-full">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
