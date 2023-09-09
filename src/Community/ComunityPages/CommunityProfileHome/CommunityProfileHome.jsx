import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import coverBg from "../../../assets/profile_bg/whitel-wall.jpg";
import Posts from "../../Shared/CommunityFeed/Posts/Posts";
import SharePostForm from "../../Shared/CommunityFeed/SharePostForm/SharePostForm";

const CommunityProfileHome = () => {
  const { user } = useContext(AuthContext);

  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
  });

  const { updateData } = myProfileData;

  return (
    <div>
      <div className="relative">
        <img
          src={coverBg}
          alt="Cover Photo"
          className="w-full h-60 object-cover"
        />
        <img
          src={updateData?.image}
          alt="Profile Photo"
          className="w-32 h-32 absolute bottom-0 left-20 transform translate-y-1/2 rounded-full border-4 border-gray-400"
        />
      </div>
      <div className="p-8">
        <div className="mt-10 ms-12">
          <h1 className="text-2xl font-bold">{updateData?.name}</h1>
          <p className="text-gray-600">{updateData?.email}</p>
          <p className="text-gray-600">Software Engineer, Dhaka</p>
        </div>
        <div className="flex mt-2 ms-12">
          <p>
            <strong className="text-lg text-blue-800 font-bold">3,00</strong>{" "}
            Posts
          </p>
          <p className="ms-3">
            <strong className="text-lg text-blue-800 font-bold">200+</strong>{" "}
            Followers
          </p>
        </div>
        <div className="ms-12 mt-2">
          <button className="px-5 py-1 rounded-full bg-primary text-white font-semibold hover:bg-green-400">
            + Follow
          </button>
          <button className="px-5 py-1 border border-current font-semibold rounded-full ms-3 hover:bg-gray-300">
            Message
          </button>
        </div>
        <hr className="my-4 border-gray-400" />
        <div className="mt-4 ms-12">
          <h2 className="font-bold text-xl mb-2">About</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            ex non lectus fermentum aliquet id ac mi. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nullam vel ex non lectus
            fermentum aliquet id ac mi. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam vel ex non lectus fermentum aliquet id ac
            mi.
          </p>
        </div>

        <div className="flex mt-8 ms-12">
          <div className="w-1/2">
            <p className="font-bold text-lg">Education</p>
            <p>Bachelor in Computer Science</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold text-lg">Website</p>
            <a href="https://www.example.com" className="text-blue-500">
              www.example.com
            </a>
          </div>
        </div>
        <div className="flex mt-4 ms-12">
          <div className="w-1/2">
            <p className="font-bold text-lg">Work Experience</p>
            <p>Software Engineer at ABC Inc.</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold text-lg">Skills</p>
            <p>JavaScript, React, Tailwind CSS</p>
          </div>
        </div>
      </div>
      {/* Shared Post */}
      <SharePostForm />
      {/* Own Post */}
      <Posts />
    </div>
  );
};

export default CommunityProfileHome;
