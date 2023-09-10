import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MdSend } from "react-icons/md";
import { AuthContext } from "../../../../../../Provider/AuthProvider";

const Comments = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

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
      <div className="flex items-center px-4 py-4 gap-2">
        <div
          title="View Profile"
          className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
        >
          <img
            referrerPolicy="no-referrer"
            src={updateData?.image ? updateData?.image : user?.photoURL}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <form className="flex items-center justify-around w-full" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("comment")}
            className="border-none w-full focus:outline-none rounded-full px-1"
            placeholder="Write a comment..."
          />
          <button type="submit" className="bg-transparent">
            <MdSend className="inline-block text-2xl text-green-700 mr-2 " />
          </button>
        </form>
      </div>
      <h2 className="text-center py-4">No comments yet</h2>
    </div>
  );
};

export default Comments;
