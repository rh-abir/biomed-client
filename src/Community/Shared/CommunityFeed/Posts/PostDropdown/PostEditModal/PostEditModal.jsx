import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { storage } from "../../../../../../firebase/firebase.config";

const PostEditModal = ({ setIsEditModalOpen, title, desc, postId }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const updatePostMutation = useMutation(
    async (data) => {
      setLoading(true);
      const photoFile = data.photo[0];

      if (photoFile == null) return;

      const photoRef = ref(storage, `photos/${photoFile.name + v4()}`);
      await uploadBytes(photoRef, photoFile);
      const downloadUrl = await getDownloadURL(photoRef);

      data.photo = downloadUrl;

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/posts/${postId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create a new post");
      }

      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
        Swal.fire("Success", "Post updated successfully", "success");
        setLoading(false);
        closeEditModal();
        navigate("/community");
      },
      onError: () => {
        Swal.fire("Error", "Failed to update post. Please try again.", "error");
        setLoading(false);
      },
    }
  );

  const onSubmit = async (data) => {
    updatePostMutation.mutate(data);
  };

  // Close modal functionality
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10 px-2">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">Edit Post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row items-center gap-2 mb-2">
            {/* image field */}
            <input
              type="file"
              name="photo"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
              {...register("photo", {
                required: "Please upload an image",
              })}
            />
            {errors?.photo && (
              <span className="text-red-500">{errors?.photo.message}</span>
            )}

            {/* title field */}
            <input
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={title || ""}
              className="w-full px-5 py-4 bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
              {...register("title")}
            />
          </div>
          <textarea
            name="desc"
            placeholder="Description"
            defaultValue={desc || ""}
            className="w-full px-5 py-4 bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
            {...register("desc")}
          />

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-500"
            type="submit"
          >
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            onClick={closeEditModal}
            className="bg-red-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-red-700 duration-500"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostEditModal;
