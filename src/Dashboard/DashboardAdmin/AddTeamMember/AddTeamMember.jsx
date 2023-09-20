import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { v4 } from "uuid";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import { storage } from "../../../firebase/firebase.config";

const AddTeamMember = () => {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const createTeamMemberMutation = useMutation(
    async (data) => {
      setLoading(true);
      const photoFile = data.photo[0];

      if (photoFile == null) return;

      const photoRef = ref(
        storage,
        `teamMembersPhoto/${photoFile.name + v4()}`
      );
      await uploadBytes(photoRef, photoFile);
      const downloadUrl = await getDownloadURL(photoRef);

      data.photo = downloadUrl;

      console.log(downloadUrl);
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/teamMembers`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to added a new team member");
      }

      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
        toast.success("Team member added successfully");
        reset();
        setLoading(false);
        // navigate("/about-details")
      },
      onError: () => {
        toast.error("Oops... Team member added failed");
        setLoading(false);
      },
    }
  );

  const onSubmit = async (data) => {
    createTeamMemberMutation.mutate(data);
    console.log(data);
  };
  return (
    <div className="px-10 py-6 bg-gray-100 min-h-screen dark:bg-slate-700">
      {/* Title Section */}
      <DashboardTitle
        title={"Add a Team Member"}
        slogan={"Ready to Increase your team?"}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            id="photo"
            placeholder="Enter Point"
            className="w-full px-5 py-4 dark:bg-slate-800 dark:text-white bg-slate-100 border border-gray-300 focus:border-green-600 transition rounded-md outline-none mt-1"
            {...register("photo", {
              required: "Please add member Photo",
            })}
          />
          {errors?.photo && (
            <span className="text-red-500">{errors?.photo.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            className="w-full px-5 py-4 dark:bg-slate-800 dark:text-white bg-slate-100 border border-gray-300 focus:border-green-600 transition rounded-md outline-none mt-1"
            {...register("name", {
              required: "Please add member name",
            })}
          />
          {errors?.name && (
            <span className="text-red-500">{errors?.name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            placeholder="Add Position"
            className="w-full px-5 py-4 dark:bg-slate-800 dark:text-white bg-slate-100 border border-gray-300 focus:border-green-600 transition rounded-md outline-none mt-1"
            {...register("position", {
              required: "Please add member position",
            })}
          />
          {errors?.position && (
            <span className="text-red-500">{errors?.position.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="facebook">Facebook Link</label>
          <input
            type="text"
            id="facebook"
            placeholder="Enter Facebook Link"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none  mt-1"
            {...register("facebook", {
              required: "Please add facebook link",
            })}
          />
          {errors?.facebook && (
            <span className="text-red-500">{errors?.facebook.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="linkedin">Linkedin Link</label>
          <input
            type="text"
            id="linkedin"
            placeholder="Enter Linkedin Link"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none  mt-1"
            {...register("linkedin", {
              required: "Please add linkedin link",
            })}
          />
          {errors?.linkedin && (
            <span className="text-red-500">{errors?.linkedin.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="github">GitHub Link</label>
          <input
            type="text"
            id="github"
            placeholder="Enter GitHub Link"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none mt-1"
            {...register("github", {
              required: "Please add github link",
            })}
          />
          {errors?.github && (
            <span className="text-red-500">{errors?.github.message}</span>
          )}
        </div>
        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          {loading ? "Adding..." : "Add Member"}
        </button>
      </form>
    </div>
  );
};

export default AddTeamMember;
